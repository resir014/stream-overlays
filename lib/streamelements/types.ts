export type StreamEventTypes =
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

export type StreamElementsEvent =
  | {
      listener: 'tip-latest';
      event: {
        name: string;
        amount: number;
        message: string;
      };
    }
  | {
      listener: 'follower-latest';
      event: {
        name: 'string';
      };
    }
  | {
      listener: 'subscriber-latest';
      event: {
        name: string;
        amount: number;
        message: string;
        tier: '1000' | '2000' | '3000' | 'prime';
        gifted: boolean;
        bulkGifted: boolean;
        sender?: string;
      };
    }
  | {
      listener: 'host-latest';
      event: {
        name: string;
        amount: number;
      };
    }
  | {
      listener: 'cheer-latest';
      event: {
        name: string;
        amount: number;
        message: string;
      };
    }
  | {
      listener: 'raid-latest';
      event: {
        name: string;
        amount: number;
      };
    };
