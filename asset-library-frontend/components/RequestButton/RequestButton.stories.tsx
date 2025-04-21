import type { Meta, StoryObj } from "@storybook/react";
import RequestButton from "./index";

const meta: Meta<typeof RequestButton> = {
    title: "Components/RequestButton",
    component: RequestButton,
};

export default meta;
type Story = StoryObj<typeof RequestButton>;

export const Default: Story = {}; 