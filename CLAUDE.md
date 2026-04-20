# next-portofolio — Claude Dev Guide

## What this project is

Personal portfolio of José DACOSTA — full stack developer, builder, AI-native.
Live at [jose-pascal.vercel.app](http://jose-pascal.vercel.app).

This is a sales tool, not a vanity page. Two audiences:
1. **Freelance clients** (finding someone on Malt or Google to build something)
2. **Employers** (evaluating a senior full stack / AI engineer)

## Vision & Tone

**Serious. Impactful. Bilingual (FR + EN).**

- Not playful, not generic "IT Engineer" energy
- Shows real work, real depth, real shipped products
- Feels like a senior engineer who builds real things and thinks about products
- Every section earns its place — nothing decorative without purpose
- French and English fully supported (not just translated — each language feels native)

## Stack

- Next.js (App Router), TypeScript, Tailwind CSS
- framer-motion (animations — use sparingly, only where it adds impact)
- contentlayer (blog/articles via MDX)
- Radix UI components
- Vercel deployment

## Design Direction

**Color palette:** keep `yaleblue` (#063672) as primary + `darkgoldenrod` as accent. Strong, credible.

**Layout principles:**
- Maximum contrast between sections — don't let everything look the same weight
- Hero must make an immediate impression — name, what you do, why it matters, in under 5 seconds
- Projects section is the core — it must feel like a showcase, not a list
- Dark mode must look as good as light mode
- Mobile first — a recruiter or client will check on phone

**What to remove:**
- Rotating blobs in the background (looks dated)
- Pulsing SVG icons on every title (visual noise)
- Fake testimonials (Sarah Johnson, Michael Chen, Emily Rodriguez — delete entirely)
- "Download CV" button in hero (add back only when CV is current)
- Blog section on homepage (no articles yet = shows empty state = bad signal)

**What to add:**
- "Currently building" or "Side projects" section — shows entrepreneurial mindset
- Malt profile link (freelance availability signal)
- Availability badge ("Available for freelance missions" or "Open to new opportunities")
- FR/EN language switcher in the nav

## Real Projects to Showcase

Replace ALL fake placeholder projects with these. In this order:

### 1. PAI — Plateforme Académique Intelligente
- **What:** Multi-tenant LMS with AI-generated flashcards, quizzes, summaries and Q&A
- **Stack:** FastAPI, Next.js, Keycloak, PostgreSQL, MinIO, Anthropic API, Docker, GitHub Actions
- **Highlights:** Role-based multi-tenancy (school isolation), full CI/CD pipeline, Phase 4c complete
- **Status:** Pre-production, built with 2 associates
- **Link:** private repo (show screenshots)

### 2. Talespark — AI Children's Stories
- **What:** Generate personalized illustrated stories. Guest mode, Stripe subscription, multilingual (FR/EN)
- **Stack:** Next.js, FastAPI, PostgreSQL, Auth0, Stripe, AI image generation
- **Highlights:** Live product, Stripe integrated, series model, public story sharing
- **Link:** talesspark.dokidokidev.com

### 3. Cabinet Ténin BAMBA — Lawyer Portfolio
- **What:** Professional portfolio site for a Paris Bar lawyer. Client work, delivered.
- **Stack:** Next.js 14, Tailwind CSS, GDPR-compliant contact form
- **Highlights:** Real client, shipped, SEO-optimized by specialization domain
- **Status:** Delivered

### 4. Notion Intelligence Layer
- **What:** Python CLI that turns a Notion workspace into a queryable agent (RAG + MCP + Claude)
- **Stack:** Python, ChromaDB, Notion MCP, Anthropic SDK
- **Highlights:** Autonomous multi-step workflow from a single prompt, semantic search across all pages

### 5. Invitee — Event Management App
- **What:** Mobile app for creating events and managing RSVPs. No account required for guests.
- **Stack:** Expo (React Native), Firebase, TypeScript
- **Highlights:** iOS + Android, store-ready (EAS configured, store descriptions written)


## Fake Content to Remove Immediately

- All 8 projects in `src/app/projects/page.tsx` (E-commerce Platform, Task Management App, Weather Dashboard, Social Media Analytics, LMS, Real Estate Platform, Fitness App, Crypto Dashboard) — all have `github.com/example/` fake links
- All 3 featured projects on homepage (Jaay, "This portfolio", Travel Agency) — too basic
- All testimonials (Sarah Johnson, Michael Chen, Emily Rodriguez, and others) — fake, remove entirely
- Blog section on homepage until at least 2 articles are written

## Skills to Highlight (updated for 2026)

Current (`simple-skills.tsx`) likely shows generic web skills. Update to reflect reality:

**Frontend:** Next.js, React, Expo, TypeScript, Tailwind CSS
**Backend:** FastAPI (Python), Node.js, Elixir/Phoenix
**AI / Agents:** Anthropic SDK, RAG, MCP, Claude Code
**Auth & Identity:** Keycloak, Auth0, Auth.js
**Data:** PostgreSQL, Prisma, Alembic, DuckDB
**Infra:** Docker, GitHub Actions CI/CD, Traefik, VPS, MinIO

## Content — Bilingual Rules

- All static strings must have FR + EN versions
- Use `next-intl` (already partially set up via some projects — check if installed, add if not)
- Default language: FR (primary market)
- Language switcher: in nav, top right
- URLs: `/` and `/en/` or via `Accept-Language` header

## Hero Copy (draft)

**EN:**
> Full Stack Developer & Builder
> I build web and mobile products — from API to deployment.
> Specialized in AI-native applications and complex backend systems.

**FR:**
> Développeur Full Stack & Maker
> Je conçois et déploie des produits web et mobile — de l'API à la mise en production.
> Spécialisé dans les applications IA et les architectures backend complexes.

## Services to Keep (updated)

1. Full Stack Web Development
2. Mobile Development (Expo / React Native)
3. AI Integration & Agent Development (NEW — most valuable in 2026)
4. DevOps & CI/CD
5. Technical Consulting (Keycloak, Python, React — proven demand on Malt)

Remove: "SEO Optimization & Digital Marketing" (not your core skill)

## Wiki Knowledge Base
Path: C:\Users\nekke\side-projects\claude-obsidian

When you need project context between sessions:
1. Read `wiki/hot.md` first
2. Read `wiki/me.md` for José's full profile and positioning
3. Read `wiki/projects/next-portofolio.md` for this project's history

After significant work sessions, update `wiki/projects/next-portofolio.md`.
