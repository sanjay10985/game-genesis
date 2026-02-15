# Sanity CMS Code Examples

## GROQ Query Examples

### Fetch Page with All Sections

```javascript
const pageQuery = `
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    seo,
    sections[] {
      _type,
      _key,
      ...
    }
  }
`;
```

### Fetch All Pages for Sitemap

```javascript
const sitemapQuery = `
  *[_type == "page" && !(_id in path("drafts.**"))] {
    "slug": slug.current,
    "lastModified": _updatedAt
  }
`;
```

### Fetch Pages by Category

```javascript
const categoryQuery = `
  *[_type == "page" && category == $category] | order(publishedAt desc) {
    title,
    slug,
    excerpt,
    publishedAt
  }
`;
```

### Search Pages

```javascript
const searchQuery = `
  *[_type == "page" && [title, seo.metaDescription] match $searchTerm] {
    title,
    slug,
    seo {
      metaDescription
    }
  }
`;
```

## Custom Section Example

### 1. Create Schema (sanity/schemas/sections/testimonials.js)

```javascript
export default {
  name: "testimonials",
  title: "Testimonials",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "quote",
              title: "Quote",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
            {
              name: "author",
              title: "Author",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "role",
              title: "Role/Company",
              type: "string",
            },
            {
              name: "avatar",
              title: "Avatar",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "rating",
              title: "Rating",
              type: "number",
              validation: (Rule) => Rule.min(1).max(5),
            },
          ],
          preview: {
            select: {
              title: "author",
              subtitle: "role",
              media: "avatar",
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "heading",
      testimonials: "testimonials",
    },
    prepare({ title, testimonials }) {
      return {
        title: "Testimonials",
        subtitle: title || `${testimonials?.length || 0} testimonials`,
      };
    },
  },
};
```

### 2. Register Schema (sanity/schemas/index.js)

```javascript
import testimonials from "./sections/testimonials";

export const schemas = [
  // ... other schemas
  testimonials,
];
```

### 3. Add to Page Schema (sanity/schemas/documents/page.js)

```javascript
{
  name: 'sections',
  title: 'Page Sections',
  type: 'array',
  of: [
    // ... other sections
    { type: 'testimonials' },
  ],
}
```

### 4. Create Component (src/components/sections/Testimonials.js)

```javascript
import Image from "next/image";
import { getImageUrl } from "@/lib/sanity.image";

export default function Testimonials({ data }) {
  const { heading, testimonials } = data;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {heading && (
          <h2 className="text-4xl font-bold text-center mb-12">{heading}</h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              {testimonial.rating && (
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
              )}

              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>

              <div className="flex items-center gap-4">
                {testimonial.avatar && (
                  <Image
                    src={getImageUrl(testimonial.avatar, 60, 60)}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                )}
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  {testimonial.role && (
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 5. Register Component (src/components/SectionMapper.js)

```javascript
import Testimonials from "./sections/Testimonials";

const sectionComponents = {
  // ... other components
  testimonials: Testimonials,
};
```

## Advanced GROQ Queries

### Fetch Page with Referenced Content

```javascript
const pageWithReferencesQuery = `
  *[_type == "page" && slug.current == $slug][0] {
    title,
    sections[] {
      ...,
      _type == "portfolioGrid" => {
        items[]-> {
          title,
          image,
          category
        }
      }
    }
  }
`;
```

### Pagination

```javascript
const paginatedQuery = `
  *[_type == "page"] | order(publishedAt desc) [$start...$end] {
    title,
    slug,
    excerpt,
    publishedAt
  }
`;

// Usage
const start = page * pageSize;
const end = start + pageSize;
const pages = await client.fetch(paginatedQuery, { start, end });
```

### Conditional Fields

```javascript
const conditionalQuery = `
  *[_type == "page"] {
    title,
    slug,
    "hasHero": count(sections[_type == "hero"]) > 0,
    "sectionCount": count(sections)
  }
`;
```

## API Route Example

### Create API Route (src/app/api/contact/route.js)

```javascript
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    // Validate data
    if (!data.email || !data.message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    // TODO: Send email, save to database, etc.
    console.log("Contact form submission:", data);

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

### Update Contact Form Component

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSuccess(true);
      setFormData({});
    } else {
      alert("Failed to submit form");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred");
  } finally {
    setIsSubmitting(false);
  }
};
```

## Preview Mode Example

### Create Preview API Route (src/app/api/preview/route.js)

```javascript
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  // Check secret
  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  // Enable draft mode
  draftMode().enable();

  // Redirect to the page
  redirect(`/${slug}`);
}
```

### Update Page to Support Preview

```javascript
import { draftMode } from "next/headers";
import { getPageBySlug, getPageBySlugPreview } from "@/lib/sanity.queries";

export default async function Page({ params }) {
  const { isEnabled } = draftMode();

  const page = isEnabled
    ? await getPageBySlugPreview(params.slug)
    : await getPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <main>
      {isEnabled && (
        <div className="bg-yellow-100 p-4 text-center">Preview Mode Active</div>
      )}
      <SectionMapper sections={page.sections} />
    </main>
  );
}
```

## Sitemap Generation

### Create Sitemap Route (src/app/sitemap.js)

```javascript
import { getAllPageSlugs } from "@/lib/sanity.queries";

export default async function sitemap() {
  const slugs = await getAllPageSlugs();
  const baseUrl = "https://yourdomain.com";

  const pages = slugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: slug === "home" ? 1 : 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...pages,
  ];
}
```

## Webhook for Revalidation

### Create Webhook Route (src/app/api/revalidate/route.js)

```javascript
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { secret, slug } = await request.json();

    // Verify secret
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
    }

    // Revalidate the page
    revalidatePath(`/${slug}`);

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    return NextResponse.json({ error: "Error revalidating" }, { status: 500 });
  }
}
```

### Configure Webhook in Sanity

1. Go to Sanity dashboard
2. Navigate to API → Webhooks
3. Create new webhook:
   - URL: `https://yourdomain.com/api/revalidate`
   - Dataset: production
   - Trigger on: Create, Update, Delete
   - Filter: `_type == "page"`
   - Projection: `{"slug": slug.current}`
   - HTTP method: POST
   - Secret: Your revalidate secret

## Rich Text Customization

### Custom Portable Text Components

```javascript
const customPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-8">
        <Image
          src={getImageUrl(value, 800)}
          alt={value.alt || ""}
          width={800}
          height={600}
          className="rounded-lg"
        />
        {value.caption && (
          <p className="text-center text-gray-600 mt-2 italic">
            {value.caption}
          </p>
        )}
      </div>
    ),
    callout: ({ value }) => (
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
        <p className="font-semibold">{value.title}</p>
        <p>{value.text}</p>
      </div>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2
        className="text-3xl font-bold mt-8 mb-4 scroll-mt-20"
        id={slugify(children)}
      >
        {children}
      </h2>
    ),
  },
};
```

## Performance Optimization

### Image Optimization

```javascript
// Use responsive images
export function getResponsiveImageUrls(image) {
  return {
    small: getImageUrl(image, 640),
    medium: getImageUrl(image, 1024),
    large: getImageUrl(image, 1920),
  };
}

// Usage in component
<Image
  src={getImageUrl(image, 800)}
  srcSet={`
    ${getImageUrl(image, 640)} 640w,
    ${getImageUrl(image, 1024)} 1024w,
    ${getImageUrl(image, 1920)} 1920w
  `}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt={alt}
/>;
```

### Query Optimization

```javascript
// Only fetch needed fields
const optimizedQuery = `
  *[_type == "page" && slug.current == $slug][0] {
    title,
    sections[] {
      _type,
      _key,
      // Only fetch fields used by each section type
      select(
        _type == "hero" => {
          heading,
          subheading,
          "imageUrl": backgroundImage.asset->url
        },
        _type == "textBlock" => {
          heading,
          content
        }
      )
    }
  }
`;
```
