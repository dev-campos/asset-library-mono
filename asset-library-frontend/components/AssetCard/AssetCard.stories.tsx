import type { Meta, StoryObj } from "@storybook/react";
import AssetCard from "./index";
import { useStore } from "@/store/useStore";

const mockAsset = {
    id: "1",
    title: "Sample Asset",
    name: "sample-asset",
    summary: "This is a sample asset description that might be a bit longer to test the line clamping functionality.",
    description: "This is a detailed description of the sample asset.",
    url: "https://example.com/asset",
    thumbnail_url: "https://placehold.co/300x300?text=Asset",
    category: "KPI" as const,
    tags: ["sample", "test"],
    created_at: "2024-04-18T00:00:00Z",
    updated_at: "2024-04-18T00:00:00Z",
};

const meta: Meta<typeof AssetCard> = {
    title: "Components/AssetCard",
    component: AssetCard,
    decorators: [
        (Story) => {
            useStore.setState({
                selectedAsset: null,
            });
            return (
                <div className="max-w-md">
                    <Story />
                </div>
            );
        },
    ],
    args: {
        asset: mockAsset,
    },
};

export default meta;
type Story = StoryObj<typeof AssetCard>;

export const Default: Story = {
    args: {
        asset: mockAsset,
    },
};

export const LongTitle: Story = {
    args: {
        asset: {
            ...mockAsset,
            title: "This is a very long title that should wrap properly in the card",
        },
    },
};

export const LongDescription: Story = {
    args: {
        asset: {
            ...mockAsset,
            summary: "This is a very long description that should be clamped to two lines. It contains a lot of text to demonstrate how the line clamping works in the component. The text should be truncated after two lines with an ellipsis.",
        },
    },
};

export const WithThumbnail: Story = {
    args: {
        asset: {
            ...mockAsset,
            thumbnail_url: "https://picsum.photos/150/150",
        },
    },
}; 