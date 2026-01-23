# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Flight booking search UI prototype themed for Korean Air. Client-side only with mock data (no backend).

## Tech Stack

- React 19.2.0 with Vite 7.2.4
- ESLint 9 (flat config format)
- Vanilla CSS with CSS variables
- No testing framework currently

## Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build to dist/
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

**State Management**: Centralized in `App.jsx` using React hooks. No external state library.

**Component Structure**:
- `App.jsx` - Main component with all business logic and state
- `SearchInput.jsx` - Controlled form for flight search
- `FlightList.jsx` - Maps search results to FlightCard components
- `FlightCard.jsx` - Individual ticket display with perforated design
- `FlightDetailModal.jsx` - Expanded flight info modal

**Internationalization**: Object-based translations in `src/constants/translations.js` with Korean (ko) and English (en) support. Language passed as `t` prop through component tree.

**Styling**: CSS variables defined in `src/index.css` (brand colors: `--airline-blue: #0065b3`, `--airline-dark: #00256c`). Component-specific CSS files alongside each component.

**Data Flow**: SearchInput → handleSearch() → simulated API (1.5s timeout) → mock flight generation → FlightList render → FlightCard click → modal display.

## Key Entry Points

- `src/App.jsx` - Start here for business logic
- `src/constants/translations.js` - All UI strings
- `src/index.css` - Design tokens and global styles
