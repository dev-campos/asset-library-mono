import type { Meta, StoryObj } from "@storybook/react";
import TrendingList from "./index";
import { useStore } from "@/store/useStore";

const mockTrendingAssets = [
    {
        id: "1",
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
        id: "2",
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
];

const meta: Meta<typeof TrendingList> = {
    title: "Components/TrendingList",
    component: TrendingList,
    decorators: [
        (Story) => {
            useStore.setState({
                trendingAssets: mockTrendingAssets,
                isLoadingTrending: false,
                error: null,
                fetchTrendingAssets: () => Promise.resolve(),
            });
            return <Story />;
        },
    ],
};

export default meta;
type Story = StoryObj<typeof TrendingList>;

export const Default: Story = {
    decorators: [
        (Story) => {
            useStore.setState({
                trendingAssets: mockTrendingAssets,
                isLoadingTrending: false,
                error: null,
                fetchTrendingAssets: () => Promise.resolve(),
            });
            return <Story />;
        },
    ],
};

export const Loading: Story = {
    decorators: [
        (Story) => {
            useStore.setState({
                trendingAssets: [],
                isLoadingTrending: true,
                error: null,
                fetchTrendingAssets: () => Promise.resolve(),
            });
            return <Story />;
        },
    ],
};

export const ErrorState: Story = {
    decorators: [
        (Story) => {
            useStore.setState({
                trendingAssets: [],
                isLoadingTrending: false,
                error: "Failed to load trending assets",
                fetchTrendingAssets: () => Promise.resolve(),
            });
            return <Story />;
        },
    ],
};

export const Empty: Story = {
    decorators: [
        (Story) => {
            useStore.setState({
                trendingAssets: [],
                isLoadingTrending: false,
                error: null,
                fetchTrendingAssets: () => Promise.resolve(),
            });
            return <Story />;
        },
    ],
}; 