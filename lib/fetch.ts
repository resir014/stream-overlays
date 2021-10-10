import unfetch from 'isomorphic-unfetch';

export interface ErrorBuilder<T = unknown> extends Error {
  info?: T;
  status?: number;
}

export type APIResponse<T = {}> =
  | {
      status: 'ok';
      data: T;
    }
  | { status: 'error'; data: { message: string } };

/**
 * Helper for fetch which automatically returns the JSON and works both on server and client-side.
 *
 * @param input URL path or a `Request` object.
 * @param init Additional `fetch()` options
 */
export async function fetch<TResponse = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<TResponse> {
  const res = await unfetch(input, init);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error: ErrorBuilder = new Error('An error occurred while fetching the data.');
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const data: TResponse = await res.json();
  return data;
}
