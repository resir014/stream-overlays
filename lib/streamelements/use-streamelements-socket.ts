/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import io from 'socket.io-client';
import { StreamElementsEvent } from './types';

export const allowedEventListeners = [
  'tip',
  'tip-latest',
  'follower',
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
  handler?: (eventData: StreamElementsEvent) => void;
  isTest?: boolean;
}

export function useStreamElementsSocket({
  token,
  handler,
  isTest = false,
}: UseStreamElementsSocketOptions = {}) {
  const handleSocketEvent = React.useCallback(
    ({ listener, type, data, event, ...eventData }: StreamElementsEvent) => {
      console.log('[StreamElements] Event:', { ...eventData, listener, type, data, event });

      const normalisedEventData = {
        ...eventData,
        listener: type ?? listener,
        event: data ?? event,
      } as StreamElementsEvent;

      if (handler) {
        handler(normalisedEventData);
      }
    },
    [handler],
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

    client.on('event:test', handleSocketEvent);
    client.on('event', handleSocketEvent);

    return () => {
      client.off('connect', handleConnect);
      client.off('authenticated', handleAuthenticated);

      client.off('event:test', handleSocketEvent);
      client.off('event', handleSocketEvent);
    };
  }, [token, handleSocketEvent, isTest]);
}
