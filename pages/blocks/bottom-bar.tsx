import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { parseString } from '~/lib/query-parser';
import { BottomBar, BottomBarVariants } from '~/modules/bottom-bar';

const BottomBarPage: NextPage = () => {
  const { query } = useRouter();

  const variant = React.useMemo(
    () => (parseString(query.variant) ?? undefined) as BottomBarVariants,
    [query.variant],
  );

  return <BottomBar variant={variant} />;
};

export default createNextPage(BottomBarPage, {
  layout: OverlayLayout,
});
