export interface NotionData {
  id: string;
  Description: string;
  Category: string;
  Series: string;
  Date: string;
  [key: string]: string | boolean;
}

export interface ParsedSchedule {
  streamName: string;
  description: string;
  date: string;
}

export type AlertKinds = 'raid' | 'cheer' | 'host' | 'donation' | 'follow' | 'sub';

export type PrestreamVariants = 'prestream' | 'brb' | 'end';

export interface APIResponse<TResponse = any> {
  status: 'ok' | 'error';
  data: TResponse;
}
