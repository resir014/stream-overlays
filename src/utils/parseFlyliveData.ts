import { FlyLiveParsedData, FlyLiveFlightData } from 'interfaces/flylive'

export default function parseFlyliveData(data: string): FlyLiveParsedData {
  // This is the only way we can properly parse FlyLive Studio's text-only formats.
  const dataSplit = data.split('@!!!!NEWLINEDONOTPUTTHISINTEXT!!!!@')

  const flightDataRaw = dataSplit[0]
  // const customTextNames = dataSplit[1]
  // const customTextTexts = dataSplit[2]
  // const transformData = dataSplit[3]
  // const landingRateTest = dataSplit[4]

  const flightDataSplit = flightDataRaw.split('; nextDataSource :')
  // const customTextNamesSplit = customTextNames.split(',')
  // const customTextTextsSplit = customTextTexts.split('!!!TEXTFILESEPARATOR!!!')

  const altitude = flightDataSplit[0]
  const heading = flightDataSplit[1]
  const groundSpeed = flightDataSplit[2]
  const airSpeed = flightDataSplit[3]
  const vSpeed = flightDataSplit[4]
  const planeLat = flightDataSplit[5]
  const planeLong = flightDataSplit[6]
  const dep = flightDataSplit[7]
  const arr = flightDataSplit[8]
  const callsign = flightDataSplit[9]
  const dtg = flightDataSplit[10]
  const distance = flightDataSplit[11]
  const flightPercent = parseInt(flightDataSplit[12], 10)
  const eta = flightDataSplit[13]
  const ttg = flightDataSplit[14]
  const simTime = flightDataSplit[15]
  const realTime = flightDataSplit[16]
  const isConnected = flightDataSplit[17]
  // const flightPercentDouble = parseFloat(flightDataSplit[18])
  const landingRate = flightDataSplit[20]

  const onGround = flightDataSplit[19] === 'true'
  const metar = flightDataSplit[21]
  const fps = flightDataSplit[22]
  const aircraftType = flightDataSplit[23]

  const flightData: FlyLiveFlightData = {
    altitude,
    heading,
    groundSpeed,
    airSpeed,
    vSpeed,
    planeLat,
    planeLong,
    dep,
    arr,
    callsign,
    dtg,
    distance,
    flightPercent,
    eta,
    ttg,
    simTime,
    realTime,
    isConnected,
    landingRate,
    onGround,
    metar,
    fps,
    aircraftType
  }

  return { flightDataSplit, flightData }
}
