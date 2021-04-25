export async function fetchJson(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  console.log("fetchJson res", res);
  const json = await res.json();
  return json;
}

exports.fetchJson = fetchJson;