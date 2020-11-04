import { NextApiRequest, NextApiResponse } from 'next'
import { STKPOverlayResponse } from '~/interfaces/simToolkitPro'

async function readOverlayFile(filename: string) {
  try {
    const { default: fs } = await import('fs')
    const { default: os } = await import('os')
    const { default: path } = await import('path')
    const overlayFilePath = path.resolve(os.homedir(), './Documents/SimToolkitPro/streaming')
    const contents = fs.readFileSync(path.join(overlayFilePath, filename))

    if (contents) {
      return contents.toString('utf-8')
    }

    return undefined
  } catch (err) {
    throw new Error(err)
  }
}

const flylive = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const data: STKPOverlayResponse = {
      opts: {
        color: '#006fe6',
        opacity: 1
      },
      v: {
        Departure: await readOverlayFile('departureicao.txt'),
        Destination: await readOverlayFile('destinationicao.txt'),
        ETE: await readOverlayFile('eta.txt'),
        AirSpeed: await readOverlayFile('speed.txt'),
        VSpeed: await readOverlayFile('vspeed.txt'),
        Altitude: await readOverlayFile('altitude.txt'),
        Heading: await readOverlayFile('heading.txt'),
        Callsign: await readOverlayFile('callsign.txt'),
        Network: await readOverlayFile('network.txt'),
        Reg: await readOverlayFile('registration.txt'),
        Airframe: await readOverlayFile('aircraft.txt'),
        currentphase: await readOverlayFile('phase.txt')
      }
    }
    res.status(200).json({ status: 'ok', data })
  } catch (err) {
    res.status(500).json({
      status: 'error',
      data: {
        message: err.message
      }
    })
  }
}

export default flylive
