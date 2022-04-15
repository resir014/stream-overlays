import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { InfoCardWrapper } from './info-card-wrapper';
import { FlightProgress } from './flight-progress';
import { FlightItinerary } from './flight-itinerary';
import { InfoItemCard } from '~/components/info-item-card';
import { useFlyLiveData } from '~/lib/flightsim/flylive';

export const FlyLiveStats: NextPage = () => {
  // Calls the local FlyLive telemetry API endpoint and refetches every second
  const { data, isLoading } = useFlyLiveData();
  const router = useRouter();

  const network = React.useMemo(() => {
    if (router.query.network) {
      if (Array.isArray(router.query.network)) {
        return router.query.network[0];
      }

      return router.query.network;
    }

    return undefined;
  }, [router.query]);

  if (!isLoading && data) {
    const { flightData } = data;

    return (
      <>
        <FlightProgress value={flightData.flightPercent ?? 0} max={100} />
        <InfoCardWrapper>
          {flightData.dep && flightData.arr && (
            <FlightItinerary origin={flightData.dep} destination={flightData.arr} />
          )}
          {flightData.callsign && <InfoItemCard title="ATC" content={flightData.callsign} />}
          {flightData.aircraftType && <InfoItemCard title="AC" content={flightData.aircraftType} />}
          {network && <InfoItemCard title="NW" content={network} />}
          {flightData.groundSpeed && <InfoItemCard title="GSPD" content={flightData.groundSpeed} />}
          {flightData.airSpeed && <InfoItemCard title="IAS" content={flightData.airSpeed} />}
          {flightData.heading && <InfoItemCard title="HDG" content={flightData.heading} />}
          {flightData.vSpeed && <InfoItemCard title="VSPD" content={flightData.vSpeed} />}
          {flightData.altitude && <InfoItemCard title="ALT" content={flightData.altitude} />}
          {flightData.eta && <InfoItemCard title="ETA" content={flightData.eta} />}
        </InfoCardWrapper>
      </>
    );
  }

  return null;
};
