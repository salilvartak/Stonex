# IndusMin - Industrial Minerals Corporate Website

## Overview

This is a modern, professional corporate website for IndusMin, an industrial minerals manufacturing company based in India. The website showcases their product catalog (Calcite, Dolomite, Quartz, Talc powders), company information, and provides a contact inquiry system. The design emphasizes an industrial, premium aesthetic with animation-heavy interactions using a charcoal/slate gray palette accented by safety yellow (#FFE600).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom industrial theme (square edges, Manrope/Oswald fonts)
- **UI Components**: shadcn/ui component library (New York style)
- **Animations**: Framer Motion for scroll animations and page transitions
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **API Pattern**: RESTful endpoints under `/api/` prefix
- **Build System**: Vite for frontend, esbuild for server bundling
- **Development**: Hot module replacement via Vite dev server

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts` - defines products and inquiries tables
- **Migrations**: Drizzle Kit with `db:push` command
- **Storage Pattern**: Repository pattern in `server/storage.ts`

### API Structure
Two main endpoints defined in `shared/routes.ts`:
- `GET /api/products` - List all mineral products
- `GET /api/products/:slug` - Get single product by URL slug
- `POST /api/inquiries` - Submit contact form inquiry

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    pages/        # Route page components (Home, Products, About, Contact)
    hooks/        # Custom React hooks for data fetching
    lib/          # Utilities and query client setup
server/           # Express backend
  routes.ts       # API route handlers with seed data
  storage.ts      # Database access layer
  db.ts           # Drizzle/PostgreSQL connection
shared/           # Shared between client and server
  schema.ts       # Drizzle table definitions and Zod schemas
  routes.ts       # API contract definitions
```

### Key Design Decisions
- **Monorepo Structure**: Client and server share TypeScript types via `shared/` directory
- **Type-Safe API**: Zod schemas defined once, used for both validation and type inference
- **Industrial Theme**: CSS custom properties for consistent color system, square border-radius (0px) for industrial feel
- **Product Data**: Complex product specifications stored as JSONB for flexibility
- **Server-Side Seeding**: Products auto-seed on first run if database is empty

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: Session storage (available but not currently implemented)

### Frontend Libraries
- **@tanstack/react-query**: Async state management and caching
- **framer-motion**: Animation library for scroll reveals and transitions
- **lucide-react**: Icon library for industrial iconography
- **react-day-picker**: Calendar component (available via shadcn)
- **embla-carousel-react**: Carousel functionality

### Build & Development
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Replit integration