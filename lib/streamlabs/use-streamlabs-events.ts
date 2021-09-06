/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import io from 'socket.io-client';
import { logger } from '../logger';
import { StreamlabsEvent } from './types';

export function useStreamlabsEvents() {
  const [events, setEvents] = React.useState<StreamlabsEvent[]>([]);

  const addEvents = (eventData: StreamlabsEvent) => {
    setEvents(prev => [eventData, ...prev]);
  };

  const handleSocketEvent = React.useCallback((eventData: StreamlabsEvent) => {
    if (eventData.for === 'twitch_account' || eventData.type === 'donation') {
      addEvents({ id: eventData.message[0]._id, ...eventData });
    } else {
      // default case
      logger.debug('unhandled event', eventData);
    }
  }, []);

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

  return { events, setEvents };
}
