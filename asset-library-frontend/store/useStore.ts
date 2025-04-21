import { create } from "zustand";
import type { Asset, Category } from "@/types/asset";
import { getAssets, getTrendingAssets } from "@/api/assets";
import { DEFAULT_PAGE, DEFAULT_LIMIT } from "@/lib/constants";
import { useEffect } from "react";

type FilterType = "Featured";
type CategoryFilter = Category | FilterType;

interface StoreState {
  assets: Asset[];
  trendingAssets: Asset[];
  selectedCategory: CategoryFilter;
  searchQuery: string;
  page: number;
  limit: number;
  total: number;
  recentSearches: string[];
  selectedAsset: Asset | null;
  isLoadingAssets: boolean;
  isLoadingTrending: boolean;
  error: string | null;
  fetchAssets: () => Promise<void>;
  fetchTrendingAssets: () => Promise<void>;
  addRecentSearch: (query: string) => void;
  clearRecentSearches: () => void;
  setSelectedCategory: (category: CategoryFilter) => void;
  setSearchQuery: (query: string) => void;
  setPage: (page: number) => void;
  reset: () => void;
  clearSearch: () => void;
  setSelectedAsset: (asset: Asset | null) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  assets: [],
  trendingAssets: [],
  selectedCategory: "Featured",
  searchQuery: "",
  page: DEFAULT_PAGE,
  limit: DEFAULT_LIMIT,
  total: 0,
  recentSearches: [],
  selectedAsset: null,
  isLoadingAssets: false,
  isLoadingTrending: false,
  error: null,

  fetchAssets: async () => {
    set({ isLoadingAssets: true, error: null });
    try {
      const { selectedCategory, searchQuery, page, limit } = get();
      const params: any = {
        page,
        limit,
      };

      if (selectedCategory === "Featured") {
        params.featured = true;
      } else {
        params.category = selectedCategory;
      }

      if (searchQuery) {
        params.search = searchQuery;
      }

      const response = await getAssets(params);

      set({
        assets: response.data,
        total: response.total,
        isLoadingAssets: false,
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch assets";
      console.error("Error fetching assets:", err);
      alert(errorMessage);
      set({
        error: errorMessage,
        isLoadingAssets: false,
      });
    }
  },

  fetchTrendingAssets: async () => {
    set({ isLoadingTrending: true, error: null });
    try {
      const trendingAssets = await getTrendingAssets();
      set({
        trendingAssets,
        isLoadingTrending: false,
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch trending assets";
      alert(errorMessage);
      set({
        error: errorMessage,
        isLoadingTrending: false,
      });
    }
  },

  setSelectedCategory: (category) => {
    set({
      selectedCategory: category,
      page: DEFAULT_PAGE,
    });
    get().fetchAssets();
  },

  setSearchQuery: (query) => {
    set({
      searchQuery: query,
      page: DEFAULT_PAGE,
    });
    get().fetchAssets();
  },

  setPage: (page) => {
    set({ page });
    get().fetchAssets();
  },

  reset: () => {
    set({
      page: DEFAULT_PAGE,
    });
    get().fetchAssets();
  },

  addRecentSearch: (query) => {
    set((state) => ({
      recentSearches: [...state.recentSearches, query],
    }));
  },

  clearRecentSearches: () => {
    set({
      recentSearches: [],
    });
  },

  clearSearch: () => {
    set({
      searchQuery: "",
      page: DEFAULT_PAGE,
    });
    get().fetchAssets();
  },

  setSelectedAsset: (asset) => {
    set({ selectedAsset: asset });
  },
}));

export const useInitialFetch = () => {
  useEffect(() => {
    // TODO: Confirm if assets should be auto-refreshed after initial load.
    const store = useStore.getState();
    store.fetchAssets();
    store.fetchTrendingAssets();
  }, []);
};
