function getToken() {
  const { AIRTABLE_API_KEY } = process.env;
  return AIRTABLE_API_KEY;
}

async function apiClient(endpoint, { body, ...customConfig } = {}) {
  const config = {
    ...customConfig,
    method: customConfig.method || "GET",
    headers: getHeaders(customConfig.headers),
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const res = await fetch(endpoint, config);

  if (!res.ok) {
    await handleResponseError(res);
  }

  return res.json();
}

export function getHeaders(customHeaders = {}) {
  const headers = {
    "Content-Type": "application/json",
  };

  const token = getToken();

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...headers, ...customHeaders };
}

export async function handleResponseError(res) {
  return res.text();
}

export default apiClient;
