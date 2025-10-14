# EdTech Cambodia Project - AI Coding Assistant Instructions

## Project Architecture

This is a multi-brand educational technology website with three distinct sections:
- **EdTech Main** (Default): Main EdTech Cambodia website (`/`, `/about`, `/news`, etc.)
- **EdTech S2025**: Dedicated summit website (`/edtech-s2025/*`)
- **ICT4E**: Independent meeting platform (`/ict4e/*`)

### Layout System Pattern
Each brand uses a dedicated layout with separate navigation and footer:
```jsx
// src/layouts/DefaultLayout.jsx - Main EdTech
// src/layouts/EdTech2025_Layout.jsx - Summit
// src/layouts/ICT4E_Layout.jsx - ICT4E Meeting
```

Routes are organized by brand in `src/routes/index.jsx` using nested route elements for clean separation.

## Component Organization

### File Structure Convention
```
src/components/
├── common/           # Shared utilities (FloatingBackToTop, OrganizeTeam)
├── section/          # Page sections & layouts (Navbar, Footer, HeroSection)
└── ui/              # Reusable UI components (shadcn/ui style)
```

### Naming Conventions
- **Brand-specific components**: Use brand prefix (e.g., `ICT4E_navbar.jsx`, `EdTech2025_header.jsx`)
- **Generic components**: No prefix (e.g., `Navbar.jsx`, `Footer.jsx`)
- **Pages**: Kebab-case for EdTech S2025 (`edtech-2025-home.jsx`), PascalCase for others

### Bilingual Content Pattern
Components often include Khmer and English text:
```jsx
const navItems = [
  { title: '​ទំព័រដើម', subtitle: 'Home', route: '/ict4e' },
  { title: 'អំពីកម្មវិធី', subtitle: 'About', route: '/ict4e/about-meeting' }
];
```

## Development Setup

### Key Commands
```bash
npm run dev        # Start Vite dev server
npm run build      # Production build
npm run preview    # Preview build locally
```

### Backend (Minimal)
The `Backend/` folder contains a basic Express.js setup but is currently minimal. Focus development on the frontend React application.

## Technical Stack

- **Frontend**: React 19 + Vite + React Router DOM
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI + shadcn/ui patterns
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Carousel**: Swiper.js

### Import Alias
Use `@/` for src imports: `import Component from '@/components/ui/button'`

### Styling Utilities
- Use `cn()` helper from `src/lib/utils.js` for conditional classes
- Custom Tailwind theme extends default with CSS variables for consistent theming
- Tailwind Animate plugin available for animations

## Key Integration Points

### Asset Organization
- **Fonts**: Kantumruy Pro (Khmer typography) in `src/assets/font/`
- **Images**: Brand-specific folders in `src/assets/images/` (e.g., `edtech-2025/`)
- **Local images**: Reference with `/src/assets/images/` paths

### Route Architecture
Each brand maintains independent routing under its layout, enabling completely different navigation flows and branding while sharing the same codebase infrastructure.

When adding new features, determine the target brand first, then follow the established layout → page → component hierarchy.