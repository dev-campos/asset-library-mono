import type { Asset } from '@/types/asset';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined');
}

export async function getAssets(params?: {
  category?: string;
  search?: string;
  featured?: boolean;
  trending?: boolean;
  tags?: string[];
  page?: number;
  limit?: number;
}) {
  const queryParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, String(value));
      }
    });
  }

  const response = await fetch(`${API_URL}/assets?${queryParams.toString()}`);
  if (!response.ok) {
    throw new Error('Failed to fetch assets');
  }
  const data = await response.json();
  return data;
}

export async function getTrendingAssets() {
  const response = await fetch(`${API_URL}/assets/trending`);
  if (!response.ok) {
    throw new Error('Failed to fetch trending assets');
  }
  return response.json();
}

export async function getAsset(id: string) {
  const response = await fetch(`${API_URL}/assets/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch asset');
  }
  return response.json();
}

export async function createAsset(asset: Omit<Asset, 'id' | 'createdAt' | 'updatedAt'>) {
  const response = await fetch(`${API_URL}/assets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(asset),
  });
  if (!response.ok) {
    throw new Error('Failed to create asset');
  }
  return response.json();
}

export async function updateAsset(id: string, asset: Partial<Asset>) {
  const response = await fetch(`${API_URL}/assets/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(asset),
  });
  if (!response.ok) {
    throw new Error('Failed to update asset');
  }
  return response.json();
}

export async function deleteAsset(id: string) {
  const response = await fetch(`${API_URL}/assets/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete asset');
  }
  return response.json();
} 