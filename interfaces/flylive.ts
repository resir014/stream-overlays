export interface FlyLiveFlightData {
  altitude?: string;
  heading?: string;
  groundSpeed?: string;
  airSpeed?: string;
  vSpeed?: string;
  planeLat?: string;
  planeLong?: string;
  dep?: string;
  arr?: string;
  callsign?: string;
  dtg?: string;
  distance?: string;
  flightPercent?: number;
  eta?: string;
  ttg?: string;
  simTime?: string;
  realTime?: string;
  isConnected?: string;
  flightPercentDouble?: number;
  landingRate?: string;
  onGround?: boolean;
  metar?: string;
  fps?: string;
  aircraftType?: string;
}

export interface FlyLiveParsedData {
  flightDataSplit: string[];
  flightData: FlyLiveFlightData;
}
