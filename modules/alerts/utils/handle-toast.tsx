import * as React from 'react';
import { StreamElementsEvent } from '~/lib/streamelements';
import { alert, AlertToast, DEFAULT_DISMISS_DURATION } from '~/modules/alert-manager';

export interface HandleToastOptions {
  eventData: StreamElementsEvent;
  dismissAfter?: number;
  onRemove?: (id?: string) => void;
}

export function handleToast({
  eventData,
  dismissAfter = DEFAULT_DISMISS_DURATION,
  onRemove,
}: HandleToastOptions) {
  switch (eventData.type) {
    case 'tip': {
      const { displayName, message, currency } = eventData.data;
      const amount = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency,
      }).format(eventData.data.amount);

      alert.sendAlert({
        id: eventData._id,
        content: (
          <AlertToast
            title="Donation"
            variant="donation"
            recipient={`${displayName} (${amount})`}
            content={message}
          />
        ),
        dismissAfter,
        onRemove,
      });
      break;
    }
    case 'follow': {
      const { displayName } = eventData.data;
      alert.sendAlert({
        id: eventData._id,
        content: <AlertToast title="Follow" variant="follow" content={displayName} />,
        dismissAfter,
        onRemove,
      });
      break;
    }
    case 'subscriber': {
      const { displayName, tier, sender, amount, gifted, bulkGifted, message } = eventData.data;

      if (bulkGifted) {
        // Community gift
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
      } else if (amount > 1) {
        // Resub
        alert.sendAlert({
          id: eventData._id,
          content: (
            <AlertToast title="Resub" variant="resub" content={`${displayName} (×${amount})`} />
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
              title={tier === 'prime' ? 'Prime Sub' : 'New Subscriber'}
              variant="subscription"
              content={displayName}
            />
          ),
          dismissAfter,
          onRemove,
        });
      }

      break;
    }
    case 'host': {
      const { displayName, amount } = eventData.data;
      const formattedAmount = new Intl.NumberFormat('en-GB').format(amount);

      alert.sendAlert({
        id: eventData._id,
        content: (
          <AlertToast
            title="Host"
            recipient={displayName}
            variant="host"
            content={`${formattedAmount} viewers`}
          />
        ),
        dismissAfter,
        onRemove,
      });
      break;
    }
    case 'cheer': {
      const { displayName, amount, message } = eventData.data;
      const formattedAmount = new Intl.NumberFormat('en-GB').format(amount);

      alert.sendAlert({
        id: eventData._id,
        content: (
          <AlertToast
            title="Bits"
            recipient={`${displayName} (×${formattedAmount})`}
            variant="bits"
            content={message}
          />
        ),
        dismissAfter,
        onRemove,
      });
      break;
    }
    case 'raid': {
      const { displayName, amount } = eventData.data;
      const formattedAmount = new Intl.NumberFormat('en-GB').format(amount);

      alert.sendAlert({
        id: eventData._id,
        content: (
          <AlertToast
            title="Raid"
            recipient={displayName}
            variant="raid"
            content={`${formattedAmount} raiders`}
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
}
