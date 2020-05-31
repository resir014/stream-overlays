import * as React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import LayoutRoot from 'components/layout/LayoutRoot'
import FlightProgress from 'components/flightsim/FlightProgress'
import { FlyLiveParsedData } from 'interfaces/flylive'
import { APIResponse } from 'interfaces/types'
import FlightItinerary from 'components/flightsim/FlightItinerary'
import FlightInfo from 'components/flightsim/FlightInfo'
import fetch from 'utils/fetch'
import OverlayWrapper from 'components/flightsim/OverlayWrapper'

const FlightSimOverlayPage: NextPage = () => {
  // Calls the local FlyLive telemetry API endpoint and refetches every second
  const { data } = useSWR<APIResponse<FlyLiveParsedData>>('/api/flylive', fetch, {
    refreshInterval: 1000
  })
  const router = useRouter()

  const network = React.useMemo(() => {
    if (router.query.network) {
      if (Array.isArray(router.query.network)) {
        return router.query.network[0]
      }

      return router.query.network
    }

    return undefined
  }, [router.query.network])

  if (data?.status === 'ok') {
    const { data: res } = data

    return (
      <LayoutRoot isTransparent>
        <FlightProgress value={res.flightData.flightPercent || 0} max={100} />
        <OverlayWrapper>
          {res.flightData.dep && res.flightData.arr && (
            <FlightItinerary origin={res.flightData.dep} destination={res.flightData.arr} />
          )}
          {res.flightData.callsign && <FlightInfo name="ATC" value={res.flightData.callsign} />}
          {res.flightData.aircraftType && (
            <FlightInfo name="AC" value={res.flightData.aircraftType} />
          )}
          {network && <FlightInfo name="NW" value={network} />}
          {res.flightData.groundSpeed && (
            <FlightInfo name="GSPD" value={res.flightData.groundSpeed} />
          )}
          {res.flightData.airSpeed && <FlightInfo name="IAS" value={res.flightData.airSpeed} />}
          {res.flightData.heading && <FlightInfo name="HDG" value={res.flightData.heading} />}
          {res.flightData.vSpeed && <FlightInfo name="VSPD" value={res.flightData.vSpeed} />}
          {res.flightData.altitude && <FlightInfo name="ALT" value={res.flightData.altitude} />}
          {res.flightData.eta && <FlightInfo name="ETA" value={res.flightData.eta} />}
        </OverlayWrapper>
      </LayoutRoot>
    )
  }

  return null
}

export default FlightSimOverlayPage
