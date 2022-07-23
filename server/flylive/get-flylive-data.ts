import fetch from 'isomorphic-unfetch';
import parseFlyliveData from '~/lib/flightsim/parse-flylive-data';

export async function getFlyliveData() {
  const response = await fetch('http://localhost:8080/', {
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
  });
  const data = await response.text();

  return parseFlyliveData(data);
}
