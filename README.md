# AIreal.agency - We ship real User eXperiences

A modern, high-converting portfolio website for AIreal.agency, an AI development agency focused on delivering authentic user experiences. Built with Next.js 15, Chakra UI v3, and TypeScript.

## Features

- **6 Complete Pages**: Home, Lookbook, Studio, Tech Stack, AI Workflow, and Contact
- **Modern Design**: Minimalist design with bold typography and strategic white space
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Performance Optimized**: Built with Next.js 15 and Turbopack for fast builds and runtime
- **Accessible**: Chakra UI components with built-in accessibility features
- **Type-Safe**: Full TypeScript implementation throughout

## Tech Stack

- **Framework**: Next.js 15.5.12 with App Router
- **UI Library**: Chakra UI v3
- **Language**: TypeScript 5
- **Styling**: Chakra UI with custom theme
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Deployment**: Optimized for Vercel

## Project Structure

```
ai-dev-agency-portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Home page
│   │   ├── lookbook/page.tsx        # Portfolio showcase
│   │   ├── studio/page.tsx          # Visual gallery
│   │   ├── tech-stack/page.tsx      # Skills showcase
│   │   ├── ai-workflow/page.tsx     # Process explanation
│   │   ├── contact/page.tsx         # Contact form
│   │   ├── layout.tsx               # Root layout
│   │   └── providers.tsx            # Chakra provider
│   ├── components/
│   │   ├── Header.tsx               # Navigation
│   │   ├── Footer.tsx               # Footer
│   │   ├── Hero.tsx                 # Hero sections
│   │   ├── CTAButton.tsx            # CTA buttons
│   │   ├── ContactForm.tsx          # Contact form
│   │   ├── SkillBar.tsx             # Skill progress bars
│   │   ├── ProjectCard.tsx          # Project cards
│   │   └── MockLogo.tsx             # Logo component
│   ├── lib/
│   │   └── theme.ts                 # Chakra theme
│   └── types/
│       └── index.ts                 # TypeScript types
├── package.json
├── tsconfig.json
└── next.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-dev-agency-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Pages

### Home (`/`)
High-converting landing page with:
- Hero section with dual CTAs
- Top 3 performing projects showcase
- Benefits and value propositions
- Technology stack highlights
- Multiple strategic CTAs

### Lookbook (`/lookbook`)
Portfolio showcase featuring:
- 6 detailed case studies
- Project filters by category
- Featured project highlight
- Quantified results for each project

### Studio (`/studio`)
Visual design showcase with:
- Design category breakdown
- Visual project gallery
- Design process explanation
- 6 featured showcase projects

### Tech Stack (`/tech-stack`)
Skills and technology showcase:
- 5 skill categories (Frontend, Backend, AI/ML, Databases, DevOps)
- Animated skill progress bars
- Technology philosophy section
- 30+ technologies listed

### AI Workflow (`/ai-workflow`)
Process explanation page featuring:
- 8-step development workflow
- Human-in-the-loop approach
- Technology stack breakdown
- Visual workflow indicators

### Contact (`/contact`)
Lead capture page with:
- Comprehensive contact form
- Benefits of working with agency
- Multiple contact methods
- Office hours and availability
- What happens next section

## Components

- **Header**: Responsive navigation with mobile menu
- **Footer**: Links, social media, contact info
- **Hero**: Reusable hero section with CTAs
- **CTAButton**: Three variants (primary, secondary, outline)
- **ContactForm**: Full contact form with validation
- **ProjectCard**: Portfolio project cards
- **SkillBar**: Animated progress bars
- **MockLogo**: SVG-based logo placeholder

## Customization

### Theme
Edit `src/lib/theme.ts` to customize:
- Brand colors
- Typography
- Spacing
- Component styles

### Content
Each page is self-contained in `src/app/*/page.tsx`. Update content directly in these files.

### Components
Reusable components are in `src/components/`. Modify or extend as needed.

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js.

## Performance

- Lighthouse scores target: 90+ Performance, 100 Accessibility
- Fast initial page load (< 2s)
- Optimized images with Next.js Image component
- Code splitting by route
- Minimal JavaScript bundle

## License

This project is open source and available for modification and use.

## Credits

Built with Claude Sonnet 4.5 using modern web development best practices.
