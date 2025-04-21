import type { Asset, Category } from '../../../types/asset';

const mockAssets: Asset[] = [
    {
        id: "1",
        title: "Sample Asset 1",
        name: "sample-asset-1",
        summary: "This is a sample asset description.",
        description: "This is a detailed description of the sample asset.",
        url: "https://example.com/asset1",
        thumbnail_url: "https://placehold.co/300x300?text=Asset",
        category: "KPI" as const,
        tags: ["sample", "test"],
        created_at: "2024-04-18T00:00:00Z",
        updated_at: "2024-04-18T00:00:00Z",
    },
    {
        id: "2",
        title: "Sample Asset 2",
        name: "sample-asset-2",
        summary: "Another sample asset description.",
        description: "This is another detailed description.",
        url: "https://example.com/asset2",
        thumbnail_url: "https://placehold.co/300x300?text=Asset",
        category: "Layout" as const,
        tags: ["sample", "test"],
        created_at: "2024-04-18T00:00:00Z",
        updated_at: "2024-04-18T00:00:00Z",
    },
];

export const fetchAssets = async (params: { page: number; limit: number; category?: Category }) => {
    return {
        data: mockAssets,
        total: mockAssets.length,
    };
};

export const fetchTrendingAssets = async () => {
    return mockAssets;
};

export const fetchAssetById = async (id: string) => {
    return mockAssets.find(asset => asset.id === id) || null;
}; 