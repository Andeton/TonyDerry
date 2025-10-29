# Tony Derry Portfolio

## Overview

This is a personal portfolio website for Tony Derry, an AI creator specializing in custom GPTs, AI-driven visuals, and automation workflows. The site showcases projects involving n8n automation pipelines, ComfyUI visual creations, and custom GPT development. Built as a modern single-page application with a professional design aesthetic inspired by Linear, Stripe, and Vercel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- Single-page application (SPA) architecture with component-based UI

**UI Component System**
- **shadcn/ui** component library based on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom design tokens
- Custom design system following "New York" style variant with neutral base colors
- CSS variables for theming support (light/dark modes configured)
- Typography system using Inter font family from Google Fonts
- Responsive design with mobile-first approach

**State Management**
- **TanStack Query (React Query)** for server state management, data fetching, and caching
- Local component state with React hooks
- No global state management library (Redux, Zustand, etc.) - keeping it simple

**Design System Principles**
- Mathematical spacing using Tailwind's 4px grid (4, 8, 12, 16, 20, 24, 32 units)
- Hover/active elevation states with `hover-elevate` and `active-elevate-2` utility classes
- Custom border and shadow system for depth and hierarchy
- Accessible color contrast ratios and focus states

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- ESM module system (type: "module" in package.json)
- HTTP server created using Node's built-in `http` module

**Application Structure**
- Minimal API surface - routes defined in `server/routes.ts` with `/api` prefix convention
- Vite middleware integration for development with HMR support
- Request logging middleware capturing method, path, status, duration, and response preview
- Raw body capture for webhooks or signature verification needs

**Data Layer**
- **In-memory storage** as default implementation (`MemStorage` class)
- Storage abstraction interface (`IStorage`) allowing easy swap to database
- Schema defined using Drizzle ORM with PostgreSQL dialect
- Database configuration ready but not actively connected (Neon Database driver installed)

**Development vs Production**
- Development: Vite dev server integrated as Express middleware
- Production: Static file serving from `dist/public` directory
- Build process bundles server code with esbuild and client code with Vite

### Data Storage Solutions

**Current Implementation**
- **MemStorage**: Ephemeral in-memory storage using JavaScript Maps
- User management with UUID-based IDs
- Data resets on server restart

**Database Ready Architecture**
- **Drizzle ORM** configured for PostgreSQL
- **Neon Database** serverless driver (`@neondatabase/serverless`) installed
- Schema defined in `shared/schema.ts` with users table
- Zod integration for runtime validation via `drizzle-zod`
- Migrations directory structure prepared (`./migrations`)
- Database connection string expected via `DATABASE_URL` environment variable

**Schema Design**
- Users table with UUID primary keys (using PostgreSQL's `gen_random_uuid()`)
- Username/password authentication fields
- Extensible schema ready for additional tables

### Authentication and Authorization

**Current State**
- Basic user schema prepared (username/password fields)
- No active authentication middleware implemented
- Session management dependencies installed (`connect-pg-simple` for PostgreSQL-backed sessions)
- Ready for implementation but not enforced

**Prepared Infrastructure**
- Express session support ready
- Password hashing capabilities available
- Cookie-based session management prepared

### External Dependencies

**AI/Automation Tools Referenced** (Content Focus)
- **n8n**: Workflow automation platform (content topic, not integrated)
- **ComfyUI**: AI image generation workflows (content topic, not integrated)
- **Custom GPTs**: OpenAI GPT customizations (content topic, not integrated)

**Frontend Libraries**
- **Radix UI**: Comprehensive suite of accessible UI primitives (@radix-ui/* packages)
- **TanStack Query v5**: Server state management and data synchronization
- **Lucide React**: Icon library for UI elements
- **React Icons**: Additional icon set (simple-icons for Ko-fi, LinkedIn, Facebook)
- **class-variance-authority**: Type-safe component variant styling
- **cmdk**: Command palette component
- **embla-carousel-react**: Touch-friendly carousel component
- **date-fns**: Date manipulation and formatting
- **react-hook-form**: Form state management
- **zod**: Schema validation (@hookform/resolvers for integration)

**Development Tools**
- **TypeScript**: Type safety across client and server
- **Vite Plugins**: Replit-specific tooling (runtime errors, cartographer, dev banner)
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **Drizzle Kit**: Database migration and schema management CLI

**Build & Runtime**
- **Node.js**: Server runtime environment
- **esbuild**: Server code bundling for production
- **tsx**: TypeScript execution for development

**Asset Management**
- Static assets stored in `attached_assets` directory
- Hero background image: AI neural network visualization
- Favicon configured

**External Services** (Ready for Integration)
- Ko-fi donation platform (link present, no API integration)
- LinkedIn profile (placeholder link)
- Facebook profile (placeholder link)