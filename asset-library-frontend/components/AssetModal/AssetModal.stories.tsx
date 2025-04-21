import type { Meta, StoryObj } from "@storybook/react";
import AssetModal from "./index";
import { useStore } from "@/store/useStore";
import { Asset } from "@/types/asset";

const mockAsset = {
    id: "1",
    title: "Sample Asset",
    name: "sample-asset",
    summary: "This is a sample asset description.",
    description: "This is a detailed description of the sample asset.",
    url: "https://example.com/asset",
    thumbnail_url: "https://placehold.co/300x300?text=Asset",
    category: "KPI" as const,
    tags: ["sample", "test", "demo"],
    created_at: "2024-04-18T00:00:00Z",
    updated_at: "2024-04-18T00:00:00Z",
};

const layoutAsset: Asset = {
    id: 'layout-1',
    title: 'Complete Layout Template',
    name: 'Complete Layout Template',
    summary: 'A comprehensive layout template with all properties',
    description: 'This is a complete layout template that demonstrates all possible properties and features.',
    url: 'https://example.com/layouts/complete',
    thumbnail_url: 'https://placehold.co/300x300?text=Complete+Layout',
    category: 'Layout',
    tags: ['Layout', 'Template', 'Complete'],
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z',
    layout_data: {
        used: 42,
        type: 'Universal',
        pages: 12,
        questions: [
            {
                id: 'q1',
                text: 'What is the primary goal of this layout?',
                description: 'Understanding the main objective helps in proper implementation'
            },
            {
                id: 'q2',
                text: 'How many sections are required?',
                description: 'Determines the overall structure and complexity'
            },
            {
                id: 'q3',
                text: 'What type of content will be displayed?',
                description: 'Helps in choosing appropriate components and spacing'
            },
            {
                id: 'q4',
                text: 'Are there any specific accessibility requirements?',
                description: 'Ensures the layout meets accessibility standards'
            }
        ]
    }
};

const meta: Meta<typeof AssetModal> = {
    title: "Components/AssetModal",
    component: AssetModal,
};

export default meta;
type Story = StoryObj<typeof AssetModal>;

export const Default = {
    decorators: [
        (Story: React.ComponentType) => {
            useStore.setState({ selectedAsset: mockAsset });
            return <Story />;
        },
    ],
};

export const LayoutAsset = {
    decorators: [
        (Story: React.ComponentType) => {
            useStore.setState({ selectedAsset: layoutAsset });
            return <Story />;
        },
    ],
};

export const StoryboardAsset: Story = {
    decorators: [
        (Story) => {
            useStore.setState({
                selectedAsset: {
                    ...mockAsset,
                    category: "Storyboards" as const,
                },
            });
            return <Story />;
        },
    ],
};

export const DataVizAsset: Story = {
    decorators: [
        (Story) => {
            useStore.setState({
                selectedAsset: {
                    ...mockAsset,
                    category: "KPI" as const,
                },
            });
            return <Story />;
        },
    ],
    args: {
        isDataViz: true,
    },
};