import type { Meta, StoryObj } from "@storybook/react";
import AssetList from "./index";
import { useStore } from "@/store/useStore";

const mockAssets = [
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

const meta: Meta<typeof AssetList> = {
    title: "Components/AssetList",
    component: AssetList,
    decorators: [
        (Story) => {
            useStore.setState({
                assets: mockAssets,
                total: 2,
                page: 1,
                limit: 10,
                selectedCategory: "Featured",
                searchQuery: "",
                isLoadingAssets: false,
                error: null,
                fetchAssets: () => Promise.resolve(),
                setPage: () => { },
            });
            return <Story />;
        },
    ],
};

export default meta;
type Story = StoryObj<typeof AssetList>;

export const Default: Story = {
    args: {
        assets: mockAssets,
        isLoadingAssets: false,
        error: null,
    },
};

export const KPI: Story = {
    decorators: [
        (Story) => {
            useStore.setState({
                assets: mockAssets,
                total: 2,
                page: 1,
                limit: 10,
                selectedCategory: "KPI",
                searchQuery: "",
                isLoadingAssets: false,
                error: null,
                fetchAssets: () => Promise.resolve(),
                setPage: () => { },
            });
            return <Story />;
        },
    ],
};

export const Layout: Story = {
    decorators: [
        (Story) => {
            useStore.setState({
                assets: mockAssets,
                total: 2,
                page: 1,
                limit: 10,
                selectedCategory: "Layout",
                searchQuery: "",
                isLoadingAssets: false,
                error: null,
                fetchAssets: () => Promise.resolve(),
                setPage: () => { },
            });
            return <Story />;
        },
    ],
};

export const Storyboards: Story = {
    decorators: [
        (Story) => {
            useStore.setState({
                assets: mockAssets,
                total: 2,
                page: 1,
                limit: 10,
                selectedCategory: "Storyboards",
                searchQuery: "",
                isLoadingAssets: false,
                error: null,
                fetchAssets: () => Promise.resolve(),
                setPage: () => { },
            });
            return <Story />;
        },
    ],
};

export const Loading: Story = {
    decorators: [
        (Story) => {
            useStore.setState({
                assets: [],
                total: 0,
                page: 1,
                limit: 10,
                selectedCategory: "Featured",
                searchQuery: "",
                isLoadingAssets: true,
                error: null,
                fetchAssets: () => Promise.resolve(),
                setPage: () => { },
            });
            return <Story />;
        },
    ],
};

export const ErrorState: Story = {
    decorators: [
        (Story) => {
            useStore.setState({
                assets: [],
                total: 0,
                page: 1,
                limit: 10,
                selectedCategory: "Featured",
                searchQuery: "",
                isLoadingAssets: false,
                error: "Failed to load assets",
                fetchAssets: () => Promise.resolve(),
                setPage: () => { },
            });
            return <Story />;
        },
    ],
};

export const Empty: Story = {
    decorators: [
        (Story) => {
            useStore.setState({
                assets: [],
                total: 0,
                page: 1,
                limit: 10,
                selectedCategory: "Featured",
                searchQuery: "",
                isLoadingAssets: false,
                error: null,
                fetchAssets: () => Promise.resolve(),
                setPage: () => { },
            });
            return <Story />;
        },
    ],
}; 