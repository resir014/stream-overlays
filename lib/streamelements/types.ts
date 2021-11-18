export type StreamElementsEventBase<Listener extends string, Event extends {}> = {
  _id?: string;
  listener: Listener;
  event: Event;
};

export type StreamElementsEvent =
  | StreamElementsEventBase<'tip-latest', { name: string; amount: number; message: string }>
  | StreamElementsEventBase<'follower-latest', { name: string }>
  | StreamElementsEventBase<
      'subscriber-latest',
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
  | StreamElementsEventBase<'host-latest', { name: string; amount: number }>
  | StreamElementsEventBase<'cheer-latest', { name: string; amount: number; message: string }>
  | StreamElementsEventBase<'raid-latest', { name: string; amount: number }>;
