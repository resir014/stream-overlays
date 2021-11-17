/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { nanoid } from 'nanoid';
import { alert, AlertToast, DEFAULT_DISMISS_DURATION } from '../alert-manager';
import {
  allowedEventListeners,
  StreamElementsEvent,
  useStreamElementsSocket,
} from '~/lib/streamelements';

const dismissAfter = DEFAULT_DISMISS_DURATION;

export const StreamElementsAlerts: React.FC = () => {
  const [events, setEvents] = React.useState<StreamElementsEvent[]>([]);
  const [stale, setStale] = React.useState(false);
  const [current, setCurrent] = React.useState<StreamElementsEvent | undefined>(undefined);

  const addEvents = (eventData: StreamElementsEvent) => {
    setEvents(prev => [eventData, ...prev]);
  };

  const addEventToQueue = (eventData: StreamElementsEvent) => {
    setCurrent(eventData);
    setStale(false);
  };

  useStreamElementsSocket({
    token: process.env.NEXT_PUBLIC_STREAMELEMENTS_ACCESS_TOKEN,
    isTest: true,
    handler: eventData => {
      console.log('[StreamElementsAlerts] Event:', eventData);

      if (allowedEventListeners.includes(eventData.listener)) {
        // Add unique id to allow for removal when the alert is stale
        addEvents({ id: nanoid(), ...eventData });
      }
    },
  });

  React.useEffect(() => {
    console.log('[StreamElementsAlerts] current event:', current);
    console.log('[StreamElementsAlerts] stale?', stale);

    const onRemove = (id?: string) => {
      setStale(true);
      setCurrent(undefined);
      setEvents(prev => prev.filter(event => event.id !== id));
    };

    const handleToaster = (eventData: StreamElementsEvent) => {
      switch (eventData.listener) {
        case 'tip-latest': {
          const { name, message } = eventData.event;
          const amount = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'USD',
          }).format(eventData.event.amount);

          alert.sendAlert({
            id: eventData.id,
            content: (
              <AlertToast
                title="Donation"
                variant="donation"
                recipient={`${name} (${amount})`}
                content={message}
              />
            ),
            dismissAfter,
            onRemove,
          });
          break;
        }
        case 'follower-latest': {
          alert.sendAlert({
            id: eventData.id,
            content: <AlertToast title="Follow" variant="follow" content={eventData.event.name} />,
            dismissAfter,
            onRemove,
          });
          break;
        }
        case 'subscriber-latest': {
          const { name, tier, sender, gifted, bulkGifted } = eventData.event;

          if (bulkGifted) {
            // Community gift
            const { amount } = eventData.event;

            alert.sendAlert({
              id: eventData.id,
              content: (
                <AlertToast
                  title="Gift Sub"
                  variant="subscription"
                  content={`${sender} gifted ${amount} subs to the community!`}
                />
              ),
              dismissAfter,
              onRemove,
            });
          } else if (gifted) {
            // Gift
            alert.sendAlert({
              id: eventData.id,
              content: (
                <AlertToast
                  title="Gift Sub"
                  variant="subscription"
                  content={`${sender} gifted a sub to ${name}!`}
                />
              ),
              dismissAfter,
              onRemove,
            });
          } else {
            const { amount } = eventData.event;

            if (amount > 1) {
              // Resub
              alert.sendAlert({
                id: eventData.id,
                content: (
                  <AlertToast title="Resub" variant="resub" content={`${name} (×${amount})`} />
                ),
                dismissAfter,
                onRemove,
              });
            } else {
              // First sub
              alert.sendAlert({
                id: eventData.id,
                content: (
                  <AlertToast
                    title={tier === 'prime' ? 'Prime Sub' : 'Subscriber'}
                    variant="subscription"
                    content={name}
                  />
                ),
                dismissAfter,
                onRemove,
              });
            }
          }

          break;
        }
        case 'host-latest': {
          const { name } = eventData.event;
          const amount = new Intl.NumberFormat('en-GB').format(eventData.event.amount);

          alert.sendAlert({
            id: eventData.id,
            content: (
              <AlertToast
                title="Host"
                recipient={name}
                variant="host"
                content={`${amount} viewers`}
              />
            ),
            dismissAfter,
            onRemove,
          });
          break;
        }
        case 'cheer-latest': {
          const { name, message } = eventData.event;
          const amount = new Intl.NumberFormat('en-GB').format(eventData.event.amount);

          alert.sendAlert({
            id: eventData.id,
            content: (
              <AlertToast
                title="Bits"
                recipient={`${name} (×${amount})`}
                variant="bits"
                content={message}
              />
            ),
            dismissAfter,
            onRemove,
          });
          break;
        }
        case 'raid-latest': {
          const { name } = eventData.event;
          const amount = new Intl.NumberFormat('en-GB').format(eventData.event.amount);

          alert.sendAlert({
            id: eventData.id,
            content: (
              <AlertToast
                title="Raid"
                recipient={name}
                variant="raid"
                content={`${amount} raiders`}
              />
            ),
            dismissAfter,
            onRemove,
          });
          break;
        }
        default: {
          // default case
          console.log('[StreamElementsAlerts] unprocessed event:', eventData);
          break;
        }
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
