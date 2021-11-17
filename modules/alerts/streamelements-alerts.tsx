/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { useStreamElementsSocket } from '~/lib/streamelements';

export const StreamElementsAlerts: React.FC = () => {
  useStreamElementsSocket({
    token: process.env.NEXT_PUBLIC_STREAMELEMENTS_ACCESS_TOKEN,
    isTest: true,
    handler: eventData => {
      console.log('[StreamElementsAlerts] Event:', eventData);
    },
  });

  return <div className="flex flex-col justify-end w-full h-full min-h-screen" />;
};
