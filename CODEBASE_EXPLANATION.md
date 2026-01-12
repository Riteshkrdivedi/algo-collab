# AlgoCollab Codebase - Complete Explanation Guide

## 📚 Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Database Schema (Prisma)](#database-schema-prisma)
5. [Authentication (Clerk)](#authentication-clerk)
6. [File-by-File Breakdown](#file-by-file-breakdown)
7. [API Routes](#api-routes)
8. [Styling & UI](#styling--ui)
9. [Data Flow](#data-flow)
10. [Design Patterns & Best Practices](#design-patterns--best-practices)

---

## 🎯 Project Overview

**AlgoCollab** is a gamified DSA (Data Structures & Algorithms) Battle web application where developers compete in real-time algorithm battles. It's like a competitive programming platform where users:

- **Battle** against each other in real-time coding challenges
- **Track** their progress with ELO ratings and XP systems
- **Climb** the leaderboard rankings
- **Earn** achievements for milestones
- **View** detailed statistics and analytics

### Architecture Pattern
- **Framework**: Next.js 14 App Router (React Server Components)
- **Authentication**: Clerk (handles JWT tokens, user sessions)
- **Database**: Neon PostgreSQL (serverless Postgres)
- **ORM**: Prisma (type-safe database queries)
- **Styling**: Tailwind CSS 4 (utility-first CSS)

---

## 🛠 Technology Stack

### Core Technologies
```
Next.js 15.4.6      → React framework with App Router
React 19.1.0        → UI library
TypeScript 5        → Type-safe JavaScript
Tailwind CSS 4      → Utility-first CSS framework
Prisma 6.14.0       → Type-safe ORM for database
Clerk 6.31.1        → Authentication service
Neon PostgreSQL     → Serverless database
```

### Why These Technologies?

**Next.js App Router**: 
- Server-side rendering for better SEO and performance
- Built-in API routes (no separate backend server needed)
- File-based routing (easy to understand)

**Prisma**:
- Type-safe database queries (catches errors at compile-time)
- Auto-generates TypeScript types from schema
- Migration system for database changes

**Clerk**:
- Pre-built authentication UI
- Handles JWT tokens, sessions, OAuth providers
- No need to build auth from scratch

**Tailwind CSS**:
- Utility classes (faster styling)
- Consistent design system
- Small bundle size (unused CSS removed)

---

## 📁 Project Structure

```
algo-collab/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page (/)
│   │   ├── stats/             # Leaderboard page (/stats)
│   │   ├── profile/           # User profile page (/profile)
│   │   ├── api/               # API routes (REST endpoints)
│   │   │   └── leaderboard/
│   │   │       └── route.ts   # GET /api/leaderboard
│   │   ├── home-components/   # Home page components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeatureGrid.tsx
│   │   │   ├── LiveStrip.tsx
│   │   │   └── LeaderboardPreview.tsx
│   │   ├── layout.tsx         # Root layout (wraps all pages)
│   │   └── globals.css        # Global styles
│   │
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Footer.tsx         # Footer component
│   │   └── ui/                # UI primitives (Button, Card, etc.)
│   │
│   ├── lib/                   # Utility functions
│   │   └── db.ts             # Prisma client singleton
│   │
│   ├── generated/             # Auto-generated Prisma client
│   │   └── prisma/
│   │
│   └── middleware.ts          # Clerk authentication middleware
│
├── prisma/
│   ├── schema.prisma          # Database schema definition
│   └── seed.ts               # Database seeding script
│
└── public/                    # Static assets (images, etc.)
```

---

## 🗄 Database Schema (Prisma)

### What is Prisma Schema?
The `schema.prisma` file defines your database structure. Prisma reads this file and generates TypeScript types + database migrations.

### Key Models Explained

#### 1. **User Model** - Core user data
```prisma
model User {
  id          String      @id @default(uuid())  // Primary key
  clerkId     String      @unique               // Links to Clerk auth
  email       String      @unique
  username    String      @unique
  displayName String
  avatarUrl   String?                           // Optional field
  
  // Game statistics
  xp            Int @default(0)                 // Experience points
  elo           Int @default(1500)              // Rating (starts at 1500)
  gamesPlayed   Int @default(0)
  wins          Int @default(0)
  losses        Int @default(0)
  currentStreak Int @default(0)                 // Current win streak
  bestStreak    Int @default(0)                 // Best win streak ever
  
  // Relations (one user can have many...)
  participants BattleParticipant[]              // Battles they joined
  events       BattleEvent[]                    // Events they created
  userBadges   UserAchievement[]                // Achievements earned
  teamMembers  TeamMembership[]                 // Teams they're in
  wonBattles   Battle[]                         // Battles they won
}
```

**Why this structure?**
- `clerkId` is unique: links our database user to Clerk authentication
- ELO starts at 1500: standard chess rating system
- Relations: Prisma handles foreign keys automatically

#### 2. **Battle Model** - Represents a match
```prisma
model Battle {
  id     String       @id @default(uuid())
  status BattleStatus @default(WAITING)        // WAITING | ONGOING | COMPLETED
  mode   BattleMode   @default(ONE_VS_ONE)     // 1v1 or 2v2
  
  problemKey String?                            // Problem identifier
  dataset    Json?                              // Test data (stored as JSON)
  
  winnerId String?                              // Winner's user ID
  winner   User?                                // Relation to User
  
  startedAt DateTime?
  endedAt   DateTime?
  
  participants BattleParticipant[]              // All players in this battle
  events       BattleEvent[]                    // Step-by-step replay events
}
```

**Why JSON for dataset?**
- Flexible: can store any problem configuration
- Example: `{ n: 64, seed: 42, array: [...] }`

#### 3. **BattleParticipant** - Links users to battles
```prisma
model BattleParticipant {
  id       String @id @default(uuid())
  battleId String                              // Which battle
  userId   String                              // Which user
  
  team      TeamSide @default(NONE)            // Team A, B, or NONE
  algorithm String?                            // Algorithm used (e.g., "quick-sort")
  isWinner  Boolean  @default(false)
  
  // Performance metrics
  timeMs      Int?                             // Execution time
  comparisons Int?                             // Number of comparisons
  swaps       Int?                             // Number of swaps
  memoryBytes Int?                             // Memory used
  eloChange   Int?                             // ELO gained/lost
  
  @@unique([battleId, userId])                 // One user per battle
}
```

**Why separate participant model?**
- Many-to-many relationship: Users can join many battles, battles have many users
- Stores battle-specific data: ELO change, performance metrics

#### 4. **Achievement & UserAchievement** - Badge system
```prisma
model Achievement {
  id          String @id @default(uuid())
  slug        String @unique                   // "first-win", "100-wins"
  name        String                           // "First Win"
  description String
  points      Int    @default(0)               // XP reward
  
  awarded UserAchievement[]                    // Users who earned this
}

model UserAchievement {
  id            String   @id
  userId        String
  achievementId String
  earnedAt      DateTime @default(now())
  
  @@unique([userId, achievementId])            // User can only earn once
}
```

**Why two models?**
- `Achievement`: Template (defines what achievements exist)
- `UserAchievement`: Instance (tracks who earned what)

#### 5. **BattleEvent** - Replay log
```prisma
model BattleEvent {
  id       String    @id
  battleId String
  userId   String
  stepNo   Int       @default(0)               // Step number in sequence
  type     EventType                           // COMPARE, SWAP, ENQUEUE, etc.
  payload  Json?                               // Detailed event data
  
  comparisons Int?                             // Quick counters
  swaps       Int?
  
  at DateTime @default(now())                  // Timestamp
}
```

**Why store events?**
- **Replay functionality**: Can replay battles step-by-step
- **Analytics**: Understand algorithm execution
- **Debugging**: See what went wrong

---

## 🔐 Authentication (Clerk)

### How Clerk Works

1. **User signs up/in** → Clerk handles the UI
2. **Clerk issues JWT** → Token stored in cookies
3. **Middleware validates** → Every request checks token
4. **App gets user info** → `auth()` function returns user data

### Middleware (`src/middleware.ts`)

```typescript
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
```

**What does this do?**
- Runs on every request (except static files)
- Validates JWT token from Clerk
- Protects routes (can require authentication)

**Why this matcher?**
- Skips static files (CSS, images) for performance
- Always checks API routes for security

### Layout (`src/app/layout.tsx`)

```typescript
<ClerkProvider>
  <html lang="en">
    <body>
      {children}  {/* All pages go here */}
    </body>
  </html>
</ClerkProvider>
```

**Why ClerkProvider?**
- Makes Clerk context available to all components
- Components can use `<SignedIn>`, `<SignedOut>`, `auth()`

---

## 📄 File-by-File Breakdown

### 1. **Root Layout** (`src/app/layout.tsx`)

**Purpose**: Wraps all pages. Sets up fonts, metadata, and Clerk.

**Key Parts**:
```typescript
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```
- Loads Google Fonts
- Makes fonts available as CSS variables

```typescript
export const metadata: Metadata = {
  title: "AlgoCollab - Competitive Algorithm Arena",
  description: "...",
};
```
- Sets page title and meta description (for SEO)

**Why separate layout?**
- Shared across all pages (navbar, footer, fonts)
- ClerkProvider wraps entire app

---

### 2. **Home Page** (`src/app/page.tsx`)

**Purpose**: Landing page showcasing the platform.

**Structure**:
```typescript
"use client";  // Client component (uses interactivity)

export default function HomePage() {
  return (
    <div>
      <GradientBackground />   // Animated background
      <Navbar />                // Navigation
      <main>
        <HeroSection />         // Main hero banner
        <FeatureGrid />         // Feature showcase
        <LiveStrip />           // Scrolling news ticker
        <LeaderboardPreview />  // Top players preview
        <CallToAction />        // Sign up prompt
      </main>
      <Footer />                // Footer
    </div>
  );
}
```

**Why "use client"?**
- Some components need interactivity (useState, onClick)
- Client components can use browser APIs

---

### 3. **Stats Page** (`src/app/stats/page.tsx`)

**Purpose**: Full leaderboard with filters and detailed stats.

**Key Features**:
- **Olympic-style top 3**: Special cards for top players
- **Full leaderboard table**: All players with sortable columns
- **Filters**: Time period (all-time, this month, etc.)
- **Stats overview**: Total players, active today, etc.

**Data Structure**:
```typescript
const topPlayers = [
  {
    rank: 1,
    name: "Aarav",
    elo: 1870,
    wins: 342,
    losses: 89,
    winRate: 79.3,
    streak: 15,
    trend: "up",        // ELO trending up/down
    change: "+45",      // ELO change
  },
  // ...
];
```

**Why hardcoded data?**
- Currently shows mock data
- Will be replaced with API call later

**State Management**:
```typescript
const [selectedPeriod, setSelectedPeriod] = useState("all-time");
const [selectedCategory, setSelectedCategory] = useState("all");
```
- React hooks for filter state
- Will trigger API calls when filters change

---

### 4. **Profile Page** (`src/app/profile/page.tsx`)

**Purpose**: User's personal dashboard.

**Tabs**:
- **Overview**: Stats, wins/losses, rank
- **Achievements**: Badges earned
- **History**: Recent battles

**User Data** (currently mock):
```typescript
const user = {
  name: "Ritesh",
  level: 12,
  xp: 3200,
  xpForNext: 4000,
  rank: "Platinum II",
  leaderboardPos: 5,
  battlesWon: 42,
  battlesLost: 18,
};
```

**XP Progress Bar**:
```typescript
const xpProgress = (user.xp / user.xpForNext) * 100;
<Progress value={xpProgress} />
```

---

### 5. **Navbar Component** (`src/components/Navbar.tsx`)

**Purpose**: Global navigation with authentication.

**Key Features**:
- **Conditional rendering**: Shows different buttons for signed in/out
- **Mobile menu**: Hamburger menu for small screens
- **User button**: Clerk's UserButton component

**Authentication Handling**:
```typescript
<SignedOut>
  <SignInButton>...</SignInButton>
  <SignUpButton>...</SignUpButton>
</SignedOut>

<SignedIn>
  <UserButton />
</SignedIn>
```

**Why Clerk components?**
- `<SignedIn>` / `<SignedOut>` automatically check auth status
- No manual state management needed

**Navigation Items**:
```typescript
const navItems = [
  { name: "Play", href: "/match", icon: <Play /> },
  { name: "Stats", href: "/stats", icon: <BarChart3 /> },
  // ...
];
```

---

### 6. **Database Client** (`src/lib/db.ts`)

**Purpose**: Prisma client singleton (one instance shared across app).

```typescript
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;
```

**Why singleton?**
- **Development**: Prevents multiple connections during hot reload
- **Production**: Reuses single connection pool
- **Type safety**: Prisma generates types from schema

**How it works**:
1. Checks if `global.prisma` exists (development only)
2. Creates new client if not exists
3. Stores in global for reuse

---

### 7. **Leaderboard API** (`src/app/api/leaderboard/route.ts`)

**Purpose**: REST API endpoint to fetch leaderboard data.

```typescript
export async function GET() {
  const rows = await prisma.user.findMany({
    orderBy: [{ elo: "desc" }, { xp: "desc" }],  // Sort by ELO, then XP
    select: {
      id: true,
      username: true,
      displayName: true,
      avatarUrl: true,
      elo: true,
      xp: true,
      wins: true,
      losses: true,
    },
    take: 100,  // Limit to top 100
  });
  return Response.json({ rows });
}
```

**Next.js App Router API Routes**:
- File: `app/api/leaderboard/route.ts`
- Endpoint: `GET /api/leaderboard`
- Returns: JSON response

**Why `select` instead of `*`?**
- Performance: Only fetches needed fields
- Security: Doesn't expose sensitive data

**ISR (Incremental Static Regeneration)**:
```typescript
export const revalidate = 10;  // Revalidate every 10 seconds
```
- Caches response for 10 seconds
- Reduces database load
- Good for leaderboards (doesn't need real-time)

---

### 8. **Home Components**

#### **HeroSection.tsx**
- **Purpose**: Main banner with call-to-action
- **Features**: Hero text, buttons, stats preview
- **Visual**: Code editor mockup on right side

#### **FeatureGrid.tsx**
- **Purpose**: Showcase platform features
- **Layout**: Grid with different card sizes
- **Interactive**: Hover effects, gradients

#### **LiveStrip.tsx**
- **Purpose**: Scrolling news ticker
- **Animation**: Infinite scroll using CSS animations
- **Content**: Tournaments, updates, live stats

#### **LeaderboardPreview.tsx**
- **Purpose**: Preview of top players (teaser)
- **Links**: "View full leaderboard" → `/stats`

---

### 9. **UI Components** (`src/components/ui/`)

#### **Button.tsx**
```typescript
type ButtonProps = {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};
```

**Why variants?**
- Consistent styling across app
- Easy to change button style
- Reusable component

#### **Card.tsx**
- Basic card wrapper
- Used for stats, achievements, etc.

#### **Progress.tsx**
- Progress bar for XP/levels
- Uses Tailwind for styling

---

### 10. **Prisma Seed** (`prisma/seed.ts`)

**Purpose**: Populate database with sample data for development.

**What it does**:
1. Creates achievements
2. Creates sample users
3. Creates sample battle
4. Links users to achievements

**How to run**:
```bash
npm run prisma:seed
```

**Why seed data?**
- Testing: Need data to see UI working
- Development: Don't want to manually create users
- Demo: Can showcase features

---

## 🔄 API Routes

### Current APIs

#### `GET /api/leaderboard`
- **Purpose**: Fetch top 100 players
- **Returns**: `{ rows: User[] }`
- **Caching**: 10 seconds (ISR)

### Future APIs Needed

Based on your requirements, you'll need:

1. **Users API**
   - `GET /api/users/:id` - Get user profile
   - `PATCH /api/users/:id` - Update profile
   - `POST /api/users` - Create user (after Clerk signup)

2. **Leaderboard API** (enhanced)
   - `GET /api/leaderboard?period=week&category=dp` - Filtered leaderboard

3. **Battles API**
   - `POST /api/battles` - Create new battle
   - `GET /api/battles/:id` - Get battle details
   - `POST /api/battles/:id/join` - Join battle
   - `PATCH /api/battles/:id/status` - Update battle status
   - `POST /api/battles/:id/submit` - Submit solution

4. **Achievements API**
   - `GET /api/users/:id/achievements` - Get user achievements
   - `POST /api/achievements/award` - Award achievement

5. **Profile API**
   - `GET /api/profile` - Get current user profile (uses Clerk auth)
   - `PATCH /api/profile` - Update profile

---

## 🎨 Styling & UI

### Tailwind CSS Approach

**Utility Classes**:
```typescript
className="rounded-xl border border-white/10 bg-white/5 p-6"
```
- `rounded-xl`: Border radius
- `border border-white/10`: Thin white border with 10% opacity
- `bg-white/5`: White background with 5% opacity (glassmorphism)
- `p-6`: Padding

**Why this approach?**
- Fast development: No CSS files to manage
- Consistent: Design system built-in
- Small bundle: Unused classes removed

### Design System

**Colors**:
- Primary: Fuchsia to Cyan gradient (`from-fuchsia-500 to-cyan-500`)
- Background: Neutral-950 (dark theme)
- Text: White with opacity (`text-white/80`)

**Effects**:
- **Glassmorphism**: `bg-white/5 backdrop-blur-xl`
- **Hover effects**: `hover:scale-105 hover:bg-white/10`
- **Gradients**: `bg-gradient-to-r from-fuchsia-500 to-cyan-500`

**Why dark theme?**
- Gaming aesthetic
- Better for coding focus
- Reduces eye strain

---

## 🔄 Data Flow

### How Data Flows Through the App

#### 1. **User Authentication Flow**
```
User clicks "Sign In"
  ↓
Clerk handles authentication
  ↓
Clerk issues JWT token
  ↓
Token stored in cookies
  ↓
Middleware validates token on each request
  ↓
App can use `auth()` to get user info
```

#### 2. **Leaderboard Data Flow**
```
User visits /stats page
  ↓
Page renders (Server Component)
  ↓
Calls GET /api/leaderboard
  ↓
API route queries database via Prisma
  ↓
Database returns users sorted by ELO
  ↓
API returns JSON: { rows: [...] }
  ↓
Page displays data in table
```

#### 3. **User Profile Flow** (Future)
```
User visits /profile
  ↓
Page calls `auth()` to get current user
  ↓
Extract Clerk ID from auth
  ↓
Query database: User.findUnique({ where: { clerkId } })
  ↓
Display user data
```

---

## 🏗 Design Patterns & Best Practices

### 1. **Singleton Pattern** (db.ts)
- **Why**: One database connection for entire app
- **Prevents**: Connection pool exhaustion

### 2. **Component Composition**
- **Breaking down**: Large pages into smaller components
- **Reusability**: Navbar, Footer used everywhere
- **Maintainability**: Easy to find and fix bugs

### 3. **Type Safety**
- **TypeScript**: Catches errors at compile-time
- **Prisma**: Generates types from schema
- **Benefit**: Fewer runtime errors

### 4. **Separation of Concerns**
- **Components**: UI logic only
- **API Routes**: Business logic + database
- **Lib**: Utility functions

### 5. **Server vs Client Components**
- **Server Components**: Default (no "use client")
  - Can access database directly
  - Better SEO
  - No JavaScript bundle
  
- **Client Components**: Marked with "use client"
  - Can use hooks (useState, useEffect)
  - Can handle user interactions
  - Needed for forms, animations

### 6. **File-Based Routing**
- **Next.js App Router**: Folders = routes
- `app/page.tsx` → `/`
- `app/stats/page.tsx` → `/stats`
- `app/api/leaderboard/route.ts` → `/api/leaderboard`

### 7. **Environment Variables**
- **DATABASE_URL**: Stored in `.env.local`
- **NEXT_PUBLIC_CLERK_***: Clerk keys
- **Never commit**: `.env.local` in `.gitignore`

---

## 🚀 Next Steps for Backend Development

### 1. **Create User Sync**
When user signs up with Clerk, automatically create User in database:

```typescript
// app/api/users/sync/route.ts
export async function POST(request: Request) {
  const { userId } = auth();  // Clerk user ID
  // Create or update user in database
}
```

### 2. **Battle APIs**
- Create battle matching system
- Handle battle state transitions
- Calculate ELO changes

### 3. **Webhooks**
- Listen to Clerk webhooks for user events
- Auto-create users when they sign up

### 4. **Real-time Updates**
- Consider WebSockets for live battles
- Or polling for leaderboard updates

---

## 📝 Summary

This codebase is built with:
- **Modern stack**: Next.js 14, React 19, TypeScript
- **Type safety**: Prisma + TypeScript everywhere
- **Developer experience**: Hot reload, auto-complete, type checking
- **Scalability**: Serverless-ready, database connection pooling
- **Security**: Clerk handles auth, Prisma prevents SQL injection

The architecture separates concerns:
- **Frontend**: React components, Tailwind CSS
- **Backend**: API routes, Prisma queries
- **Database**: PostgreSQL with Prisma migrations
- **Auth**: Clerk (managed service)

Each file has a clear purpose, making the codebase maintainable and easy to extend.

---

## ❓ Common Questions

**Q: Why Prisma instead of raw SQL?**
- Type safety: Catches errors at compile-time
- Auto-migrations: Schema changes are versioned
- Developer experience: Autocomplete for queries

**Q: Why Clerk instead of custom auth?**
- Security: Handles OAuth, password hashing, JWT
- Speed: Don't need to build auth from scratch
- Maintenance: They handle security updates

**Q: Why Next.js App Router?**
- Modern: Latest Next.js features
- Performance: Server components by default
- Developer experience: File-based routing, API routes

**Q: Where is the actual battle/matchmaking logic?**
- Not implemented yet! This is the foundation.
- You'll need to add:
  - WebSocket server for real-time battles
  - Matching algorithm (ELO-based)
  - Code execution sandbox

---

**That's the complete breakdown!** If you have questions about any specific part, let me know!
