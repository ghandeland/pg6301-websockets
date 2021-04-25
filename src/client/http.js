export async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    console.log('Hello');
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  const json = await res.json();
  return json;
}

exports.fetchJson = fetchJson;