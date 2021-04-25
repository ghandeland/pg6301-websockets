import { useState, useEffect } from 'react';

const useLoading = (loadingFunction) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  async function reload() {
    setLoading(true);
    setData(undefined);
    setError(undefined);
    try {
      setData(await loadingFunction());
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(reload, []);

  return { error, loading, data, reload };
}

exports.useLoading = useLoading;