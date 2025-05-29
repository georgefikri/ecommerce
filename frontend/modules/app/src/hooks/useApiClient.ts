import { useEffect, useState } from 'react';
import { apiClient } from '../api/httpClient';

export function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    apiClient
      .get<T>(url)
      .then((res) => isMounted && setData(res.data))
      .catch((err) => isMounted && setError(err))
      .finally(() => isMounted && setLoading(false));

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, error, loading };
}

export async function usePost<T>(url: string, body: any): Promise<T> {
  const res = await apiClient.post<T>(url, body);
  return res.data;
}

export async function usePut<T>(url: string, body: any): Promise<T> {
  const res = await apiClient.put<T>(url, body);
  return res.data;
}

export async function usePatch<T>(url: string, body: any): Promise<T> {
  const res = await apiClient.patch<T>(url, body);
  return res.data;
}

export async function useDelete<T>(url: string): Promise<T> {
  const res = await apiClient.delete<T>(url);
  return res.data;
}
