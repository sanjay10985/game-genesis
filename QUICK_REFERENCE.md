# Sanity CMS Quick Reference

## Installation Commands

```bash
# Install Sanity dependencies
npm install next-sanity @sanity/image-url @portabletext/react

# Create new Sanity project
npm create sanity@latest

# Install Studio dependencies
cd sanity && npm install

# Run Sanity Studio
cd sanity && npm run dev

# Deploy Sanity Studio
cd sanity && npm run deploy
```

## Environment Variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token
```

## Common GROQ Queries

```javascript
// Fetch single page by slug
*[_type == "page" && slug.current == $slug][0]

// Fetch all pages
*[_type == "page"]

// Fetch with ordering
*[_type == "page"] | order(publishedAt desc)

// Fetch with limit
*[_type == "page"][0...10]

// Fetch with filtering
*[_type == "page" && category == "blog"]

// Fetch with references
*[_type == "page"] {
  title,
  author->{name, bio}
}

// Fetch with projections
*[_type == "page"] {
  title,
  "imageUrl": image.asset->url
}
```

## File Structure

```
project/
├── sanity/
│   ├── schemas/
│   │   ├── documents/      # Top-level content types
│   │   ├── sections/       # Page section blocks
│   │   ├── objects/        # Reusable objects
│   │   └── index.js        # Schema registry
│   ├── sanity.config.js    # Studio config
│   └── sanity.cli.js       # CLI config
├── src/
│   ├── app/
│   │   ├── [slug]/
│   │   │   └── page.js     # Dynamic pages
│   │   └── page.js         # Home page
│   ├── components/
│   │   ├── sections/       # Section components
│   │   └── SectionMapper.js
│   └── lib/
│       ├── sanity.client.js
│       ├── sanity.queries.js
│       └── sanity.image.js
└── .env.local
```

## Schema Field Types

```javascript
// Text fields
{ name: 'title', type: 'string' }
{ name: 'description', type: 'text', rows: 3 }

// Rich text
{ name: 'content', type: 'array', of: [{ type: 'block' }] }

// Numbers
{ name: 'price', type: 'number' }

// Boolean
{ name: 'featured', type: 'boolean' }

// Date/Time
{ name: 'publishedAt', type: 'datetime' }
{ name: 'eventDate', type: 'date' }

// URL
{ name: 'website', type: 'url' }

// Slug
{ name: 'slug', type: 'slug', options: { source: 'title' } }

// Image
{ name: 'image', type: 'image', options: { hotspot: true } }

// File
{ name: 'pdf', type: 'file' }

// Array
{ name: 'tags', type: 'array', of: [{ type: 'string' }] }

// Object
{ name: 'seo', type: 'object', fields: [...] }

// Reference
{ name: 'author', type: 'reference', to: [{ type: 'person' }] }
```

## Validation Rules

```javascript
// Required
validation: (Rule) => Rule.required();

// Min/Max length
validation: (Rule) => Rule.min(10).max(100);

// Min/Max value
validation: (Rule) => Rule.min(0).max(100);

// Custom validation
validation: (Rule) =>
  Rule.custom((value) => {
    return value.length > 0 ? true : "Cannot be empty";
  });

// Warning (non-blocking)
validation: (Rule) => Rule.max(60).warning("Should be under 60 chars");

// Email
validation: (Rule) => Rule.email();

// URL
validation: (Rule) => Rule.uri({ scheme: ["http", "https"] });
```

## Image URL Builder

```javascript
import { urlFor } from "@/lib/sanity.image";

// Basic usage
urlFor(image).url();

// With dimensions
urlFor(image).width(800).height(600).url();

// With quality
urlFor(image).quality(80).url();

// Auto format
urlFor(image).auto("format").url();

// Fit modes
urlFor(image).fit("crop").url();
urlFor(image).fit("fill").url();
urlFor(image).fit("max").url();

// Combined
urlFor(image).width(800).height(600).quality(80).auto("format").url();
```

## Client Usage

```javascript
import { client } from "@/lib/sanity.client";

// Fetch data
const data = await client.fetch(query, params);

// Fetch with options
const data = await client.fetch(query, params, {
  perspective: "previewDrafts", // For preview mode
  useCdn: false, // Bypass CDN
});

// Create document
await client.create({
  _type: "page",
  title: "New Page",
  slug: { current: "new-page" },
});

// Update document
await client.patch(documentId).set({ title: "Updated Title" }).commit();

// Delete document
await client.delete(documentId);
```

## Section Component Template

```javascript
import Image from "next/image";
import { getImageUrl } from "@/lib/sanity.image";

export default function MySection({ data }) {
  const { heading, content, image } = data;

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {heading && <h2 className="text-4xl font-bold mb-8">{heading}</h2>}

        {image && (
          <Image
            src={getImageUrl(image, 800)}
            alt={heading || ""}
            width={800}
            height={600}
            className="rounded-lg"
          />
        )}

        {content && <p className="text-lg">{content}</p>}
      </div>
    </section>
  );
}
```

## Portable Text Rendering

```javascript
import { PortableText } from '@portabletext/react'

const components = {
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
    normal: ({ children }) => <p className="mb-4">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    link: ({ value, children }) => (
      <a href={value.href} className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
  },
}

// Usage
<PortableText value={content} components={components} />
```

## Next.js Integration

```javascript
// Dynamic page with ISR
export default async function Page({ params }) {
  const page = await getPageBySlug(params.slug);
  return <SectionMapper sections={page.sections} />;
}

export const revalidate = 60; // ISR: revalidate every 60 seconds

// Generate static params
export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata
export async function generateMetadata({ params }) {
  const page = await getPageBySlug(params.slug);
  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription,
  };
}
```

## Useful Studio Customizations

```javascript
// Custom structure
structure: (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton
      S.listItem()
        .title('Settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
        ),
      S.divider(),
      // Regular list
      ...S.documentTypeListItems()
    ])

// Custom preview
preview: {
  select: {
    title: 'title',
    subtitle: 'slug.current',
    media: 'image'
  },
  prepare({ title, subtitle, media }) {
    return {
      title,
      subtitle: `/${subtitle}`,
      media
    }
  }
}

// Conditional fields
{
  name: 'field',
  type: 'string',
  hidden: ({ document, parent }) => !parent?.showField
}
```

## Common Patterns

### Link Object

```javascript
{
  name: 'link',
  type: 'object',
  fields: [
    { name: 'text', type: 'string' },
    { name: 'url', type: 'string' },
    { name: 'page', type: 'reference', to: [{ type: 'page' }] },
    { name: 'openInNewTab', type: 'boolean' }
  ]
}
```

### SEO Object

```javascript
{
  name: 'seo',
  type: 'object',
  fields: [
    { name: 'metaTitle', type: 'string' },
    { name: 'metaDescription', type: 'text' },
    { name: 'ogImage', type: 'image' },
    { name: 'keywords', type: 'array', of: [{ type: 'string' }] }
  ]
}
```

### Section Block

```javascript
{
  name: 'sections',
  type: 'array',
  of: [
    { type: 'hero' },
    { type: 'textBlock' },
    { type: 'imageBlock' }
  ]
}
```

## Debugging Tips

```javascript
// Log query results
const result = await client.fetch(query, params);
console.log("Query result:", JSON.stringify(result, null, 2));

// Test queries in Vision tool (Studio)
// Navigate to Vision tab in Studio

// Check environment variables
console.log("Project ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

// Validate image URLs
console.log("Image URL:", getImageUrl(image, 800));

// Check section types
sections.forEach((section) => {
  console.log("Section type:", section._type);
});
```

## Troubleshooting

| Issue                  | Solution                                             |
| ---------------------- | ---------------------------------------------------- |
| CORS errors            | Add origin to CORS settings in Sanity dashboard      |
| Images not loading     | Check project ID and image asset references          |
| Sections not rendering | Verify section type names match in schema and mapper |
| Preview not working    | Check draft mode secret and API token                |
| Slow queries           | Use projections and optimize GROQ queries            |
| Build errors           | Ensure all environment variables are set             |

## Resources

- [Sanity Docs](https://www.sanity.io/docs)
- [GROQ Cheat Sheet](https://www.sanity.io/docs/query-cheat-sheet)
- [Schema Types](https://www.sanity.io/docs/schema-types)
- [Image URLs](https://www.sanity.io/docs/image-url)
- [Next.js Integration](https://www.sanity.io/guides/nextjs-app-router)
