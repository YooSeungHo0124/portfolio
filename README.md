# Next.js Portfolio

A modern portfolio built with Next.js 15, TypeScript, and Tailwind CSS.

## Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/               # Reusable components
│   ├── ui/                   # UI components
│   ├── layout/               # Layout components
│   └── sections/             # Page sections
├── data/                     # Content and data
│   └── portfolio-data.ts     # Portfolio configuration and content
├── types/                    # TypeScript types
│   └── index.ts              # Type definitions
├── lib/                      # Utilities
│   └── utils.ts              # Helper functions
├── public/                   # Static assets
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── postcss.config.mjs        # PostCSS configuration
├── next.config.ts            # Next.js configuration
└── README.md                 # This file
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Technologies

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Utilities:** clsx

## Features

- Light mode only (no dark mode toggle)
- Responsive design
- TypeScript for type safety
- Tailwind CSS for styling
- Static export for GitHub Pages
- Fast performance with Next.js App Router

## Customization

Edit `/data/portfolio-data.ts` to customize:
- Your name and contact information
- Skills and expertise
- Work experience
- Projects and portfolio

## Deployment

The project is configured for static export using `output: 'export'` in `next.config.ts`, making it suitable for deployment on GitHub Pages or any static hosting.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
