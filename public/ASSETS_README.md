# Assets Required

Please add the following image files to the `/public` folder:

## Required Images

### 1. Logo (`logo.png`)

- **Location**: `/public/logo.png`
- **Description**: GameGenesis logo (the circular icon with "G")
- **Recommended Size**: 200x200px (will be displayed at 48x48px)
- **Format**: PNG with transparent background
- **Usage**: Header logo

### 2. Hero Characters (`hero-characters.png`)

- **Location**: `/public/hero-characters.png`
- **Description**: The two game characters shown on the right side of the hero section
- **Recommended Size**: 1200x1400px (portrait orientation)
- **Format**: PNG with transparent background
- **Usage**: Hero section right side
- **Notes**: Should include both characters as shown in the design

## How to Add Images

1. Save your images with the exact filenames above
2. Place them in the `/public` folder at the root of your project
3. The images will be automatically optimized by Next.js

## Current Structure

```
public/
├── logo.png              ← Add your logo here
├── hero-characters.png   ← Add your character images here
├── file.svg
├── globe.svg
├── next.svg
├── vercel.svg
└── window.svg
```

## Image Optimization

Next.js will automatically:

- Optimize images for different screen sizes
- Serve WebP format when supported
- Lazy load images below the fold
- Provide proper caching headers

## Testing

Once you add the images:

1. Visit http://localhost:3000/demo
2. You should see the header with your logo
3. The hero section should display with your character images

## Fallback

If images are not found, you'll see:

- Alt text in place of images
- Broken image icon
- Check browser console for 404 errors

---

**Note**: Make sure your images are properly optimized before adding them:

- Use PNG for images with transparency
- Compress images to reduce file size
- Ensure images are high quality for retina displays
