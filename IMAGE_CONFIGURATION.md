# Image Configuration for Sanity CMS

## Next.js Image Configuration

The `next.config.mjs` file has been configured to allow images from Sanity CDN:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
```

### What This Does:

- Allows Next.js `<Image>` component to load images from `cdn.sanity.io`
- Enables automatic image optimization
- Provides responsive images with proper sizing
- Lazy loads images for better performance

## Sanity Image URL Builder

The `src/lib/sanity.image.js` file provides helper functions for generating optimized image URLs:

```javascript
import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./sanity.client";

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export function getImageUrl(image, width = 800, height = null) {
  if (!image) return null;

  let url = urlFor(image).width(width).quality(80).auto("format");

  if (height) {
    url = url.height(height);
  }

  return url.url();
}
```

### Usage in Components:

#### Basic Usage:

```javascript
import { getImageUrl } from "@/lib/sanity.image";
import Image from "next/image";

<Image
  src={getImageUrl(image, 800)}
  alt="Description"
  width={800}
  height={600}
/>;
```

#### With Specific Dimensions:

```javascript
<Image
  src={getImageUrl(image, 1200, 800)}
  alt="Description"
  width={1200}
  height={800}
/>
```

#### Advanced Usage with urlFor:

```javascript
import { urlFor } from "@/lib/sanity.image";

const imageUrl = urlFor(image)
  .width(800)
  .height(600)
  .quality(90)
  .fit("crop")
  .auto("format")
  .url();
```

## Image Optimization Features

### Automatic Format Selection

The `auto('format')` parameter automatically serves:

- WebP for browsers that support it
- JPEG/PNG fallback for older browsers
- Optimal format based on browser capabilities

### Quality Settings

- Default quality: 80 (good balance of quality and file size)
- Adjust quality: `.quality(90)` for higher quality
- Lower quality: `.quality(60)` for smaller file sizes

### Responsive Images

```javascript
// Different sizes for different breakpoints
const imageUrls = {
  mobile: getImageUrl(image, 640),
  tablet: getImageUrl(image, 1024),
  desktop: getImageUrl(image, 1920),
};
```

### Fit Modes

```javascript
urlFor(image)
  .fit("crop") // Crop to exact dimensions
  .fit("fill") // Fill dimensions, may stretch
  .fit("max") // Fit within dimensions
  .fit("min") // Cover dimensions
  .fit("scale"); // Scale to dimensions
```

### Hotspot & Crop

When images have hotspot data (set in Sanity Studio):

```javascript
urlFor(image).width(800).height(600).fit("crop").crop("focalpoint"); // Uses hotspot from Sanity
```

## Best Practices

### 1. Always Specify Dimensions

```javascript
// Good
<Image
  src={getImageUrl(image, 800, 600)}
  width={800}
  height={600}
  alt="Description"
/>

// Avoid
<Image src={getImageUrl(image)} alt="Description" />
```

### 2. Use Appropriate Sizes

```javascript
// Hero images
getImageUrl(image, 1920, 1080);

// Thumbnails
getImageUrl(image, 400, 300);

// Icons
getImageUrl(image, 80, 80);
```

### 3. Always Include Alt Text

```javascript
// Good
<Image src={url} alt="Team photo at company retreat" />

// Bad
<Image src={url} alt="" />
```

### 4. Use Priority for Above-the-Fold Images

```javascript
<Image
  src={getImageUrl(image, 1920)}
  alt="Hero image"
  priority // Loads immediately, no lazy loading
/>
```

### 5. Implement Responsive Images

```javascript
<Image
  src={getImageUrl(image, 1200)}
  srcSet={`
    ${getImageUrl(image, 640)} 640w,
    ${getImageUrl(image, 1024)} 1024w,
    ${getImageUrl(image, 1920)} 1920w
  `}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Responsive image"
/>
```

## Troubleshooting

### Images Not Loading?

1. **Check CORS Configuration**
   - Visit Sanity dashboard: https://sanity.io/manage
   - Go to API settings
   - Ensure `http://localhost:3000` is in CORS origins

2. **Verify Image Asset**
   - Check that image is uploaded in Sanity Studio
   - Ensure image field is not empty
   - Verify image is published (not draft)

3. **Check Next.js Config**
   - Ensure `next.config.mjs` has correct remote patterns
   - Restart Next.js dev server after config changes

4. **Verify Image URL**
   ```javascript
   console.log("Image URL:", getImageUrl(image, 800));
   // Should output: https://cdn.sanity.io/images/...
   ```

### Image Quality Issues?

Adjust quality parameter:

```javascript
// Higher quality (larger file size)
getImageUrl(image, 800).quality(90);

// Lower quality (smaller file size)
getImageUrl(image, 800).quality(60);
```

### Slow Image Loading?

1. Use appropriate image sizes
2. Enable lazy loading (default for Next.js Image)
3. Use `priority` only for above-the-fold images
4. Consider using blur placeholders:

```javascript
<Image
  src={getImageUrl(image, 800)}
  placeholder="blur"
  blurDataURL={getImageUrl(image, 20)} // Tiny version
  alt="Description"
/>
```

## Additional Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Sanity Image URLs](https://www.sanity.io/docs/image-url)
- [Image URL Builder API](https://www.sanity.io/docs/image-url)

## Summary

✅ Next.js configured to load images from Sanity CDN
✅ Image URL builder set up with optimization
✅ Helper functions created for easy image handling
✅ Automatic format selection (WebP/JPEG)
✅ Quality optimization (80% default)
✅ Responsive image support

Your images from Sanity will now load optimally with automatic optimization!
