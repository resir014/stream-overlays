import {
  NextApiRequest as BaseNextApiRequest,
  NextApiResponse,
  NextComponentType as BaseNextComponentType,
  NextPage as BaseNextPage,
  NextPageContext as BaseNextPageContext,
} from 'next';
import { AppProps as BaseAppProps } from 'next/app';
import { LayoutType } from '~/layouts';

export type NextPageProps = {
  layout?: LayoutType;
};

export type NextComponentType = NextPageProps &
  BaseNextComponentType<BaseNextPageContext, unknown, {}>;

export type NextPage<P = {}, IP = P> = NextPageProps & BaseNextPage<P, IP>;

export type NextAppProps = BaseAppProps & {
  Component: NextComponentType;
  pageProps: Record<string, unknown>;
};

export type NextApiRequest<T extends Record<string, unknown> = { [k: string]: unknown }> =
  BaseNextApiRequest & T;

export type NextApiHandler<
  T extends Record<string, unknown> = { [k: string]: unknown },
  S extends Record<string, unknown> = { [k: string]: unknown },
> = (req: NextApiRequest<T>, res: NextApiResponse<S>) => Promise<void> | void;

export type Middleware<
  T extends Record<string, unknown> = { [k: string]: unknown },
  S extends Record<string, unknown> = { [k: string]: unknown },
> = (
  req: NextApiRequest<T>,
  res: NextApiResponse<S>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  next: (data?: any) => Promise<void> | void,
) => Promise<void> | void;
