/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/router';
import { DEFAULT_DISMISS_DURATION } from '../alert-manager';
import {
  allowedEventListeners,
  allowedTestEventListeners,
  StreamElementsEvent,
  StreamElementsTestEvent,
  useStreamElementsSocket,
} from '~/lib/streamelements';
import { parseString } from '~/lib/query-parser';
import { handleTestToast } from './utils/handle-test-toast';
import { handleToast } from './utils/handle-toast';

const dismissAfter = DEFAULT_DISMISS_DURATION;

type ProdOrTestEvent = StreamElementsEvent | StreamElementsTestEvent;

export const StreamElementsAlerts: React.FC = () => {
  const router = useRouter();
  const [events, setEvents] = React.useState<ProdOrTestEvent[]>([]);
  const [stale, setStale] = React.useState(false);
  const [current, setCurrent] = React.useState<ProdOrTestEvent | undefined>(undefined);

  const isTest = React.useMemo(
    () => !!parseString(router.query.isTest) || undefined,
    [router.query.isTest],
  );

  const addEvents = (eventData: ProdOrTestEvent) => {
    setEvents(prev => [eventData, ...prev]);
  };

  const addEventToQueue = (eventData: ProdOrTestEvent) => {
    setCurrent(eventData);
    setStale(false);
  };

  useStreamElementsSocket({
    isTest,
    token: process.env.NEXT_PUBLIC_STREAMELEMENTS_ACCESS_TOKEN,
    handleEvent: eventData => {
      const isEventProcessable = allowedEventListeners.includes(eventData.type);

      console.log('[StreamElementsAlerts] Event type:', eventData.type);
      console.log('[StreamElementsAlerts] is event processable?', isEventProcessable);

      if (isEventProcessable) {
        // Add unique id to allow for removal when the alert is stale
        addEvents({
          ...eventData,
          _id: eventData._id || nanoid(),
        } as StreamElementsEvent);
      }
    },
    handleTestEvent: eventData => {
      const isEventProcessable = allowedTestEventListeners.includes(eventData.listener);

      console.log('[StreamElementsAlerts] Test Event type:', eventData.listener);
      console.log('[StreamElementsAlerts] is test event processable?', isEventProcessable);

      if (isEventProcessable) {
        // Add unique id to allow for removal when the alert is stale
        addEvents({
          ...eventData,
          _id: eventData._id ?? nanoid(),
        } as StreamElementsTestEvent);
      }
    },
  });

  React.useEffect(() => {
    console.log('[StreamElementsAlerts] current event:', current);
    console.log('[StreamElementsAlerts] stale?', stale);

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
        console.log(
          '[StreamElementsAlerts] unable to determine whether an alert is test or not',
          eventData,
        );
      }
    };

    if (!stale && current) {
      handleToaster(current);
    }
  }, [current, stale]);

  React.useEffect(() => {
    const [recent] = events;
    console.log('[StreamElementsAlerts] events.length', events.length);
    console.log('[StreamElementsAlerts] events', events);

    if (events.length > 0) {
      setTimeout(() => {
        addEventToQueue(recent);
      }, (dismissAfter + 500) * (events.length - 1));
    } else {
      addEventToQueue(recent);
    }
  }, [events]);

  return <div className="flex flex-col justify-end w-full h-full min-h-screen" />;
};
