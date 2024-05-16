'use client';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import {
  allowedEventListeners,
  allowedTestEventListeners,
  StreamElementsEvent,
  StreamElementsTestEvent,
  useStreamElementsSocket,
} from '~/lib/streamelements';
import { DEFAULT_DISMISS_DURATION } from '../alert-manager';
import { handleTestToast } from './utils/handle-test-toast';
import { handleToast } from './utils/handle-toast';

const dismissAfter = DEFAULT_DISMISS_DURATION;

type ProdOrTestEvent = StreamElementsEvent | StreamElementsTestEvent;

export function StreamElementsAlerts() {
  const [events, setEvents] = useState<ProdOrTestEvent[]>([]);
  const [stale, setStale] = useState(false);
  const [current, setCurrent] = useState<ProdOrTestEvent | undefined>(undefined);

  const addEvents = (eventData: ProdOrTestEvent) => {
    setEvents(prev => [eventData, ...prev]);
  };

  const addEventToQueue = (eventData: ProdOrTestEvent) => {
    setCurrent(eventData);
    setStale(false);
  };

  useStreamElementsSocket({
    token: process.env.NEXT_PUBLIC_STREAMELEMENTS_ACCESS_TOKEN,
    handleEvent: eventData => {
      const isEventProcessable = allowedEventListeners.includes(eventData.type);

      console.log('[Alerts] Event type:', eventData.type);
      console.log('[Alerts] is event processable?', isEventProcessable);

      if (isEventProcessable) {
        addEvents({
          ...eventData,
          _id: eventData._id ?? nanoid(),
        } as StreamElementsEvent);
      }
    },
    handleTestEvent: eventData => {
      const isEventProcessable = allowedTestEventListeners.includes(eventData.listener);

      console.log('[Alerts] Test Event type:', eventData.listener);
      console.log('[Alerts] is test event processable?', isEventProcessable);

      if (isEventProcessable) {
        // Add unique id to allow for removal when the alert is stale
        addEvents({
          ...eventData,
          _id: eventData._id ?? nanoid(),
        } as StreamElementsTestEvent);
      }
    },
  });

  useEffect(() => {
    console.log('[Alerts] current event:', current);
    console.log('[Alerts] stale?', stale);

    const onRemove = (id?: string) => {
      setStale(true);
      setCurrent(undefined);
      setEvents(prev => prev.filter(event => event._id !== id));
    };

    // Unfortunately we need to handle each of these alert types differently because
    // the Websocket API docs is different compared to what was in reality.
    const handleToaster = (eventData: ProdOrTestEvent) => {
      if ('listener' in eventData) {
        handleTestToast({ eventData, dismissAfter, onRemove });
      } else if ('type' in eventData) {
        handleToast({ eventData, dismissAfter, onRemove });
      } else {
        console.log('[Alerts] unable to determine whether an alert is test or not', eventData);
      }
    };

    if (!stale && current) {
      handleToaster(current);
    }
  }, [current, stale]);

  useEffect(() => {
    const [recent] = events;
    console.log('[Alerts] events.length', events.length);
    console.log('[Alerts] events', events);

    if (events.length > 0) {
      setTimeout(
        () => {
          addEventToQueue(recent);
        },
        (dismissAfter + 500) * (events.length - 1),
      );
    } else {
      addEventToQueue(recent);
    }
  }, [events]);

  return <div className="flex flex-col justify-end w-full h-full min-h-screen" />;
}
