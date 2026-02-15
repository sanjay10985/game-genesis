# Font Setup - Nova Flat

## Overview

Game Genesis uses **Nova Flat** as the primary font throughout the application. Nova Flat is a modern, geometric display font from Google Fonts that gives a futuristic, gaming aesthetic.

## Configuration

### Next.js Font Setup

The font is configured in `src/app/layout.js`:

```javascript
import { Nova_Flat } from "next/font/google";

const novaFlat = Nova_Flat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nova-flat",
  display: "swap",
});
```

### CSS Variables

The font is available as CSS variables in `src/app/globals.css`:

```css
@theme inline {
  --font-sans: var(--font-nova-flat);
  --font-heading: var(--font-nova-flat);
}

body {
  font-family:
    var(--font-nova-flat),
    system-ui,
    -apple-system,
    sans-serif;
}
```

## Usage

### Default Usage

Nova Flat is applied by default to all text elements through the body tag. No additional classes needed:

```jsx
<p>This text uses Nova Flat automatically</p>
<h1>Headings use Nova Flat too</h1>
```

### Explicit Font Classes

You can also use Tailwind's font utilities:

```jsx
<h1 className="font-sans">Uses Nova Flat (default sans)</h1>
```

### Font Weights

Nova Flat only has one weight (400/regular), so all text will use this weight:

```jsx
// These will all use weight 400
<p className="font-normal">Normal text</p>
<p className="font-bold">Bold text (still 400)</p>
<p className="font-semibold">Semibold text (still 400)</p>
```

**Note:** Since Nova Flat only has one weight, using `font-bold` or `font-semibold` won't change the actual weight. For emphasis, consider using:

- Color variations (`text-primary-pink`, `text-primary-cyan`)
- Size variations (`text-xl`, `text-2xl`, etc.)
- Letter spacing (`tracking-wide`, `tracking-wider`)

## Typography Scale

### Recommended Sizes

```jsx
// Headings
<h1 className="text-5xl md:text-6xl">Main Heading</h1>
<h2 className="text-4xl md:text-5xl">Section Heading</h2>
<h3 className="text-3xl md:text-4xl">Subsection</h3>
<h4 className="text-2xl md:text-3xl">Card Title</h4>
<h5 className="text-xl md:text-2xl">Small Heading</h5>

// Body Text
<p className="text-base">Regular body text (16px)</p>
<p className="text-lg">Large body text (18px)</p>
<p className="text-sm">Small text (14px)</p>
<p className="text-xs">Extra small text (12px)</p>
```

## Typography Examples

### Hero Section

```jsx
<section className="bg-main-bg min-h-screen flex items-center justify-center">
  <div className="text-center">
    <h1 className="text-6xl text-primary-pink mb-4 tracking-wide">
      GAME GENESIS
    </h1>
    <p className="text-2xl text-primary-cyan tracking-wider">
      Creating Immersive Experiences
    </p>
  </div>
</section>
```

### Card with Typography

```jsx
<div className="bg-card-1 rounded-lg p-6">
  <h3 className="text-2xl text-primary-pink mb-2 tracking-wide">
    Game Development
  </h3>
  <p className="text-gray-300 text-base leading-relaxed">
    Full-cycle game development from concept to launch
  </p>
</div>
```

### Button Typography

```jsx
<button className="bg-primary-cta text-white px-6 py-3 rounded-lg text-lg tracking-wide uppercase">
  Get Started
</button>
```

## Best Practices

### 1. Use Letter Spacing

Nova Flat looks great with increased letter spacing:

```jsx
<h1 className="tracking-wide">Good spacing</h1>
<h1 className="tracking-wider">Better spacing</h1>
<h1 className="tracking-widest">Maximum spacing</h1>
```

### 2. Use Uppercase for Impact

Nova Flat works well in uppercase for headings and buttons:

```jsx
<h1 className="uppercase tracking-wider">GAME GENESIS</h1>
<button className="uppercase tracking-wide">Play Now</button>
```

### 3. Combine with Colors

Use your brand colors to create emphasis:

```jsx
<h1 className="text-primary-pink tracking-wider">Pink Heading</h1>
<h2 className="text-primary-cyan tracking-wide">Cyan Subheading</h2>
```

### 4. Adjust Line Height

For better readability, adjust line height:

```jsx
<p className="leading-relaxed">Better readability</p>
<p className="leading-loose">Even more space</p>
```

### 5. Use Size Variations

Create hierarchy with size instead of weight:

```jsx
<h1 className="text-5xl text-primary-pink">Main Title</h1>
<h2 className="text-3xl text-primary-cyan">Subtitle</h2>
<p className="text-lg text-gray-300">Body text</p>
```

## Typography Components

### Heading Component Example

```jsx
export function Heading({ children, level = 1, color = "primary-pink" }) {
  const sizes = {
    1: "text-5xl md:text-6xl",
    2: "text-4xl md:text-5xl",
    3: "text-3xl md:text-4xl",
    4: "text-2xl md:text-3xl",
    5: "text-xl md:text-2xl",
  }

  const Tag = `h${level}`

  return (
    <Tag className={`${sizes[level]} text-${color} tracking-wider`}>
      {children}
    </Tag>
  )
}

// Usage
<Heading level={1} color="primary-pink">Welcome</Heading>
<Heading level={2} color="primary-cyan">Subtitle</Heading>
```

## Accessibility

### Ensure Readability

- Minimum font size: 14px (text-sm)
- Use sufficient line height: `leading-relaxed` or `leading-loose`
- Maintain good contrast ratios with background colors

### Responsive Typography

Always use responsive text sizes:

```jsx
// Good - Responsive
<h1 className="text-4xl md:text-5xl lg:text-6xl">Heading</h1>

// Avoid - Fixed size
<h1 className="text-6xl">Heading</h1>
```

## Performance

Nova Flat is loaded via Next.js's optimized font system:

- ✅ Automatic font optimization
- ✅ Zero layout shift with `font-display: swap`
- ✅ Self-hosted for better performance
- ✅ Subset to Latin characters only

## Fallback Fonts

If Nova Flat fails to load, the system falls back to:

1. `system-ui` - System default
2. `-apple-system` - Apple devices
3. `sans-serif` - Generic sans-serif

## Examples in Context

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
        className="text-gray-300 hover:text-primary-cyan tracking-wide"
      >
        HOME
      </a>
      <a
        href="#"
        className="text-gray-300 hover:text-primary-cyan tracking-wide"
      >
        ABOUT
      </a>
      <a
        href="#"
        className="text-gray-300 hover:text-primary-cyan tracking-wide"
      >
        SERVICES
      </a>
    </div>
  </div>
</nav>
```

### Feature Card

```jsx
<div className="bg-card-1 rounded-lg p-6 hover:border-hover-border border border-subtle-border transition-colors">
  <h3 className="text-2xl text-primary-pink mb-3 tracking-wide uppercase">
    3D Art
  </h3>
  <p className="text-gray-300 leading-relaxed">
    Stunning visuals and smooth animations that bring games to life
  </p>
</div>
```

### Call to Action

```jsx
<div className="text-center">
  <h2 className="text-4xl text-primary-cyan mb-6 tracking-wider">
    READY TO START?
  </h2>
  <button className="bg-primary-cta hover:bg-cta-hover text-white px-8 py-4 rounded-lg text-lg tracking-wide uppercase transition-colors">
    Get in Touch
  </button>
</div>
```

## Summary

✅ Nova Flat configured as primary font
✅ Automatic optimization via Next.js
✅ Available globally throughout the app
✅ Works great with uppercase and letter spacing
✅ Single weight (400) - use size and color for hierarchy
✅ Fallback fonts configured for reliability

Your typography system is now ready to use! 🎨
