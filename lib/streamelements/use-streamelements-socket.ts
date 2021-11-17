/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import io from 'socket.io-client';
import { StreamElementsEvent } from './types';

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
    (eventData: StreamElementsEvent) => {
      if (handler) {
        handler(eventData);
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

    if (isTest) {
      client.on('event:test', handleSocketEvent);
    } else {
      client.on('event', handleSocketEvent);
    }

    return () => {
      client.off('connect', handleConnect);
      client.off('authenticated', handleAuthenticated);

      if (isTest) {
        client.off('event:test', handleSocketEvent);
      } else {
        client.off('event', handleSocketEvent);
      }
    };
  }, [token, handleSocketEvent, isTest]);
}
