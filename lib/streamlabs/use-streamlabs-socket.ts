/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import io from 'socket.io-client';
import { StreamlabsEvent } from './types';

export function useStreamlabsSocket(handler?: (eventData: StreamlabsEvent) => void) {
  const handleSocketEvent = React.useCallback(
    (eventData: StreamlabsEvent) => {
      console.log('[Streamlabs] Event:', eventData);

      if (handler) {
        handler(eventData);
      }
    },
    [handler],
  );

  React.useEffect(() => {
    const client = io(
      `https://sockets.streamlabs.com?token=${process.env.NEXT_PUBLIC_STREAMLABS_API_TOKEN}`,
      {
        transports: ['websocket'],
      },
    );

    client.on('event', handleSocketEvent);

    return () => {
      client.off('event', handleSocketEvent);
    };
  }, [handleSocketEvent]);
}
