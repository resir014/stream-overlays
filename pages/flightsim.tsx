import * as React from 'react'
import { NextPage } from 'next'
import useSWR from 'swr'
import styled from 'styled-components'
import LayoutRoot from '../components/layout/LayoutRoot'
import FlightProgress from '../components/flightsim/FlightProgress'
import { STKPOverlayResponse } from '../interfaces/simToolkitPro'
import FlightItinerary from '../components/flightsim/FlightItinerary'
import FlightInfo from '../components/flightsim/FlightInfo'
import fetch from '../utils/fetch'

const OverlayWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  padding: 8px;

  > section {
    margin-right: 8px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`

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
  const { data } = useSWR<STKPOverlayResponse>('/api/flightsim', fetch, {
    refreshInterval: 1000
  })

  return (
    <LayoutRoot isTransparent>
      <FlightProgress value={data?.v.Progress || 0} max={100} />
      <OverlayWrapper>
        {data?.v.Departure && data?.v.Destination && (
          <FlightItinerary origin={data.v.Departure} destination={data.v.Destination} />
        )}
        {data?.v.Callsign && <FlightInfo name="ATC" value={data.v.Callsign} />}
        {data?.v.Reg && <FlightInfo name="REC" value={data.v.Reg} />}
        {data?.v.Airframe && <FlightInfo name="AC" value={data.v.Airframe} />}
        {data?.v.Network && <FlightInfo name="NW" value={data.v.Network} />}
        {data?.v.Groundspeed && <FlightInfo name="GSPD" value={`${data.v.Groundspeed}kts`} />}
        {data?.v.AirSpeed && <FlightInfo name="IAS" value={`${data.v.AirSpeed}kts`} />}
        {data?.v.TrueSpeed && <FlightInfo name="TAS" value={`${data.v.TrueSpeed}kts`} />}
        {data?.v.Heading && <FlightInfo name="HDG" value={`${data.v.Heading}°`} />}
        {data?.v.VSpeed && <FlightInfo name="VSPD" value={`${data.v.VSpeed}ft/min`} />}
        {data?.v.Altitude && <FlightInfo name="ALT" value={`${data.v.Altitude}ft`} />}
        {data?.v.ETE && <FlightInfo name="ETE" value={`${data.v.ETE}`} />}
        {data?.v.currentphase && <FlightInfo name="Phase" value={data.v.currentphase} />}
      </OverlayWrapper>
    </LayoutRoot>
  )
}

export default FlightSimOverlayPage
