import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('http://localhost:5001/api/assets', ({ request }) => {
        const url = new URL(request.url);
        const category = url.searchParams.get('category');
        return HttpResponse.json({
            data: [
                {
                    id: "1",
                    title: "Sample Asset 1",
                    name: "sample-asset-1",
                    summary: "This is a sample asset description.",
                    description: "This is a detailed description of the sample asset.",
                    url: "https://example.com/asset1",
                    thumbnail_url: "https://placehold.co/300x300?text=Asset",
                    category: category || "KPI",
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
                    category: category || "Layout",
                    tags: ["sample", "test"],
                    created_at: "2024-04-18T00:00:00Z",
                    updated_at: "2024-04-18T00:00:00Z",
                },
            ],
            total: 2,
        });
    }),
    http.get('http://localhost:5001/api/assets/trending', () => {
        return HttpResponse.json({
            data: [
                {
                    id: "3",
                    title: "Trending Asset 1",
                    name: "trending-asset-1",
                    summary: "This is a trending asset description.",
                    description: "This is a detailed description of the trending asset.",
                    url: "https://example.com/trending1",
                    thumbnail_url: "https://placehold.co/300x300?text=Asset",
                    category: "KPI",
                    tags: ["trending", "test"],
                    created_at: "2024-04-18T00:00:00Z",
                    updated_at: "2024-04-18T00:00:00Z",
                },
                {
                    id: "4",
                    title: "Trending Asset 2",
                    name: "trending-asset-2",
                    summary: "Another trending asset description.",
                    description: "This is another detailed description.",
                    url: "https://example.com/trending2",
                    thumbnail_url: "https://placehold.co/300x300?text=Asset",
                    category: "Layout",
                    tags: ["trending", "test"],
                    created_at: "2024-04-18T00:00:00Z",
                    updated_at: "2024-04-18T00:00:00Z",
                },
            ],
        });
    }),
]; 