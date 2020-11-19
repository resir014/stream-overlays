import * as React from 'react'
import { NextPage } from 'next'
import useSWR from 'swr'
import OverlayRoot from '~/components/overlay/OverlayRoot'
import { FlightProgress, FlightItinerary, FlightInfo, OverlayWrapper } from '~/modules/flightsim'
import { STKPOverlayResponse } from '~/interfaces/simToolkitPro'
import { APIResponse } from '~/interfaces/types'
import fetch from '~/utils/fetch'

export const dummyData: STKPOverlayResponse = {
  opts: {
    color: '#0081FF',
    opacity: 1
  },
  v: {
    Departure: 'WADD',
    Destination: 'WIII',
    ETE: '0:57:52',
    Groundspeed: '460',
    AirSpeed: '278',
    TrueSpeed: '451',
    VSpeed: '1509',
    Altitude: '31959',
    Heading: '298',
    Callsign: 'GIA401',
    Network: 'OFFLINE',
    Reg: 'PK-GNV',
    Airframe: 'B738',
    currentphase: 'Climb'
  }
}

const STKPOverlayPage: NextPage = () => {
  // Calls the local STKP overlay endpoint and refetches every second
  const { data } = useSWR<APIResponse<STKPOverlayResponse>>('/api/stkp', fetch, {
    refreshInterval: 1000
  })

  if (data?.status === 'ok') {
    const { data: res } = data

    return (
      <OverlayRoot>
        {res.v.Progress && <FlightProgress value={res.v.Progress || 0} max={100} />}
        <OverlayWrapper>
          {res.v.Departure && res.v.Destination && (
            <FlightItinerary origin={res.v.Departure} destination={res.v.Destination} />
          )}
          {res.v.Callsign && <FlightInfo name="ATC" value={res.v.Callsign} />}
          {res.v.Reg && <FlightInfo name="REG" value={res.v.Reg} />}
          {res.v.Network && <FlightInfo name="NW" value={res.v.Network} />}
          {res.v.AirSpeed && <FlightInfo name="GSPD" value={`${res.v.AirSpeed}kts`} />}
          {res.v.Heading && <FlightInfo name="HDG" value={`${res.v.Heading}°`} />}
          {res.v.VSpeed && <FlightInfo name="VSPD" value={`${res.v.VSpeed}ft/min`} />}
          {res.v.Altitude && <FlightInfo name="ALT" value={`${res.v.Altitude}ft`} />}
          {res.v.ETE && <FlightInfo name="ETE" value={`${res.v.ETE}`} />}
          {res.v.currentphase && <FlightInfo name="Phase" value={res.v.currentphase} />}
        </OverlayWrapper>
      </OverlayRoot>
    )
  }

  return null
}

export default STKPOverlayPage
