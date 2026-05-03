# Portfolio Landing

Personal portfolio site for a mobile software engineer — built with React, TypeScript, Vite, and Tailwind CSS v4. Features dark/light theming, bilingual content (English / Spanish), and a fully responsive layout that scales from mobile to desktop.

**Live site:** [tomeydev.com](https://tomeydev.com)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Architecture & Patterns](#architecture--patterns)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Internationalization](#internationalization)
- [Theming](#theming)
- [Docker](#docker)
- [Content Customization](#content-customization)

---

## Features

- **Single-page layout** with smooth anchor navigation: Hero → About → Experience → Projects → Contact
- **Dark / Light theme** — persists in `localStorage`, respects `prefers-color-scheme` on first visit
- **Bilingual (i18n)** — English and Spanish with automatic system-language detection and manual toggle
- **Responsive navigation** — sticky header with backdrop blur on scroll, collapsible mobile menu
- **Content in locale files** — all copy (profile, experience, projects) lives in `src/locales/`, keeping UI components free of hardcoded strings
- **Accessible** — semantic HTML sections, `aria-label` on interactive controls

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5 (strict mode) |
| Build tool | Vite 7 |
| Styling | Tailwind CSS v4 (Vite plugin, CSS-first config) |
| Icons | Lucide React |
| i18n | i18next + react-i18next |
| Package manager | pnpm |
| Container | Docker (multi-stage, nginx) |

---

## Project Structure

```
src/
├── App.tsx                  # Root layout — composes all sections in order
├── App.css                  # Design tokens (CSS custom properties) + Tailwind entry
├── main.tsx                 # React entry point, ThemeProvider + i18n bootstrap
│
├── components/
│   ├── atoms/               # Smallest reusable UI units
│   │   ├── Icon.tsx
│   │   ├── LanguageToggle.tsx
│   │   ├── MenuButton.tsx
│   │   ├── OutlinedButton.tsx
│   │   ├── PrimaryButton.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── Title.tsx
│   ├── molecules/           # Composed from atoms, represent a single content item
│   │   ├── ExperienceItem.tsx
│   │   └── ProjectItem.tsx
│   └── organisms/           # Full page sections, each maps to a <section> element
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
│
├── context/
│   └── ThemeContext.tsx      # Theme state + localStorage persistence
│
├── i18n/
│   └── config.ts            # i18next initialization, language detection
│
├── locales/
│   ├── en.json              # English translations
│   └── es.json              # Spanish translations
│
└── types/
    ├── Experience.ts
    ├── NavItem.ts
    └── Project.ts
```

---

## Architecture & Patterns

### Atomic Design

Components follow a three-tier atomic hierarchy:

- **Atoms** — stateless, single-purpose elements (`PrimaryButton`, `ThemeToggle`, `Icon`). They accept props only, no data fetching.
- **Molecules** — combine atoms to render a single data record (`ExperienceItem`, `ProjectItem`).
- **Organisms** — full page sections that own layout and pull data from JSON or i18n. They are assembled in `App.tsx` with no business logic at the root level.

### Content / UI Separation

All portfolio content — profile info, work experience, projects, and nav links — lives in the locale files (`src/locales/en.json` and `src/locales/es.json`). Components access this data exclusively through the `useTranslation` hook rather than embedding strings in JSX or importing separate JSON files. This means updating content only requires editing the locale files, and every change is automatically reflected in both language versions.

### Theming with CSS Custom Properties

The design system is defined entirely with CSS custom properties in `App.css` using the `oklch` color space. Tailwind v4 reads these via `@theme inline`, so utility classes like `text-primary` or `bg-card` resolve to the current theme values automatically. Switching between light and dark just toggles the `.dark` class on `<html>`.

### i18n Architecture

Translations live in `src/locales/en.json` and `src/locales/es.json`. On first load, `i18n/config.ts` checks `localStorage` for a saved preference; if none exists it detects the browser language and defaults to English for any non-Spanish locale. The `useTranslation` hook is used at the organism level — atoms and molecules receive already-translated strings as props.

---

## Getting Started

### Prerequisites

- Node.js ≥ 20
- pnpm ≥ 9 (`npm i -g pnpm`)

### Install and run

```bash
# Clone the repository
git clone https://github.com/tomeydev/portfolio-landing.git
cd portfolio-landing

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The dev server starts at `http://localhost:5173`.

---

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start Vite dev server with HMR |
| `pnpm build` | Type-check and produce a production build in `dist/` |
| `pnpm preview` | Serve the production build locally |
| `pnpm start` | Serve the build on `0.0.0.0:3000` (used inside Docker) |
| `pnpm lint` | Run ESLint across all source files |

---

## Internationalization

The site ships with **English** and **Spanish** support.

- Toggle language at runtime using the `LanguageToggle` button in the navigation bar.
- The selected language is saved to `localStorage` and restored on next visit.
- To add a new language, create `src/locales/<lang>.json` with the same key structure as `en.json`, then register it in `src/i18n/config.ts`.

---

## Theming

| Preference | Behavior |
|---|---|
| First visit, system dark | Dark theme applied automatically |
| First visit, system light | Light theme applied automatically |
| User toggles manually | Preference saved to `localStorage` |
| Subsequent visits | Saved preference always wins |

Theme state is provided globally via `ThemeContext` and consumed by `ThemeToggle`. No third-party theme library is used.

---

## Docker

The repository includes a multi-stage `Dockerfile`:

1. **Builder stage** — installs dependencies with pnpm and runs `vite build`.
2. **Production stage** — copies the `dist/` folder into an `nginx:alpine` image.

```bash
# Build the image
docker build -t portfolio-landing .

# Run on port 8080
docker run -p 8080:80 portfolio-landing
```

The final image contains only static files served by nginx — no Node.js runtime in production.

---

## Content Customization

All site content is managed through the locale files in `src/locales/`. Each file contains both UI strings and structured content data for every section.

| File | What it controls |
|---|---|
| `src/locales/en.json` | English UI strings, profile, experience entries, projects, nav links |
| `src/locales/es.json` | Spanish UI strings, profile, experience entries, projects, nav links |

The top-level keys in each locale file map to sections:

| Key | Section |
|---|---|
| `profile` | Name, title, bio, skills, highlights |
| `experienceData.items` | Work history (role, company, period, tech stack) |
| `projectsData.items` | Featured projects (name, description, tech, links) |
| `navigation.items` | Nav bar anchor links |
| `hero`, `about`, `experience`, `projects`, `contact` | Section-level UI labels and copy |

---

## License

[MIT](LICENSE)

