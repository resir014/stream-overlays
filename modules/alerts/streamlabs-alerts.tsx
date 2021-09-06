/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { alert, AlertToast, DEFAULT_DISMISS_DURATION } from '../alert-manager';
import { useStreamlabsEvents, StreamlabsEvent } from '~/lib/streamlabs';
import { logger } from '~/lib/logger';

const dismissAfter = DEFAULT_DISMISS_DURATION;

export const StreamlabsAlerts: React.FC = () => {
  const { events, setEvents } = useStreamlabsEvents();
  const [stale, setStale] = React.useState(false);
  const [current, setCurrent] = React.useState<StreamlabsEvent | undefined>(undefined);

  const addEventToQueue = (eventData: StreamlabsEvent) => {
    setCurrent(eventData);
    setStale(false);
  };

  React.useEffect(() => {
    logger.debug('current event', current);
    logger.debug('stale?', stale);

    const onRemove = (id?: string) => {
      setStale(true);
      setCurrent(undefined);
      setEvents(prev => prev.filter(event => event.id !== id));
    };

    const handleToaster = (eventData: StreamlabsEvent) => {
      if (eventData.for !== 'twitch_account' && eventData.type === 'donation') {
        logger.info('donation event', eventData);
        alert.sendAlert({
          id: eventData.id,
          content: (
            <AlertToast
              title="Donation"
              variant={eventData.type}
              recipient={`${eventData.message[0].name} (${eventData.message[0].formatted_amount})`}
              content={eventData.message[0].message}
            />
          ),
          dismissAfter,
          onRemove,
        });
      }

      if (eventData.for === 'twitch_account') {
        switch (eventData.type) {
          case 'follow': {
            logger.info('follow event', eventData);
            alert.sendAlert({
              id: eventData.id,
              content: (
                <AlertToast
                  title="Follow"
                  variant={eventData.type}
                  content={eventData.message[0].name}
                />
              ),
              dismissAfter,
              onRemove,
            });
            break;
          }
          case 'subscription': {
            logger.info('sub event', eventData);
            alert.sendAlert({
              id: eventData.id,
              content: (
                <AlertToast
                  title={eventData.message[0].sub_plan === 'Prime' ? 'Prime Sub' : 'Subscriber'}
                  variant={eventData.type}
                  content={eventData.message[0].name}
                />
              ),
              dismissAfter,
              onRemove,
            });
            break;
          }
          case 'resub': {
            logger.info('resub event', eventData);
            alert.sendAlert({
              id: eventData.id,
              content: (
                <AlertToast
                  title="Resub"
                  recipient={`${eventData.message[0].name} (×${eventData.message[0].months})`}
                  variant={eventData.type}
                  content={eventData.message[0].message}
                />
              ),
              dismissAfter,
              onRemove,
            });
            break;
          }
          case 'host': {
            logger.info('host event', eventData);
            alert.sendAlert({
              id: eventData.id,
              content: (
                <AlertToast
                  title="Host"
                  recipient={eventData.message[0].name}
                  variant={eventData.type}
                  content={`${eventData.message[0].viewers} viewers`}
                />
              ),
              dismissAfter,
              onRemove,
            });
            break;
          }
          case 'bits': {
            logger.info('bits event', eventData);
            alert.sendAlert({
              id: eventData.id,
              content: (
                <AlertToast
                  title="Bits"
                  recipient={`${eventData.message[0].name} (${eventData.message[0].amount})`}
                  variant={eventData.type}
                  content={eventData.message[0].message}
                />
              ),
              dismissAfter,
              onRemove,
            });
            break;
          }
          case 'raid': {
            logger.info('raid event', eventData);
            alert.sendAlert({
              id: eventData.id,
              content: (
                <AlertToast
                  title="Raid"
                  recipient={eventData.message[0].name}
                  variant={eventData.type}
                  content={`${eventData.message[0].raiders} raiders`}
                />
              ),
              dismissAfter,
              onRemove,
            });
            break;
          }
          default: {
            // default case
            logger.info('unprocessed event', eventData);
            break;
          }
        }
      }
    };

    if (!stale && current) {
      handleToaster(current);
    }
  }, [current, stale, setEvents]);

  React.useEffect(() => {
    const [recent] = events;
    logger.debug('events.length', events.length);
    logger.debug('events', events);

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
