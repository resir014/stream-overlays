import * as React from 'react';
import toast from 'toasted-notes';

import Alert from '../../components/alerts/Alert';

const saweriaAlertURL = `/api/saweria/streams?channel=donation.${process.env.NEXT_PUBLIC_SAWERIA_STREAM_KEY}`;

const SaweriaAlerts: React.FC = () => {
  const handleMessage = (e: MessageEvent) => {
    const { data } = JSON.parse(e.data as string);

    toast.notify(
      () => {
        return (
          <Alert
            kind="donation"
            donatee={data.donatee}
            amount={data.amount}
            message={data.message}
          />
        );
      },
      {
        duration: 5000,
        position: 'bottom-right',
      },
    );
  };

  React.useEffect(() => {
    const eventSource = new EventSource(saweriaAlertURL);
    eventSource.addEventListener<any>('donations', handleMessage);

    return () => {
      eventSource.removeEventListener<any>('donations', handleMessage);
    };
  }, []);

  return null;
};

export default SaweriaAlerts;
