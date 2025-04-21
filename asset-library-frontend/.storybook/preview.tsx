import React from "react";
import type { Preview } from "@storybook/react";
import { useMockStore } from "./mockStore";
import "../app/globals.css";

// Import MSW worker to ensure it's initialized
if (typeof window !== 'undefined') {
    require('./msw');
}

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <div className="p-4">
                <Story />
            </div>
        ),
        (Story) => {
            // Initialize mock store with default state
            useMockStore.setState({
                assets: [],
                trendingAssets: [],
                selectedAsset: null,
                selectedCategory: "KPI",
                searchQuery: "",
                page: 1,
                limit: 10,
                total: 0,
                isLoading: false,
                error: null,
            });
            return <Story />;
        },
    ],
};

export default preview; 