# Copilot Instructions for cs-site-src

## Project Overview
This is a Next.js 15 site optimized for static export to GitHub Pages with MDX content support. The project uses the App Router with TypeScript, Tailwind CSS v4, and is configured for static site generation. The site follows a clean, minimal design inspired by Next.js/Vercel documentation with border-based layouts.

## Site Structure

### Content Organization
- **Newsletters**: `/content/newsletters/*.md` → `/newsletters/[slug]`
- **Articles**: `/content/articles/*.md` → `/articles/[slug]`
- **Images**: `/public/images/` with subdirectories for articles and newsletters

### Page Types
- **Home**: `/` - Main landing page with Vercel-inspired border layout
- **Articles List**: `/articles/` - Index of all tutorials and articles
- **Newsletter List**: `/newsletters/` - Index of all weekly newsletters
- **Article Page**: `/articles/[slug]/` - Individual article content
- **Newsletter Page**: `/newsletters/[slug]/` - Individual newsletter content

### Navigation System
- Fixed sidebar navigation in desktop view
- Mobile-responsive hamburger menu
- Active page highlighting

## Architecture & Key Configurations

### Static Site Generation
- **Critical**: `next.config.ts` sets `output: 'export'` for GitHub Pages deployment
- Always use `trailingSlash: true` for proper GitHub Pages routing
- MDX files are treated as pages via `pageExtensions` array

### Development Workflow
- **Dev server**: `npm run dev` (uses Turbopack for faster builds)
- **Production build**: `npm run build` (also uses Turbopack)
- **Node version**: Pinned to v18 via `.nvmrc`

### Styling System
- **Tailwind v4** with PostCSS integration
- **Design System**:
  - Clean, minimal design with border-based layouts
  - Subtle hover states and transitions
  - Vercel-inspired grid systems for structure
  - Professional typography with proper hierarchy
- **Colors**: Primarily using grays with accent blues/greens
- **Dark mode**: Full support via `prefers-color-scheme: dark`
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google`

### Image Handling
- **Organization**:
  - `/public/images/articles/` - Article-specific images
  - `/public/images/newsletters/` - Newsletter-specific images
  - `/public/images/` - General shared images
- **Markdown Usage**: Images added with standard markdown syntax:
  ```markdown
  ![Alt text](/images/articles/example.png)
  *Optional caption in italics*
  ```
- **Best practices**: Detailed in `/IMAGE-GUIDE.md`

### Content Management
- Markdown files in `/content/` directory with frontmatter
- **Newsletter Frontmatter**:
  ```markdown
  ---
  title: "Week 1 - Welcome to CS"
  date: "2024-09-01"
  week: 1
  ---
  ```
- **Article Frontmatter**:
  ```markdown
  ---
  title: "Understanding Variables"
  date: "2024-09-03"
  category: "fundamentals"
  ---
  ```

### MDX Integration
- MDX files can be pages (configured in `pageExtensions`)
- Remark/Rehype plugins array for content processing
- ReactMarkdown with GitHub-flavored markdown (remarkGfm)

### TypeScript Configuration
- Path alias: `@/*` maps to project root for clean imports
- Strict mode enabled with Next.js plugin integration
- Modern target (ES2017) with latest React 19 types

### Linting & Code Quality
- ESLint v9 with Next.js rules (`next/core-web-vitals`, `next/typescript`)
- Flat config format in `eslint.config.mjs`
- Ignores build outputs (`out/`, `.next/`, `build/`)

## Common Tasks

### Adding New Content
- **New Newsletter**: Create markdown file in `/content/newsletters/`
- **New Article**: Create markdown file in `/content/articles/`
- **Add Images**: Place in appropriate folder in `/public/images/`

### Adding Images to Content
- **Basic syntax**: `![Alt text](/images/articles/my-image.png)`
- **With caption**: Add *italic text* on the next line
- **Advanced**: Use HTML for more control:
  ```html
  <img src="/images/articles/diagram.png" alt="Description" width="500" />
  ```
- See `/IMAGE-GUIDE.md` for complete details

### Styling Components
- Follow the clean, minimal design pattern established
- Use border-based layouts for structure
- Use subtle hover effects for interactive elements
- Ensure mobile responsiveness with appropriate breakpoints

### Deployment Process
- Build generates static files in `out/` directory
- GitHub Actions workflow deploys to GitHub Pages
- Always test static export locally before pushing