# Asset Library Backend

A Node.js Express backend service for managing and serving assets, integrated with Supabase for data persistence.

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Set up environment variables:

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

3. Run the development server:

```bash
pnpm dev
```

The server will start on [http://localhost:5001](http://localhost:5001).

## API Endpoints

### Assets

#### GET /assets

Fetches a paginated list of assets with optional filtering.

Query Parameters:

-   `category` (optional): Filter by asset category (KPI, Layout, Storyboards)
-   `search` (optional): Search in title, description, and summary
-   `featured` (optional): Filter featured assets from the last 7 days
-   `tags` (optional): Filter by tag IDs
-   `page` (default: 1): Page number
-   `limit` (default: 4): Items per page

Response:

```json
{
  "data": Asset[],
  "page": number,
  "limit": number,
  "total": number
}
```

#### GET /assets/trending

Fetches trending assets (currently based on updated_at, will be updated to use views).

Response:

```json
Asset[]
```

#### POST /assets

Creates a new asset.

## Project Structure

```
├── src/
│   ├── routes/        # API route handlers
│   ├── db/           # Database configuration and queries
│   ├── types/        # TypeScript type definitions
│   └── index.ts      # Application entry point
├── supabase/
│   ├── migrations/   # Database migrations
│   └── seed.sql      # Seed data
```

## Technical Stack

-   Node.js
-   Express
-   TypeScript
-   Supabase (PostgreSQL)
-   pg (PostgreSQL client)

## Database Schema

### Assets Table

-   id (UUID)
-   title (string)
-   description (text)
-   summary (text)
-   category (enum)
-   url (string)
-   thumbnail_url (string)
-   featured (boolean)
-   trending (boolean)
-   created_at (timestamp)
-   updated_at (timestamp)

### Tags Table

-   id (serial)
-   name (string)
-   created_at (timestamp)

### Asset_Tags Table

-   asset_id (UUID)
-   tag_id (integer)
-   created_at (timestamp)

## Development

### Database Management

-   Run migrations: `supabase db reset`
-   Seed database: `supabase db seed`

### Future Improvements

-   Implement views tracking for trending assets
-   Add user authentication and authorization
-   Implement rate limiting
-   Add caching layer
-   Add comprehensive test suite
