# Asset Library

A full-stack application for managing digital assets, combining a Next.js frontend with an Express backend.

## Project Structure

```
asset-library/
├── asset-library-frontend/    # Next.js frontend application
├── asset-library-backend/     # Express backend API
├── package.json              # Root package.json with workspace configuration
└── README.md                 # This file
```

## Prerequisites

-   Node.js (v18 or higher)
-   npm or pnpm
-   Supabase account and project

## Setup

1. Clone the repository
2. Install dependencies:

    ```bash
    npm install
    # or
    pnpm install
    ```

3. Set up environment variables:

    Frontend (asset-library-frontend/.env):

    ```env
    NEXT_PUBLIC_API_URL=http://localhost:5001/api
    ```

    Backend (asset-library-backend/.env):

    ```env
    # Database
    DATABASE_URL=your_supabase_url

    # Server
    PORT=5001

    # CORS Configuration
    CORS_ORIGIN=http://localhost:3000
    CORS_METHODS=GET,POST,PUT,DELETE
    CORS_ALLOWED_HEADERS=Content-Type
    ```

## Development

To run both frontend and backend in development mode:

```bash
npm run dev
# or
pnpm dev
```

This will start:

-   Frontend on http://localhost:3000
-   Backend on http://localhost:5001

## Building for Production

To build both frontend and backend:

```bash
npm run build
# or
pnpm build
```

## Running in Production

To start both frontend and backend in production mode:

```bash
npm run start
# or
pnpm start
```

## Individual Commands

You can also run frontend or backend separately:

```bash
# Frontend only
npm run dev:frontend
npm run build:frontend
npm run start:frontend

# Backend only
npm run dev:backend
npm run build:backend
npm run start:backend
```

## Environment Variables

### Frontend

-   `NEXT_PUBLIC_API_URL`: The URL of the backend API (default: http://localhost:5001/api)

### Backend

-   `DATABASE_URL`: Your Supabase database URL
-   `PORT`: The port the backend server should run on (default: 5001)
-   `CORS_ORIGIN`: The allowed origin for CORS requests (default: http://localhost:3000)
-   `CORS_METHODS`: Comma-separated list of allowed HTTP methods
-   `CORS_ALLOWED_HEADERS`: Comma-separated list of allowed headers
