import { apiClient } from './httpClient';

export async function serverFetch<T>(url: string): Promise<T> {
  const res = await apiClient.get<T>(url);
  return res.data;
}

export async function serverPost<T>(url: string, data: any): Promise<T> {
  const res = await apiClient.post<T>(url, data);
  return res.data;
}

export async function serverPut<T>(url: string, data: any): Promise<T> {
  const res = await apiClient.put<T>(url, data);
  return res.data;
}

export async function serverPatch<T>(url: string, data: any): Promise<T> {
  const res = await apiClient.patch<T>(url, data);
  return res.data;
}

export async function serverDelete<T>(url: string): Promise<T> {
  const res = await apiClient.delete<T>(url);
  return res.data;
}
