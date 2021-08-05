import * as React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import OverlayRoot from '~/components/overlay/OverlayRoot'
import { FlightProgress, FlightItinerary, FlightInfo, OverlayWrapper } from '~/modules/flightsim'
import useFlyLiveData from '~/modules/flightsim/useFlyLiveData'

const FlyLiveOverlayPage: NextPage = () => {
  // Calls the local FlyLive telemetry API endpoint and refetches every second
  const { data, isLoading } = useFlyLiveData()
  const router = useRouter()

  const network = React.useMemo(() => {
    if (router.query.network) {
      if (Array.isArray(router.query.network)) {
        return router.query.network[0]
      }

      return router.query.network
    }

    return undefined
  }, [router.query])

  if (!isLoading && data) {
    const { flightData } = data

    return (
      <OverlayRoot>
        <FlightProgress value={flightData.flightPercent || 0} max={100} />
        <OverlayWrapper>
          {flightData.dep && flightData.arr && (
            <FlightItinerary origin={flightData.dep} destination={flightData.arr} />
          )}
          {flightData.callsign && <FlightInfo name="ATC" value={flightData.callsign} />}
          {flightData.aircraftType && <FlightInfo name="AC" value={flightData.aircraftType} />}
          {network && <FlightInfo name="NW" value={network} />}
          {flightData.groundSpeed && <FlightInfo name="GSPD" value={flightData.groundSpeed} />}
          {flightData.airSpeed && <FlightInfo name="IAS" value={flightData.airSpeed} />}
          {flightData.heading && <FlightInfo name="HDG" value={flightData.heading} />}
          {flightData.vSpeed && <FlightInfo name="VSPD" value={flightData.vSpeed} />}
          {flightData.altitude && <FlightInfo name="ALT" value={flightData.altitude} />}
          {flightData.eta && <FlightInfo name="ETA" value={flightData.eta} />}
        </OverlayWrapper>
      </OverlayRoot>
    )
  }

  return null
}

export default FlyLiveOverlayPage
