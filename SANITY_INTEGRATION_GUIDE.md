# Sanity CMS Integration Guide for Next.js

## Overview

This guide implements a modular page/section architecture where:

- **Pages** are composed of reusable **Section Blocks**
- **Global Settings** manage sitewide content
- **GROQ queries** fetch structured data
- **Dynamic component mapping** renders sections automatically

### Content Model Flow

1. Create schemas in Sanity Studio
2. Build pages by adding section blocks
3. Fetch page data via GROQ queries
4. Map sections to React components dynamically
5. Render pages with SEO and structured content

---

## Step 1: Install Sanity Dependencies

Run these commands in your project root:

```bash
npm install next-sanity @sanity/vision @sanity/image-url
npm install --save-dev @sanity/eslint-config-studio
```

**Packages explained:**

- `next-sanity`: Sanity client for Next.js with App Router support
- `@sanity/vision`: GROQ query testing tool in Studio
- `@sanity/image-url`: Image URL builder for responsive images
- `@sanity/eslint-config-studio`: Linting for Sanity schemas

---

## Step 2: Initialize Sanity Studio

Create a Sanity project (if you haven't already):

```bash
npm create sanity@latest -- --project-plan free --template clean
```

Follow the prompts:

- Create new project or use existing
- Choose dataset name (e.g., "production")
- Output path: `./sanity` (or your preference)

This creates a `sanity` folder with Studio configuration.

---

## Step 3: Project Structure

```
project-root/
├── sanity/                    # Sanity Studio
│   ├── schemas/
│   │   ├── documents/         # Top-level documents
│   │   │   ├── page.js
│   │   │   └── settings.js
│   │   ├── sections/          # Section blocks
│   │   │   ├── hero.js
│   │   │   ├── textBlock.js
│   │   │   ├── imageBlock.js
│   │   │   ├── featureGrid.js
│   │   │   ├── portfolioGrid.js
│   │   │   ├── serviceList.js
│   │   │   ├── newsList.js
│   │   │   └── contactForm.js
│   │   ├── objects/           # Reusable objects
│   │   │   ├── seo.js
│   │   │   ├── link.js
│   │   │   └── menuItem.js
│   │   └── index.js
│   ├── sanity.config.js
│   └── sanity.cli.js
├── src/
│   ├── app/
│   │   ├── [slug]/
│   │   │   └── page.js        # Dynamic page route
│   │   └── page.js            # Home page
│   ├── components/
│   │   └── sections/          # Section components
│   │       ├── Hero.js
│   │       ├── TextBlock.js
│   │       ├── ImageBlock.js
│   │       ├── FeatureGrid.js
│   │       ├── PortfolioGrid.js
│   │       ├── ServiceList.js
│   │       ├── NewsList.js
│   │       └── ContactForm.js
│   └── lib/
│       ├── sanity.client.js   # Sanity client config
│       ├── sanity.queries.js  # GROQ queries
│       └── sanity.image.js    # Image URL builder
└── package.json
```

---

## Step 4: Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here
```

Get your project ID from `sanity/sanity.cli.js` or Sanity dashboard.

---

## Step 5: Best Practices

### Content Modeling

- Keep schemas modular and reusable
- Use validation for required fields
- Add helpful descriptions for editors
- Use preview configurations for better UX

### Performance

- Use GROQ projections to fetch only needed data
- Implement ISR (Incremental Static Regeneration) for pages
- Use `next/image` with Sanity image URLs
- Enable CDN caching with proper revalidation

### Development Workflow

1. Design content model in Sanity Studio
2. Create schemas and test with sample data
3. Build GROQ queries in Vision tool
4. Create React components for sections
5. Implement dynamic page rendering
6. Add SEO and metadata handling

### SEO Considerations

- Use Next.js metadata API for SEO fields
- Implement structured data (JSON-LD)
- Generate sitemaps from Sanity content
- Handle Open Graph images properly

---

## Next Steps

1. Install dependencies (see Step 1)
2. Review and customize schema files
3. Set up environment variables
4. Run Sanity Studio: `cd sanity && npm run dev`
5. Create sample content in Studio
6. Implement Next.js pages and components
7. Test GROQ queries and rendering

---

## Useful Commands

```bash
# Run Sanity Studio locally
cd sanity && npm run dev

# Deploy Sanity Studio
cd sanity && npm run deploy

# Run Next.js dev server
npm run dev

# Build for production
npm run build
```

---

## Additional Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-app-router)
- [Image Optimization](https://www.sanity.io/docs/image-url)
