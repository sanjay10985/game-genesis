# Game Genesis Design System Summary

## 🎨 Complete Design System

Your Game Genesis design system is now fully configured with custom colors and typography!

## Colors

### Primary Colors

- **Primary Pink**: `#FF8FA3` - `bg-primary-pink` / `text-primary-pink`
- **Primary Cyan**: `#9CDBDB` - `bg-primary-cyan` / `text-primary-cyan`

### Backgrounds

- **Main Background**: `#1A1A1D` - `bg-main-bg`
- **Section Background**: `#25252A` - `bg-section-bg`

### Cards/Panels (3 levels for depth)

- **Card 1**: `#2E2E35` - `bg-card-1`
- **Card 2**: `#38383F` - `bg-card-2`
- **Card 3**: `#42424A` - `bg-card-3`

### Interactive

- **Primary CTA**: `#FF8FA3` - `bg-primary-cta`
- **CTA Hover**: `#FF6B85` - `bg-cta-hover`
- **Secondary CTA**: `#9CDBDB` - `bg-secondary-cta`

### Borders

- **Subtle Border**: `#1C2A33` - `border-subtle-border`
- **Hover Border**: `#A3C4C4` - `border-hover-border`

## Typography

### Font Family

- **Primary Font**: Nova Flat (Google Fonts)
- **Weight**: 400 (single weight)
- **Applied**: Globally to all text

### Usage Tips

1. Use **uppercase** for headings: `uppercase`
2. Add **letter spacing**: `tracking-wide` or `tracking-wider`
3. Use **size variations** for hierarchy (not weight)
4. Combine with **brand colors** for emphasis

### Recommended Sizes

```jsx
// Headings
text-6xl  // Hero titles
text-5xl  // Main headings
text-4xl  // Section headings
text-3xl  // Subsection headings
text-2xl  // Card titles
text-xl   // Small headings

// Body
text-lg   // Large body text
text-base // Default body text
text-sm   // Small text
text-xs   // Extra small text
```

## Quick Start Examples

### Hero Section

```jsx
<section className="bg-main-bg min-h-screen flex items-center justify-center">
  <div className="text-center">
    <h1 className="text-6xl text-primary-pink tracking-wider uppercase mb-4">
      Game Genesis
    </h1>
    <p className="text-2xl text-primary-cyan tracking-wide mb-8">
      Creating Immersive Experiences
    </p>
    <button className="bg-primary-cta hover:bg-cta-hover text-white px-8 py-4 rounded-lg text-lg tracking-wide uppercase transition-colors">
      Get Started
    </button>
  </div>
</section>
```

### Card Component

```jsx
<div className="bg-card-1 border border-subtle-border hover:border-hover-border rounded-lg p-6 transition-colors">
  <h3 className="text-2xl text-primary-pink tracking-wide uppercase mb-3">
    Game Development
  </h3>
  <p className="text-gray-300 leading-relaxed">
    Full-cycle game development from concept to launch
  </p>
</div>
```

### Button Styles

```jsx
// Primary
<button className="bg-primary-cta hover:bg-cta-hover text-white px-6 py-3 rounded-lg tracking-wide uppercase transition-colors">
  Primary
</button>

// Secondary
<button className="bg-secondary-cta hover:bg-primary-cyan text-main-bg px-6 py-3 rounded-lg tracking-wide uppercase transition-colors">
  Secondary
</button>

// Outline
<button className="border-2 border-primary-pink text-primary-pink hover:bg-primary-pink hover:text-white px-6 py-3 rounded-lg tracking-wide uppercase transition-all">
  Outline
</button>
```

## Demo Pages

### View Your Design System

- **Colors**: http://localhost:3000/colors
- **Typography**: http://localhost:3000/fonts

## Documentation Files

### Detailed Guides

- **COLOR_SYSTEM.md** - Complete color palette guide
- **FONT_SETUP.md** - Typography system documentation
- **DESIGN_SYSTEM_SUMMARY.md** - This file

## File Locations

### Configuration

- Colors: `src/app/globals.css`
- Font: `src/app/layout.js`
- Next.js Config: `next.config.mjs`

### Components

- Color Showcase: `src/components/ColorShowcase.js`
- Font Showcase: `src/components/FontShowcase.js`

## Best Practices

### Colors

1. Use `bg-main-bg` for page backgrounds
2. Use `bg-section-bg` for section containers
3. Layer cards with `bg-card-1`, `bg-card-2`, `bg-card-3`
4. Use `text-primary-pink` for main headings
5. Use `text-primary-cyan` for subheadings and links
6. Always include hover states with transitions

### Typography

1. Use `uppercase` for headings and buttons
2. Add `tracking-wide` or `tracking-wider` for better spacing
3. Use `leading-relaxed` for body text readability
4. Create hierarchy with size, not weight
5. Combine with brand colors for emphasis

### Accessibility

1. Maintain good contrast ratios
2. Use minimum 14px font size (`text-sm`)
3. Include focus states on interactive elements
4. Use semantic HTML elements
5. Provide alt text for images

## Component Patterns

### Navigation

```jsx
<nav className="bg-main-bg border-b border-subtle-border">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    <div className="text-primary-pink text-2xl tracking-wider uppercase">
      Game Genesis
    </div>
    <div className="flex gap-6">
      <a
        href="#"
        className="text-gray-300 hover:text-primary-cyan tracking-wide transition-colors"
      >
        Home
      </a>
    </div>
  </div>
</nav>
```

### Form Input

```jsx
<input
  type="text"
  className="w-full bg-card-1 border border-subtle-border focus:border-primary-cyan rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-cyan/50 transition-all"
  placeholder="Enter text"
/>
```

### Badge

```jsx
<span className="inline-block bg-primary-pink text-white px-4 py-2 rounded-full text-sm tracking-wide uppercase">
  New
</span>
```

## Next Steps

1. ✅ Colors configured in Tailwind CSS 4
2. ✅ Nova Flat font loaded and applied
3. ✅ Demo pages created
4. ✅ Documentation complete

### Start Building

Now you can:

- Update existing components with new colors
- Apply Nova Flat typography throughout
- Create new sections using the design system
- Build pages in Sanity Studio with styled components

## Quick Reference

### Most Used Classes

```
Backgrounds: bg-main-bg, bg-section-bg, bg-card-1
Text Colors: text-primary-pink, text-primary-cyan, text-white
Buttons: bg-primary-cta hover:bg-cta-hover
Borders: border-subtle-border hover:border-hover-border
Typography: tracking-wider uppercase text-2xl
Spacing: px-6 py-3, px-8 py-4
Transitions: transition-colors, transition-all
```

---

Your design system is complete and ready to use! 🎨✨
