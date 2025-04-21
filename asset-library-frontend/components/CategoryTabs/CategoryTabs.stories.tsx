import type { Meta, StoryObj } from "@storybook/react";
import CategoryTabs from "./index";
import { useStore } from "@/store/useStore";

const meta: Meta<typeof CategoryTabs> = {
    title: "Components/CategoryTabs",
    component: CategoryTabs,
    decorators: [
        (Story) => {
            useStore.setState({
                selectedCategory: "Featured",
            });
            return <Story />;
        },
    ],
};

export default meta;
type Story = StoryObj<typeof CategoryTabs>;

export const Default: Story = {};

export const KPISelected: Story = {
    decorators: [
        (Story) => {
            useStore.setState({
                selectedCategory: "KPI",
            });
            return <Story />;
        },
    ],
};

export const LayoutSelected: Story = {
    decorators: [
        (Story) => {
            useStore.setState({
                selectedCategory: "Layout",
            });
            return <Story />;
        },
    ],
};

export const StoryboardsSelected: Story = {
    decorators: [
        (Story) => {
            useStore.setState({
                selectedCategory: "Storyboards",
            });
            return <Story />;
        },
    ],
}; 