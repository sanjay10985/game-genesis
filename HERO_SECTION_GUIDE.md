# Hero Section Implementation Guide

## Overview

The hero section has been implemented with a modern, gaming-focused design featuring:

- Fixed header with logo and navigation
- Large, impactful typography with glow effects
- Character images on the right
- Animated scrolling text banner at the bottom
- Diagonal line patterns and accents
- Responsive design for all screen sizes

## Components Created

### 1. Header Component (`src/components/Header.js`)

**Features:**

- Fixed position at top of page
- Semi-transparent background with backdrop blur
- Logo with hover animation
- Desktop and mobile navigation
- Responsive menu toggle

**Usage:**

```jsx
import Header from "@/components/Header";

<Header />;
```

**Customization:**

```jsx
// Update navigation links in Header.js
<Link href="/your-page">Your Link</Link>
```

### 2. Hero Component (`src/components/Hero.js`)

**Features:**

- Full-screen hero section
- Diagonal line background pattern
- Cyan accent line
- Large typography with text effects
- Custom-styled CTA button with clip-path
- Character images with glow effects
- Animated scrolling text banner

**Usage:**

```jsx
import Hero from "@/components/Hero";

<Hero />;
```

## Design Elements

### Typography

#### Main Heading

```jsx
<h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
  <span className="text-primary-pink">Build Iconic Games</span>
</h1>
```

**Features:**

- Pink color with glow effect
- Text shadow for depth
- Webkit text stroke for outline
- Responsive sizing

#### Subheading

```jsx
<h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primary-cyan">
  Igniting Your Game Vision
</h2>
```

**Features:**

- Cyan color
- Slightly smaller than main heading
- Responsive sizing

### CTA Button

**Custom Clip-Path Design:**

```jsx
style={{
  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
}}
```

**Features:**

- Angled corners (cyberpunk style)
- Border on default state
- Filled on hover
- Smooth transitions

**Customization:**

```jsx
// Change button text
<button>Your Custom Text</button>;

// Adjust clip-path for different angles
clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, ...)";
```

### Background Effects

#### Diagonal Lines Pattern

```jsx
<svg>
  <pattern id="diagonal-lines">
    <line stroke="#9CDBDB" strokeDasharray="5,5" />
  </pattern>
</svg>
```

**Features:**

- Subtle diagonal lines
- Dashed pattern
- Cyan color at 30% opacity

#### Accent Line

```jsx
<line x1="100%" y1="0" x2="50%" y2="100%" stroke="#9CDBDB" />
```

**Features:**

- Diagonal line from top-right to bottom-center
- Cyan color
- 50% opacity

#### Glow Effects

```jsx
<div className="bg-primary-cyan/20 rounded-full blur-3xl"></div>
<div className="bg-primary-pink/20 rounded-full blur-3xl"></div>
```

**Features:**

- Soft glow behind characters
- Multiple colored glows
- Heavy blur for atmospheric effect

### Scrolling Text Banner

**Features:**

- Infinite horizontal scroll
- Repeating text items
- Diamond-shaped icons between text
- Border top and bottom

**Text Items:**

- Graphic Art
- Game Visuals
- Game Art Services
- Art for Games
- Game Art
- Visual Game Design
- Creative Game Art
- Concept Art

**Customization:**

```jsx
// Add more text items
<span className="text-white/60 tracking-wider text-lg">Your Text</span>
<div className="w-8 h-8 border border-primary-cyan/50 rotate-45">
  <div className="w-2 h-2 bg-primary-cyan"></div>
</div>
```

**Animation Speed:**

```css
animation: scroll 30s linear infinite;
/* Change 30s to adjust speed */
```

## Responsive Design

### Breakpoints

**Mobile (< 768px):**

- Single column layout
- Smaller text sizes
- Stacked content
- Mobile menu

**Tablet (768px - 1024px):**

- Two column layout starts
- Medium text sizes
- Side-by-side content

**Desktop (> 1024px):**

- Full two column layout
- Large text sizes
- Optimal spacing

### Responsive Classes

```jsx
// Text sizing
text-5xl sm:text-6xl lg:text-7xl xl:text-8xl

// Spacing
space-y-8 lg:space-y-10

// Grid
grid lg:grid-cols-2

// Height
h-[500px] lg:h-[700px]
```

## Assets Required

### 1. Logo (`/public/logo.png`)

- Size: 200x200px
- Format: PNG with transparency
- Usage: Header logo

### 2. Hero Characters (`/public/hero-characters.png`)

- Size: 1200x1400px
- Format: PNG with transparency
- Usage: Right side of hero section

**See `/public/ASSETS_README.md` for detailed asset requirements**

## Color Usage

### Primary Pink (#FF8FA3)

- Main heading
- CTA button
- Glow effects
- Accents

### Primary Cyan (#9CDBDB)

- Subheading
- Diagonal lines
- Border accents
- Scrolling text icons

### Black (#000000)

- Background
- Creates contrast

### White/Gray

- Body text
- Navigation links
- Scrolling text

## Animations

### Scrolling Banner

```css
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
```

**Duration:** 30 seconds
**Easing:** Linear
**Loop:** Infinite

### Hover Effects

- Logo scale on hover
- Button fill on hover
- Link color change on hover
- All with smooth transitions

## Accessibility

### Semantic HTML

- Proper heading hierarchy (h1, h2)
- Nav element for navigation
- Button elements for interactions
- Alt text for images

### Keyboard Navigation

- All interactive elements focusable
- Logical tab order
- Menu toggle accessible

### Screen Readers

- Descriptive alt text
- Aria labels where needed
- Semantic structure

## Performance

### Image Optimization

- Next.js Image component
- Automatic WebP conversion
- Responsive images
- Lazy loading (except priority images)

### CSS Optimization

- Tailwind CSS purging
- Minimal custom CSS
- Hardware-accelerated animations

## Testing Checklist

- [ ] Logo displays correctly
- [ ] Character images load
- [ ] Text is readable on all screen sizes
- [ ] CTA button works and looks correct
- [ ] Scrolling banner animates smoothly
- [ ] Mobile menu toggles properly
- [ ] All links work
- [ ] Hover effects work
- [ ] Page loads quickly
- [ ] No console errors

## Demo Page

Visit the demo page to see the hero section in action:

```
http://localhost:3000/demo
```

## Customization Tips

### Change Colors

Update in `src/app/globals.css`:

```css
--primary-pink: #your-color;
--primary-cyan: #your-color;
```

### Adjust Typography

```jsx
// Change font size
className = "text-6xl"; // to text-7xl, text-8xl, etc.

// Change tracking
className = "tracking-wider"; // to tracking-widest, etc.
```

### Modify Button Style

```jsx
// Change clip-path angles
clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, ...)";

// Change colors
className = "border-primary-cyan text-primary-cyan hover:bg-primary-cyan";
```

### Update Scrolling Text

Edit the text items in `Hero.js`:

```jsx
<span className="text-white/60 tracking-wider text-lg">Your Text</span>
```

## Integration with Sanity CMS

To make this hero section editable in Sanity:

1. Create a hero schema in Sanity
2. Add fields for:
   - Main heading
   - Subheading
   - CTA button text and link
   - Character images
   - Scrolling text items

3. Fetch data in the page component
4. Pass data as props to Hero component

**Example:**

```jsx
export default async function Home() {
  const heroData = await getHeroData();
  return <Hero data={heroData} />;
}
```

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## Known Issues

None currently. If you encounter issues:

1. Check browser console for errors
2. Verify images are in `/public` folder
3. Ensure all dependencies are installed
4. Clear Next.js cache: `rm -rf .next`

---

Your hero section is ready to use! 🚀
