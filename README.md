# Game Genesis

A modern Next.js website with Sanity CMS integration featuring a modular page/section architecture.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install Next.js dependencies**

```bash
npm install
```

2. **Install Sanity dependencies**

```bash
npm install next-sanity @sanity/image-url @portabletext/react
```

3. **Initialize Sanity Studio**

```bash
npm create sanity@latest
```

4. **Set up environment variables**

```bash
cp .env.local.example .env.local
# Edit .env.local with your Sanity project ID
```

5. **Run Sanity Studio**

```bash
cd sanity && npm install && npm run dev
```

6. **Run Next.js development server**

```bash
npm run dev
```

## 📚 Documentation

Comprehensive documentation is available in the following files:

- **[SANITY_SUMMARY.md](SANITY_SUMMARY.md)** - Start here! Complete overview of the integration
- **[INSTALLATION_STEPS.md](INSTALLATION_STEPS.md)** - Detailed installation guide
- **[SANITY_INTEGRATION_GUIDE.md](SANITY_INTEGRATION_GUIDE.md)** - Architecture and setup guide
- **[CODE_EXAMPLES.md](CODE_EXAMPLES.md)** - Code snippets and patterns
- **[SANITY_BEST_PRACTICES.md](SANITY_BEST_PRACTICES.md)** - Best practices and tips
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Quick lookup reference

## ✨ Features

### Content Management

- 🎨 Modular page builder with 8 section types
- 🌐 Global settings for sitewide content
- 🔍 SEO optimization built-in
- 📝 Rich text editor with formatting
- 🖼️ Image management with optimization
- 🧭 Menu management for navigation

### Section Types

- **Hero** - Landing sections with background images and CTAs
- **Text Block** - Rich text content with formatting
- **Image Block** - Optimized image display
- **Feature Grid** - Showcase features in 2-4 columns
- **Portfolio Grid** - Display projects and work
- **Service List** - List services with pricing
- **News List** - Blog posts and articles
- **Contact Form** - Customizable contact forms

### Developer Experience

- ⚡ Next.js 16 with App Router
- 🎯 TypeScript-ready architecture
- 🎨 Tailwind CSS 4 styling
- 📦 Modular component system
- 🔄 ISR (Incremental Static Regeneration)
- 🖼️ Automatic image optimization
- 🔍 SEO metadata generation

## 🏗️ Project Structure

```
project-root/
├── sanity/                    # Sanity Studio
│   ├── schemas/
│   │   ├── documents/         # Page, Settings
│   │   ├── sections/          # Hero, TextBlock, etc.
│   │   └── objects/           # SEO, Link, MenuItem
│   └── sanity.config.js
├── src/
│   ├── app/
│   │   ├── [slug]/
│   │   │   └── page.js        # Dynamic pages
│   │   └── page.js
│   ├── components/
│   │   ├── sections/          # Section components
│   │   └── SectionMapper.js   # Dynamic renderer
│   └── lib/
│       ├── sanity.client.js
│       ├── sanity.queries.js
│       └── sanity.image.js
└── .env.local
```

## 🎯 Usage

### Creating a Page

1. Open Sanity Studio at `http://localhost:3333`
2. Click "Pages" → "Create new"
3. Add title and slug
4. Add sections (Hero, Features, etc.)
5. Fill in SEO metadata
6. Publish

### Adding a New Section Type

See [CODE_EXAMPLES.md](CODE_EXAMPLES.md#custom-section-example) for detailed instructions.

## 🔧 Configuration

### Environment Variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token
```

### CORS Setup

1. Go to https://sanity.io/manage
2. Select your project
3. Navigate to API settings
4. Add CORS origins:
   - `http://localhost:3000`
   - Your production domain

## 📦 Scripts

```bash
# Development
npm run dev              # Run Next.js dev server
cd sanity && npm run dev # Run Sanity Studio

# Production
npm run build            # Build Next.js
npm start                # Start production server
cd sanity && npm run deploy # Deploy Sanity Studio

# Linting
npm run lint             # Run ESLint
```

## 🚀 Deployment

### Deploy Next.js

- Vercel (recommended): `vercel deploy`
- Other platforms: `npm run build && npm start`

### Deploy Sanity Studio

```bash
cd sanity && npm run deploy
```

## 🤝 Contributing

1. Create a new section type
2. Update documentation
3. Test thoroughly
4. Submit pull request

## 📄 License

This project is private and proprietary.

## 🆘 Support

For issues and questions:

- Check [QUICK_REFERENCE.md](QUICK_REFERENCE.md)
- Review [SANITY_BEST_PRACTICES.md](SANITY_BEST_PRACTICES.md)
- Consult [Sanity Documentation](https://www.sanity.io/docs)

---

Built with ❤️ using Next.js and Sanity CMS
