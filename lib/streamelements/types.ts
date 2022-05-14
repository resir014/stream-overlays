export type TwitchSubscriptionTier = '1000' | '2000' | '3000' | 'prime';

export type StreamElementsTestEventBase<Listener extends string, Event extends {}> = {
  _id?: string;
  channel?: string;
  provider?: string;
  flagged?: boolean;
  listener: Listener;
  event: Event;
};

export type StreamElementsTestEvent =
  | StreamElementsTestEventBase<
      'tip' | 'tip-latest',
      { name: string; username: string; displayName: string; amount: number; message: string }
    >
  | StreamElementsTestEventBase<'follow' | 'follower-latest', { name: string }>
  | StreamElementsTestEventBase<
      'subscriber' | 'subscriber-latest',
      {
        name: string;
        amount: number;
        message: string;
        tier: TwitchSubscriptionTier;
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
  _id?: string;
  channel: string;
  type: Listener;
  provider: 'twitch' | 'youtube' | 'facebook';
  flagged: boolean;
  data: Event;
  createdAt: string;
  updatedAt: string;
};

export type StreamElementsEvent =
  | StreamElementsEventBase<
      'tip',
      {
        tipId: string;
        name: string;
        username: string;
        displayName: string;
        amount: number;
        currency: string;
        message: string;
      }
    >
  | StreamElementsEventBase<'follow', { username: string; displayName: string }>
  | StreamElementsEventBase<
      'subscriber',
      {
        username: string;
        displayName: string;
        amount: number;
        streak: number;
        tier: TwitchSubscriptionTier;
        gifted: boolean;
        bulkGifted: boolean;
        message: string;
        sender?: string;
      }
    >
  | StreamElementsEventBase<
      'host',
      {
        username: string;
        displayName: string;
        amount: number;
      }
    >
  | StreamElementsEventBase<
      'cheer',
      {
        username: string;
        displayName: string;
        amount: number;
        streak: number;
        tier: TwitchSubscriptionTier;
        message: string;
      }
    >
  | StreamElementsEventBase<
      'raid',
      {
        username: string;
        displayName: string;
        amount: number;
      }
    >;
