export type CurrentStreamInformation = {
  id: string;
  date?: string;
  series?: string;
  categories?: string[];
  stream_name?: string;
  description?: string;
};

export interface OverlayDataInformation {
  breakReturnTime?: string;
  timeSignal?: string;
  streamStart?: string;
}

export type GetUpcomingStreamsOptions = {
  referenceDate?: string | null;
  pageSize?: number | null;
};

export type UpcomingStreamData = {
  id: string;
  date?: string;
  series?: string;
  category?: string[];
  stream_name?: string;
  description?: string;
};
