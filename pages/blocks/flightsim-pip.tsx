import * as React from 'react';
import { NextPage } from 'next';
import { createNextPage } from '~/lib/create-next-page';
import { OverlayLayout } from '~/layouts/overlay-layout';

const FlightsimPIPPage: NextPage = () => {
  return (
    <div className="flex-auto h-full max-h-[376px] bg-chungking-blue-500 bg-opacity-25 border-t-4 border-chungking-blue-500" />
  );
};

export default createNextPage(FlightsimPIPPage, {
  layout: OverlayLayout,
});
