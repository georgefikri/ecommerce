import { apiClient } from './httpClient';

export async function serverFetch<T>(url: string): Promise<T> {
  const res = await apiClient.get<T>(url);
  return res.data;
}
