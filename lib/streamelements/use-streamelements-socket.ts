/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import io from 'socket.io-client';
import { StreamElementsEvent, StreamElementsTestEvent } from './types';

export const allowedTestEventListeners = [
  'tip-latest',
  'follower-latest',
  'subscriber-latest',
  'host-latest',
  'cheer-latest',
  'raid-latest',
];

export const allowedEventListeners = ['tip', 'follow', 'subscriber', 'host', 'cheer', 'raid'];

export interface UseStreamElementsSocketOptions {
  token?: string;
  handleEvent?: (eventData: StreamElementsEvent) => void;
  handleTestEvent?: (eventData: StreamElementsTestEvent) => void;
  isTest?: boolean;
}

export function useStreamElementsSocket({
  token,
  handleEvent,
  handleTestEvent,
  isTest = false,
}: UseStreamElementsSocketOptions = {}) {
  const handleSocketEvent = React.useCallback(
    (eventData: StreamElementsEvent) => {
      console.log('[StreamElements] Test Event:', eventData);

      if (handleEvent) {
        handleEvent(eventData);
      }
    },
    [handleEvent],
  );

  const handleSocketTestEvent = React.useCallback(
    (eventData: StreamElementsTestEvent) => {
      console.log('[StreamElements] Test Event:', eventData);

      if (handleTestEvent) {
        handleTestEvent(eventData);
      }
    },
    [handleTestEvent],
  );

  React.useEffect(() => {
    const client = io('https://realtime.streamelements.com', {
      transports: ['websocket'],
    });

    const handleConnect = () => {
      console.log('[StreamElements] Successfully connected to the websocket');
      client.emit('authenticate', {
        method: 'jwt',
        token,
      });
    };

    const handleAuthenticated = (data: Record<string, unknown>) => {
      const { channelId } = data;
      console.log(`[StreamElements] Successfully connected to channel ${channelId}`);
    };

    client.on('connect', handleConnect);
    client.on('authenticated', handleAuthenticated);

    client.on('event:test', handleSocketTestEvent);
    client.on('event', handleSocketEvent);

    return () => {
      client.off('connect', handleConnect);
      client.off('authenticated', handleAuthenticated);

      client.off('event:test', handleSocketTestEvent);
      client.off('event', handleSocketEvent);
    };
  }, [token, handleSocketEvent, handleSocketTestEvent, isTest]);
}
