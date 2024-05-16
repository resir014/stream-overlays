import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { parseString } from '~/lib/query-parser';
import { resolveHexColor } from '~/lib/colors';

export default function BackCoverBlock() {
  const { query } = useRouter();

  const borderColor = useMemo(
    () => resolveHexColor(parseString(query.borderColor)) ?? '#0070f3',
    [query.borderColor],
  );

  return (
    <div
      className="w-screen h-screen border-2"
      style={{ borderColor, boxShadow: `inset 0 0 30px ${borderColor}` }}
    />
  );
}
