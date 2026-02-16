# National Electron API

AI-first data center facility management software.

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your Supabase credentials

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Returns service status

### Assets
- `GET /api/assets` - List all assets
- `GET /api/assets/:id` - Get single asset
- `POST /api/assets` - Create new asset
- `PUT /api/assets/:id` - Update asset
- `DELETE /api/assets/:id` - Delete asset

## Tech Stack

- **TypeScript** - Type-safe code
- **Express** - Web framework
- **Supabase** - PostgreSQL database + realtime + auth
- **Node.js** - Runtime

## Database Schema

Assets table structure:
- id (UUID, primary key)
- asset_name (text)
- asset_type (enum: ups, generator, transformer, switchboard, etc.)
- location_id (UUID, foreign key to sites)
- meta_data (JSONB)
- summary (text)
- asset_model_id (UUID)
- created_at (timestamp)
- updated_at (timestamp)

## Deployment

Deploy to Railway, Render, Fly.io, or any Node.js hosting platform.

Set environment variables:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_KEY`
- `PORT` (optional, defaults to 3000)
