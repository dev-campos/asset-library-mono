import React from 'react';
import { useMockStore } from './mockStore';

export const withMockStore = (Story: React.ComponentType) => {
    // Replace the real store with our mock store
    // This is a bit of a hack, but it works for Storybook
    // @ts-ignore
    window.useStore = useMockStore;

    return <Story />;
}; 