'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { InfoItemCard } from '~/components/info-item-card';
import { useFlyLiveData } from './use-flylive-data';
import { InfoCardWrapper } from './info-card-wrapper';
import { FlightProgress } from './flight-progress';
import { FlightItinerary } from './flight-itinerary';

export const FlyLiveStats: NextPage = () => {
  // Calls the local FlyLive telemetry API endpoint and refetches every second
  const { data, isLoading } = useFlyLiveData();
  const router = useRouter();

  const network = useMemo(() => {
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
          {flightData.dep && flightData.arr ? (
            <FlightItinerary origin={flightData.dep} destination={flightData.arr} />
          ) : null}
          {flightData.callsign ? <InfoItemCard title="ATC" content={flightData.callsign} /> : null}
          {flightData.aircraftType ? (
            <InfoItemCard title="AC" content={flightData.aircraftType} />
          ) : null}
          {network ? <InfoItemCard title="NW" content={network} /> : null}
          {flightData.groundSpeed ? (
            <InfoItemCard title="GSPD" content={flightData.groundSpeed} />
          ) : null}
          {flightData.airSpeed ? <InfoItemCard title="IAS" content={flightData.airSpeed} /> : null}
          {flightData.heading ? <InfoItemCard title="HDG" content={flightData.heading} /> : null}
          {flightData.vSpeed ? <InfoItemCard title="VSPD" content={flightData.vSpeed} /> : null}
          {flightData.altitude ? <InfoItemCard title="ALT" content={flightData.altitude} /> : null}
          {flightData.eta ? <InfoItemCard title="ETA" content={flightData.eta} /> : null}
        </InfoCardWrapper>
      </>
    );
  }

  return null;
};
