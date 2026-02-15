# Sanity CMS Best Practices

## Content Modeling

### Keep Schemas Modular

- Break down complex content into reusable objects
- Use references for shared content
- Create flexible section blocks instead of rigid page templates

```javascript
// Good: Modular and reusable
{
  name: 'button',
  type: 'object',
  fields: [
    { name: 'text', type: 'string' },
    { name: 'link', type: 'link' }
  ]
}

// Avoid: Duplicating fields across schemas
```

### Use Validation Wisely

- Add validation for required fields
- Set character limits for SEO fields
- Provide helpful error messages

```javascript
{
  name: 'metaTitle',
  type: 'string',
  validation: Rule => Rule
    .required()
    .max(60)
    .warning('Should be under 60 characters for optimal SEO')
}
```

### Add Helpful Descriptions

- Guide content editors with clear descriptions
- Explain technical fields in plain language
- Provide examples when helpful

```javascript
{
  name: 'slug',
  type: 'slug',
  description: 'URL-friendly version of the title (e.g., "about-us")',
}
```

### Use Preview Configurations

- Show meaningful previews in Studio
- Include relevant media and subtitles
- Help editors identify content quickly

```javascript
preview: {
  select: {
    title: 'heading',
    subtitle: 'subheading',
    media: 'image'
  },
  prepare({ title, subtitle, media }) {
    return {
      title: title || 'Untitled',
      subtitle: subtitle,
      media: media
    }
  }
}
```

## GROQ Queries

### Fetch Only What You Need

- Use projections to limit data
- Avoid fetching entire documents when you only need specific fields
- Reduce payload size for better performance

```javascript
// Good: Only fetch needed fields
*[_type == "page"] {
  title,
  slug,
  "imageUrl": image.asset->url
}

// Avoid: Fetching everything
*[_type == "page"]
```

### Use References Wisely

- Dereference with `->` when you need related content
- Be mindful of query depth
- Consider denormalizing frequently accessed data

```javascript
// Dereference related content
*[_type == "page"] {
  title,
  author-> {
    name,
    bio
  }
}
```

### Optimize with Filters

- Filter at the query level, not in JavaScript
- Use indexes for better performance
- Combine filters efficiently

```javascript
// Good: Filter in GROQ
*[_type == "page" && category == "blog" && publishedAt < now()]

// Avoid: Fetching all and filtering in JS
```

### Handle Missing Data

- Use coalesce for fallback values
- Check for null/undefined in queries
- Provide defaults when appropriate

```javascript
*[_type == "page"] {
  title,
  "description": coalesce(seo.metaDescription, excerpt, "No description")
}
```

## Performance

### Enable CDN

- Use CDN in production for faster reads
- Disable CDN for authenticated requests
- Balance freshness vs. speed

```javascript
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === "production",
});
```

### Implement ISR

- Use Incremental Static Regeneration
- Set appropriate revalidation times
- Balance freshness with build performance

```javascript
export const revalidate = 60; // Revalidate every 60 seconds
```

### Optimize Images

- Use Sanity's image pipeline
- Specify dimensions and quality
- Enable auto format selection
- Implement responsive images

```javascript
urlFor(image).width(800).height(600).quality(80).auto("format").url();
```

### Use Webhooks for Revalidation

- Set up webhooks to trigger revalidation
- Only revalidate changed pages
- Implement proper error handling

### Cache Strategically

- Cache static content aggressively
- Use shorter cache times for dynamic content
- Implement cache invalidation

## Security

### Protect API Tokens

- Never expose tokens in client-side code
- Use environment variables
- Rotate tokens regularly
- Use read-only tokens when possible

```javascript
// Good: Server-side only
const client = createClient({
  token: process.env.SANITY_API_TOKEN, // Server-side only
});

// Avoid: Exposing tokens
const token = "sk_..."; // Never hardcode tokens
```

### Configure CORS Properly

- Only allow necessary origins
- Use specific URLs, not wildcards in production
- Review CORS settings regularly

### Validate Input

- Validate all user input
- Sanitize data before saving
- Use Sanity's built-in validation

### Implement Preview Mode Securely

- Use secret tokens for preview mode
- Don't expose preview URLs publicly
- Implement proper authentication

## Content Management

### Structure for Editors

- Organize schemas logically
- Use clear, non-technical names
- Group related fields
- Provide sensible defaults

```javascript
{
  name: 'alignment',
  title: 'Text Alignment',
  type: 'string',
  options: {
    list: [
      { title: 'Left', value: 'left' },
      { title: 'Center', value: 'center' },
      { title: 'Right', value: 'right' }
    ],
    layout: 'radio'
  },
  initialValue: 'left'
}
```

### Use Conditional Fields

- Show/hide fields based on context
- Reduce clutter in Studio
- Guide editors through workflows

```javascript
{
  name: 'options',
  type: 'array',
  hidden: ({ parent }) => parent?.type !== 'select'
}
```

### Implement Workflows

- Use document actions for custom workflows
- Add status fields for content lifecycle
- Create custom input components when needed

### Document Your Schemas

- Add comments to complex schemas
- Create documentation for editors
- Maintain a content model diagram

## Development Workflow

### Version Control

- Commit schema changes
- Use migrations for breaking changes
- Test schema changes in development first

### Environment Management

- Use separate datasets for dev/staging/production
- Test with production-like data
- Implement proper deployment pipelines

### Testing

- Test GROQ queries in Vision tool
- Validate schema changes thoroughly
- Test with various content scenarios

### Monitoring

- Monitor query performance
- Track API usage
- Set up error logging

## SEO Best Practices

### Implement Proper Metadata

- Use Next.js metadata API
- Include all relevant SEO fields
- Generate Open Graph images

```javascript
export async function generateMetadata({ params }) {
  const page = await getPageBySlug(params.slug);

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription,
    openGraph: {
      title: page.seo?.metaTitle || page.title,
      description: page.seo?.metaDescription,
      images: page.seo?.ogImage ? [page.seo.ogImage] : [],
    },
  };
}
```

### Generate Sitemaps

- Create dynamic sitemaps from Sanity content
- Include all published pages
- Update automatically

### Implement Structured Data

- Add JSON-LD for rich snippets
- Use appropriate schema.org types
- Validate with Google's tools

### Handle Redirects

- Store redirects in Sanity
- Implement 301 redirects for moved pages
- Maintain redirect history

## Accessibility

### Alt Text for Images

- Require alt text in schemas
- Provide guidance for writing alt text
- Validate alt text presence

```javascript
{
  name: 'alt',
  type: 'string',
  validation: Rule => Rule.required(),
  description: 'Describe the image for screen readers and SEO'
}
```

### Semantic HTML

- Use proper heading hierarchy
- Implement ARIA labels when needed
- Ensure keyboard navigation works

### Color Contrast

- Provide color options that meet WCAG standards
- Test contrast ratios
- Offer high-contrast alternatives

## Maintenance

### Regular Updates

- Keep Sanity packages updated
- Review and update schemas
- Audit unused content types

### Clean Up Unused Content

- Archive old content
- Remove unused schemas
- Optimize asset storage

### Monitor Performance

- Track query performance
- Review slow queries
- Optimize as needed

### Backup Strategy

- Export content regularly
- Store backups securely
- Test restoration process

## Common Pitfalls to Avoid

### Over-Fetching Data

❌ Fetching entire documents when only a few fields are needed
✅ Use projections to fetch only required fields

### Hardcoding Values

❌ Hardcoding URLs, IDs, or configuration
✅ Use environment variables and Sanity settings

### Ignoring Validation

❌ Allowing editors to publish incomplete content
✅ Implement proper validation rules

### Poor Schema Design

❌ Creating rigid, inflexible schemas
✅ Design modular, reusable schemas

### Not Using CDN

❌ Always querying the API directly
✅ Enable CDN for production reads

### Missing Error Handling

❌ Assuming queries always succeed
✅ Implement proper error handling and fallbacks

### Exposing Sensitive Data

❌ Including tokens or secrets in client code
✅ Keep sensitive data server-side only

### Ignoring Performance

❌ Not monitoring query performance
✅ Regularly audit and optimize queries

## Checklist for Production

- [ ] Environment variables configured
- [ ] CORS origins set correctly
- [ ] CDN enabled for production
- [ ] ISR/revalidation configured
- [ ] Webhooks set up for auto-revalidation
- [ ] Error handling implemented
- [ ] SEO metadata complete
- [ ] Images optimized
- [ ] Sitemap generated
- [ ] Analytics integrated
- [ ] Preview mode secured
- [ ] API tokens secured
- [ ] Backup strategy in place
- [ ] Monitoring configured
- [ ] Documentation complete
- [ ] Content migration tested
- [ ] Performance tested
- [ ] Accessibility tested
- [ ] Mobile responsiveness verified
- [ ] Browser compatibility checked
