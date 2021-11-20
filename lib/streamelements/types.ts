export type StreamElementsTestEventBase<Listener extends string, Event extends {}> = {
  _id?: string;
  channel?: string;
  provider?: string;
  flagged?: boolean;
  listener: Listener;
  type?: Listener;
  event: Event;
  data?: Event;
};

export type StreamElementsTestEvent =
  | StreamElementsTestEventBase<
      'tip' | 'tip-latest',
      { name: string; amount: number; message: string }
    >
  | StreamElementsTestEventBase<'follow' | 'follower-latest', { name: string }>
  | StreamElementsTestEventBase<
      'subscriber' | 'subscriber-latest',
      {
        name: string;
        amount: number;
        message: string;
        tier: '1000' | '2000' | '3000' | 'prime';
        gifted: boolean;
        bulkGifted: boolean;
        sender?: string;
      }
    >
  | StreamElementsTestEventBase<'host' | 'host-latest', { name: string; amount: number }>
  | StreamElementsTestEventBase<
      'cheer' | 'cheer-latest',
      { name: string; amount: number; message: string }
    >
  | StreamElementsTestEventBase<'raid' | 'raid-latest', { name: string; amount: number }>;

export type StreamElementsEventBase<Listener extends string, Event extends {}> = {
  _id: string;
  channel: string;
  type: Listener;
  provider: 'twitch' | 'youtube' | 'facebook';
  flagged: boolean;
  data: Event;
  createdAt: string;
  updatedAt: string;
};

export type StreamElementsEvent = object;
