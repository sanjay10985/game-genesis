# Footer Setup Guide

## Overview

The footer is now integrated with Sanity CMS and appears on every page automatically through the `LayoutWrapper` component.

## Architecture

### Components

1. **Footer.js** - The footer component that displays all footer content
2. **LayoutWrapper.js** - Wraps Header + Page Content + Footer
3. **Header.js** - The header component (already existed)

### Data Flow

```
Page → getSettings() → LayoutWrapper → Header + Content + Footer
```

## Sanity Configuration

### Global Settings Schema

The footer data is managed in Sanity Studio under "Global Settings" with these fields:

- **Footer Tagline** - Tagline text (e.g., "Building games that play smooth...")
- **Footer Quick Links** - Array of links (Home, Services, About, etc.)
- **Footer Services** - Array of service items
- **Footer Contact Info** - Address and email
- **Footer CTA Text** - Button text (default: "Hire Now")
- **Footer CTA Link** - Button URL
- **Copyright Text** - Copyright notice
- **Social Links** - Facebook, Twitter, Instagram, LinkedIn, YouTube URLs

## How to Configure Footer Content

1. Open Sanity Studio at `http://localhost:3333`
2. Navigate to "Global Settings" (should be in the sidebar)
3. Fill in the footer fields:
   - Add your tagline
   - Add quick links (title + URL)
   - Add services (title + optional URL)
   - Add contact info (address + email)
   - Set CTA button text and link
   - Add social media URLs
   - Set copyright text

4. Click "Publish"
5. Refresh your Next.js site - footer will update automatically

## Default Fallbacks

If no data is set in Sanity, the footer will show default content:

- Default quick links (Home, Services, Case Studies, About, Contact, Privacy, Terms)
- Default services (Game Development, Game Art, Animation, Unity, Unreal, AR/VR)
- Default tagline and copyright text

## Usage in Pages

### Automatic (Recommended)

Use `LayoutWrapper` to automatically include Header and Footer:

```javascript
import { getSettings } from "@/lib/sanity.queries";
import LayoutWrapper from "@/components/LayoutWrapper";

export default async function MyPage() {
  const settings = await getSettings();

  return (
    <LayoutWrapper settings={settings}>{/* Your page content */}</LayoutWrapper>
  );
}
```

### Manual (Not Recommended)

If you need custom layout:

```javascript
import { getSettings } from "@/lib/sanity.queries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function MyPage() {
  const settings = await getSettings();

  return (
    <>
      <Header settings={settings} />
      <main>{/* Your content */}</main>
      <Footer settings={settings} />
    </>
  );
}
```

## Design Features

The footer matches your design system:

- Black background with cyan accents
- Nova Flat font
- Primary Pink (#FF8FA3) for section headings
- Primary Cyan (#9CDBDB) for links and CTA button
- 4-column grid layout (responsive)
- Social media icons with hover effects
- Proper spacing and typography

## Footer Sections

1. **Brand Section** - Logo, site title, and tagline
2. **Quick Links** - Navigation links
3. **Services** - List of services
4. **Contact Info** - Address, email, and CTA button
5. **Bottom Bar** - Copyright and social media icons

## Social Media Icons

Supported platforms:

- Facebook
- Twitter/X
- Instagram
- LinkedIn
- YouTube

Icons appear only if URLs are provided in Sanity.

## Files Modified/Created

### Created:

- `src/components/Footer.js`
- `src/components/LayoutWrapper.js`
- `FOOTER_SETUP.md`

### Modified:

- `sanity/schemas/documents/settings.js` - Updated footer fields
- `src/lib/sanity.queries.js` - Updated getSettings query
- `src/app/page.js` - Now uses LayoutWrapper
- `src/app/demo/page.js` - Now uses LayoutWrapper

## Next Steps

1. Configure footer content in Sanity Studio
2. Update all other pages to use `LayoutWrapper`
3. Test footer on different screen sizes
4. Customize social media links
5. Add any additional footer sections as needed
