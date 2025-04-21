import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
    stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    staticDirs: ["../public"],
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@/store': path.resolve(__dirname, './__mocks__/store'),
                '@/api': path.resolve(__dirname, './__mocks__/api'),
            };
        }
        return config;
    },
    previewHead: (head) => `
        ${head}
        <script>
            if (window.location.hostname === 'localhost') {
                window.__MSW_DEVTOOLS__ = true;
            }
        </script>
    `,
    core: {
        disableTelemetry: true,
    },
    features: {
        storyStoreV7: true,
    },
};

export default config; 