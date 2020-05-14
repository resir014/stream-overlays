import unfetch from 'isomorphic-unfetch'

/**
 * Helper for fetch which automatically returns the JSON and works both on server and client-side.
 *
 * @param input URL path or a `Request` object.
 * @param init Additional `fetch()` options
 */
export default async function fetch<TResponse = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<TResponse> {
  const res = await unfetch(input, init)
  const data: Promise<TResponse> = await res.json()

  return data
}
