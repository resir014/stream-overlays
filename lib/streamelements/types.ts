export type StreamElementsEventBase<Listener extends string, Event extends {}> = {
  _id?: string;
  channel?: string;
  provider?: string;
  flagged?: boolean;
  listener: Listener;
  type?: Listener;
  event: Event;
  data?: Event;
};

export type StreamElementsEvent =
  | StreamElementsEventBase<'tip' | 'tip-latest', { name: string; amount: number; message: string }>
  | StreamElementsEventBase<'follow' | 'follower-latest', { name: string }>
  | StreamElementsEventBase<
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
  | StreamElementsEventBase<'host' | 'host-latest', { name: string; amount: number }>
  | StreamElementsEventBase<
      'cheer' | 'cheer-latest',
      { name: string; amount: number; message: string }
    >
  | StreamElementsEventBase<'raid' | 'raid-latest', { name: string; amount: number }>;
