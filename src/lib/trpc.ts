import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '~/server/routers/_app';

const isNetlifyProdDeploy = import.meta.env.CONTEXT === 'production';
const isNetlifyPreviewOrBranchDeploy =
  import.meta.env.CONTEXT === 'deploy-preview' || import.meta.env.CONTEXT === 'branch-deploy';

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    // browser should use relative path
    return '';
  }

  if (import.meta.env.URL && isNetlifyProdDeploy) {
    // reference for Netlify (production)
    return import.meta.env.DEPLOY_PRIME_URL;
  }

  if (import.meta.env.DEPLOY_PRIME_URL && isNetlifyPreviewOrBranchDeploy) {
    // reference for Netlify (deploy preview)
    return import.meta.env.DEPLOY_PRIME_URL;
  }

  if (import.meta.env.VERCEL_URL) {
    // reference for vercel.com
    return `https://${import.meta.env.VERCEL_URL}`;
  }

  if (import.meta.env.RENDER_INTERNAL_HOSTNAME) {
    // reference for render.com
    return `http://${import.meta.env.RENDER_INTERNAL_HOSTNAME}:${import.meta.env.PORT}`;
  }

  // assume localhost
  return `http://localhost:${import.meta.env.PORT ?? 3000}`;
}

export const httpBatchLinkUrl = `${getBaseUrl()}/api/trpc`;

export const trpcReact = createTRPCReact<AppRouter>();

export const trpcAstro = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: httpBatchLinkUrl,
    }),
  ],
});
