import * as React from 'react'
import { NextPage } from 'next'
import OverlayRoot from '~/components/overlay/OverlayRoot'
import { FlightProgress, FlightItinerary, FlightInfo, OverlayWrapper } from '~/modules/flightsim'
import { STKPOverlayResponse } from '~/interfaces/simToolkitPro'
import useSTKPData from '~/modules/flightsim/useSTKPData'

export const dummyData: STKPOverlayResponse = {
  opts: {
    color: '#0081FF',
    opacity: 1
  },
  v: {
    Departure: 'WADD',
    Destination: 'WIII',
    Progress: 16,
    ETE: '0:57:52',
    Groundspeed: '460',
    AirSpeed: '278',
    TrueSpeed: '451',
    VSpeed: '1509',
    Altitude: 31959,
    Heading: 298,
    Callsign: 'GIA401',
    Network: 'OFFLINE',
    Reg: 'PK-GNV',
    Airframe: 'B738',
    currentphase: 'Climb'
  }
}

const FlightSimOverlayPage: NextPage = () => {
  // Calls the local STKP overlay endpoint and refetches every second
  const { data, isLoading } = useSTKPData()

  if (!isLoading && data) {
    const { v } = data
    return (
      <OverlayRoot isTransparent>
        <FlightProgress value={v.Progress || 0} max={100} />
        <OverlayWrapper>
          {v.Departure && v.Destination && (
            <FlightItinerary origin={v.Departure} destination={v.Destination} />
          )}
          {v.Callsign && <FlightInfo name="ATC" value={v.Callsign} />}
          {v.Reg && <FlightInfo name="REG" value={v.Reg} />}
          {v.Airframe && <FlightInfo name="AC" value={v.Airframe} />}
          {v.Network && <FlightInfo name="NW" value={v.Network} />}
          {v.Groundspeed && <FlightInfo name="GSPD" value={`${v.Groundspeed}kts`} />}
          {v.AirSpeed && <FlightInfo name="IAS" value={`${v.AirSpeed}kts`} />}
          {v.TrueSpeed && <FlightInfo name="TAS" value={`${v.TrueSpeed}kts`} />}
          {v.Heading && <FlightInfo name="HDG" value={`${v.Heading}°`} />}
          {v.VSpeed && <FlightInfo name="VSPD" value={`${v.VSpeed}ft/min`} />}
          {v.Altitude && <FlightInfo name="ALT" value={`${v.Altitude}ft`} />}
          {v.ETE && <FlightInfo name="ETE" value={`${v.ETE}`} />}
          {v.currentphase && <FlightInfo name="Phase" value={v.currentphase} />}
        </OverlayWrapper>
      </OverlayRoot>
    )
  }

  return null
}

export default FlightSimOverlayPage
