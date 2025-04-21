# Asset Library Frontend

A Next.js application for browsing and managing assets with a modern, responsive interface.

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Set up environment variables:

```env
NEXT_PUBLIC_API_URL=your_backend_api_url
```

3. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

### Core Features

-   Responsive grid layout (1 column on mobile, 2 columns on desktop)
-   Category-based filtering (Featured, KPI, Layout, Storyboards)
-   Backend pagination with Show Next/Previous functionality
-   Featured items section (items from the last 7 days)
-   Trending items section
-   Search functionality across titles and descriptions

### Asset Display

-   Grid view with asset cards
-   Asset details with title, description, and category
-   Thumbnail images for visual preview
-   Pagination controls

### State Management

-   Centralized store using Zustand
-   Efficient data fetching and caching
-   Responsive UI updates

### Asset Request Workflow

-   RequestButton component for initiating asset requests
-   Placeholder icons (pending icon library integration)
-   Customizable request flow (in development)

## Project Structure

```
├── app/               # Next.js app directory and pages
├── components/        # React components
│   ├── AssetList/    # Asset grid and pagination
│   ├── AssetCard/    # Individual asset display
│   ├── CategoryTabs/ # Category navigation
│   ├── SearchBar/    # Search functionality
│   └── Button/       # Reusable button component
├── store/            # Zustand store implementation
├── types/            # TypeScript type definitions
├── lib/              # Utility functions and constants
└── api/              # API client functions
```

## Technical Stack

-   Next.js 14 (App Router)
-   TypeScript
-   React
-   Zustand (State Management)
-   Tailwind CSS (Styling)

## Component Architecture

### AssetList

-   Handles asset grid display
-   Manages pagination controls
-   Responsive grid layout

### CategoryTabs

-   Category navigation
-   Active state management
-   Category filtering

### SearchBar

-   Search input handling
-   Debounced search
-   Search results display

### Button

-   Reusable button component
-   Multiple variants
-   Loading state support

## State Management

The application uses Zustand for state management with the following main features:

-   Asset data caching
-   Category selection
-   Search state
-   Pagination state
-   Loading states
-   Error handling

## Development

### Running Tests

```bash
pnpm test
```

### Building for Production

```bash
pnpm build
```

### Future Improvements

-   Add asset detail modals
-   Implement favorites functionality
-   Add copy link feature
-   Add request access workflow
-   Implement recent searches
-   Add comprehensive test coverage
-   Add error boundary components
-   Implement skeleton loading states
