import { StreamElementsTestEvent } from '~/lib/streamelements';
import { alert, AlertToast, DEFAULT_DISMISS_DURATION } from '~/modules/alert-manager';

export interface HandleTestToastOptions {
  eventData: StreamElementsTestEvent;
  dismissAfter?: number;
  onRemove?: (id?: string) => void;
}

export function handleTestToast({
  eventData,
  dismissAfter = DEFAULT_DISMISS_DURATION,
  onRemove,
}: HandleTestToastOptions) {
  switch (eventData.listener) {
    case 'tip-latest': {
      const { displayName, name, message } = eventData.event;
      const amount = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'USD',
      }).format(eventData.event.amount);

      alert.sendAlert({
        id: eventData._id,
        content: (
          <AlertToast
            title="Donation"
            variant="donation"
            recipient={`${displayName || name}`}
            amount={`${amount}`}
            content={message}
          />
        ),
        dismissAfter,
        onRemove,
      });
      break;
    }
    case 'follow':
    case 'follower-latest': {
      alert.sendAlert({
        id: eventData._id,
        content: (
          <AlertToast title="New Follower" variant="follow" content={eventData.event.name} />
        ),
        dismissAfter,
        onRemove,
      });
      break;
    }
    case 'subscriber-latest': {
      const { name, tier, sender, gifted, bulkGifted, message } = eventData.event;

      if (bulkGifted) {
        // Community gift
        const { amount } = eventData.event;

        alert.sendAlert({
          id: eventData._id,
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
          id: eventData._id,
          content: <AlertToast title="Gift Sub" variant="subscription" content={message} />,
          dismissAfter,
          onRemove,
        });
      } else {
        const { amount } = eventData.event;

        if (amount > 1) {
          // Resub
          alert.sendAlert({
            id: eventData._id,
            content: (
              <AlertToast title="Resub" variant="resub" content={`${name}`} amount={`×${amount}`} />
            ),
            dismissAfter,
            onRemove,
          });
        } else {
          // First sub
          alert.sendAlert({
            id: eventData._id,
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
        id: eventData._id,
        content: (
          <AlertToast title="Host" variant="host" recipient={name} amount={`${amount} viewers`} />
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
        id: eventData._id,
        content: (
          <AlertToast
            title="Bits"
            variant="bits"
            recipient={`${name}`}
            amount={`×${amount}`}
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
        id: eventData._id,
        content: (
          <AlertToast title="Raid" variant="raid" recipient={name} amount={`${amount} raiders`} />
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
}
