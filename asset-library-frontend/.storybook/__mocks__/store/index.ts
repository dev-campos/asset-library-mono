import { create } from 'zustand';
import type { Asset, Category } from '../../../types/asset';

interface MockStore {
    assets: Asset[];
    trendingAssets: Asset[];
    selectedAsset: Asset | null;
    selectedCategory: Category | 'Featured';
    searchQuery: string;
    page: number;
    limit: number;
    total: number;
    isLoading: boolean;
    error: string | null;
    setSelectedAsset: (asset: Asset | null) => void;
    setSelectedCategory: (category: Category | 'Featured') => void;
    setSearchQuery: (query: string) => void;
    setPage: (page: number) => void;
    fetchAssets: () => void;
    fetchTrendingAssets: () => void;
    clearSearch: () => void;
    addRecentSearch: (query: string) => void;
}

const mockAssets = {
    data: [
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
    ],
    total: 2,
};

const mockTrendingAssets = {
    data: [
        {
            id: "3",
            title: "Trending Asset 1",
            name: "trending-asset-1",
            summary: "This is a trending asset description.",
            description: "This is a detailed description of the trending asset.",
            url: "https://example.com/trending1",
            thumbnail_url: "https://placehold.co/300x300?text=Asset",
            category: "KPI" as const,
            tags: ["trending", "test"],
            created_at: "2024-04-18T00:00:00Z",
            updated_at: "2024-04-18T00:00:00Z",
        },
        {
            id: "4",
            title: "Trending Asset 2",
            name: "trending-asset-2",
            summary: "Another trending asset description.",
            description: "This is another detailed description.",
            url: "https://example.com/trending2",
            thumbnail_url: "https://placehold.co/300x300?text=Asset",
            category: "Layout" as const,
            tags: ["trending", "test"],
            created_at: "2024-04-18T00:00:00Z",
            updated_at: "2024-04-18T00:00:00Z",
        },
    ],
};

const useMockStore = create<MockStore>((set) => ({
    assets: [],
    trendingAssets: [],
    selectedAsset: null,
    selectedCategory: "KPI",
    searchQuery: "",
    page: 1,
    limit: 10,
    total: 2,
    isLoading: false,
    error: null,
    setSelectedAsset: (asset) => set({ selectedAsset: asset }),
    setSelectedCategory: (category) => set({ selectedCategory: category }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    setPage: (page) => set({ page }),
    fetchAssets: () => {
        set({ isLoading: true });
        setTimeout(() => {
            set({ assets: mockAssets.data, total: mockAssets.total, isLoading: false });
        }, 500);
    },
    fetchTrendingAssets: () => {
        set({ isLoading: true });
        setTimeout(() => {
            set({ trendingAssets: mockTrendingAssets.data, isLoading: false });
        }, 500);
    },
    clearSearch: () => set({ searchQuery: "" }),
    addRecentSearch: () => { },
}));

export const useStore = useMockStore; 