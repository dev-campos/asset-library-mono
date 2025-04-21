import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./index";
import { useStore } from "@/store/useStore";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  decorators: [
    (Story) => {
      useStore.setState({
        searchQuery: "",
      });
      return <Story />;
    },
  ],
};

export const WithSearchQuery: Story = {
  decorators: [
    (Story) => {
      useStore.setState({
        searchQuery: "sample search",
      });
      return <Story />;
    },
  ],
};

export const WithLongSearchQuery: Story = {
  decorators: [
    (Story) => {
      useStore.setState({
        searchQuery: "This is a very long search query that should demonstrate how the search bar handles long text",
      });
      return <Story />;
    },
  ],
};
