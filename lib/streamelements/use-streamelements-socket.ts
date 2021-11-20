/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import io from 'socket.io-client';
import { StreamElementsEvent, StreamElementsTestEvent } from './types';

export const allowedEventListeners = [
  'tip',
  'tip-latest',
  'follow',
  'follower-latest',
  'subscriber',
  'subscriber-latest',
  'host',
  'host-latest',
  'cheer',
  'cheer-latest',
  'raid',
  'raid-latest',
];

export interface UseStreamElementsSocketOptions {
  token?: string;
  handleEvent?: (eventData: StreamElementsEvent) => void;
  handleTestEvent?: (eventData: StreamElementsTestEvent) => void;
  isTest?: boolean;
}

export function useStreamElementsSocket({
  token,
  handleTestEvent,
  isTest = false,
}: UseStreamElementsSocketOptions = {}) {
  const handleSocketTestEvent = React.useCallback(
    ({ listener, type, data, event, ...eventData }: StreamElementsTestEvent) => {
      console.log('[StreamElements] Test Event:', { ...eventData, listener, type, data, event });

      const normalisedEventData = {
        ...eventData,
        listener: type ?? listener,
        event: data ?? event,
      } as StreamElementsTestEvent;

      if (handleTestEvent) {
        handleTestEvent(normalisedEventData);
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
    client.on('event', handleSocketTestEvent);

    return () => {
      client.off('connect', handleConnect);
      client.off('authenticated', handleAuthenticated);

      client.off('event:test', handleSocketTestEvent);
      client.off('event', handleSocketTestEvent);
    };
  }, [token, handleSocketTestEvent, isTest]);
}
