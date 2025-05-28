import { apiClient } from './client';

// GET
export async function serverFetch<T>(url: string): Promise<T> {
  const res = await apiClient.get<T>(url);
  return res.data;
}

// POST
export async function serverPost<T>(url: string, data: any): Promise<T> {
  const res = await apiClient.post<T>(url, data);
  return res.data;
}

// PUT
export async function serverPut<T>(url: string, data: any): Promise<T> {
  const res = await apiClient.put<T>(url, data);
  return res.data;
}

// PATCH
export async function serverPatch<T>(url: string, data: any): Promise<T> {
  const res = await apiClient.patch<T>(url, data);
  return res.data;
}

// DELETE
export async function serverDelete<T>(url: string): Promise<T> {
  const res = await apiClient.delete<T>(url);
  return res.data;
}
