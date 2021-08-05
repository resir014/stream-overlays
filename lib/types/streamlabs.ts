export type StreamlabsEventTypes =
  | 'donation'
  | 'follow'
  | 'subscription'
  | 'resub'
  | 'host'
  | 'bits'
  | 'raid';

export interface BaseMessage {
  _id: string;
  name: string;
  [key: string]: any;
}

export interface StreamlabsEvent {
  id?: string;
  for?: string;
  type: StreamlabsEventTypes; // this type
  message: BaseMessage[]; // affects this type
}
