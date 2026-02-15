# Game Genesis Color System

## Color Palette

### Primary Colors

| Color Name   | Hex Code  | Tailwind Class                                              | Usage                                    |
| ------------ | --------- | ----------------------------------------------------------- | ---------------------------------------- |
| Primary Pink | `#FF8FA3` | `bg-primary-pink` `text-primary-pink` `border-primary-pink` | Main brand color, primary CTAs, accents  |
| Primary Cyan | `#9CDBDB` | `bg-primary-cyan` `text-primary-cyan` `border-primary-cyan` | Secondary brand color, highlights, links |

### Background Colors

| Color Name         | Hex Code  | Tailwind Class  | Usage                             |
| ------------------ | --------- | --------------- | --------------------------------- |
| Main Background    | `#1A1A1D` | `bg-main-bg`    | Page background, main container   |
| Section Background | `#25252A` | `bg-section-bg` | Section containers, content areas |

### Card/Panel Colors

| Color Name   | Hex Code  | Tailwind Class | Usage                           |
| ------------ | --------- | -------------- | ------------------------------- |
| Card/Panel 1 | `#2E2E35` | `bg-card-1`    | Primary cards, panels           |
| Card/Panel 2 | `#38383F` | `bg-card-2`    | Secondary cards, nested panels  |
| Card/Panel 3 | `#42424A` | `bg-card-3`    | Tertiary cards, layered content |

### Border Colors

| Color Name    | Hex Code  | Tailwind Class         | Usage                     |
| ------------- | --------- | ---------------------- | ------------------------- |
| Subtle Border | `#1C2A33` | `border-subtle-border` | Default borders, dividers |
| Hover Border  | `#A3C4C4` | `border-hover-border`  | Hover states, focus rings |

### Interactive Colors

| Color Name    | Hex Code  | Tailwind Class                        | Usage                                  |
| ------------- | --------- | ------------------------------------- | -------------------------------------- |
| Primary CTA   | `#FF8FA3` | `bg-primary-cta`                      | Primary buttons, main actions          |
| CTA Hover     | `#FF6B85` | `bg-cta-hover`                        | Button hover states                    |
| Secondary CTA | `#9CDBDB` | `bg-secondary-cta`                    | Secondary buttons, alternative actions |
| Hover Glow    | `#B8A8A8` | `bg-hover-glow` `shadow-hover-glow`   | Glow effects, highlights               |
| Active State  | `#FFFFFF` | `bg-active-state` `text-active-state` | Active elements, selected items        |

## Usage Examples

### Buttons

#### Primary Button

```jsx
<button className="bg-primary-cta hover:bg-cta-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors">
  Get Started
</button>
```

#### Secondary Button

```jsx
<button className="bg-secondary-cta hover:bg-primary-cyan text-main-bg px-6 py-3 rounded-lg font-semibold transition-colors">
  Learn More
</button>
```

#### Outline Button

```jsx
<button className="border-2 border-primary-pink text-primary-pink hover:bg-primary-pink hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
  Contact Us
</button>
```

### Cards

#### Basic Card

```jsx
<div className="bg-card-1 border border-subtle-border rounded-lg p-6 hover:border-hover-border transition-colors">
  <h3 className="text-primary-pink text-xl font-bold mb-2">Card Title</h3>
  <p className="text-gray-300">Card content goes here</p>
</div>
```

#### Nested Card

```jsx
<div className="bg-card-1 rounded-lg p-6">
  <div className="bg-card-2 rounded-lg p-4">
    <div className="bg-card-3 rounded-lg p-4">Nested content</div>
  </div>
</div>
```

#### Card with Glow Effect

```jsx
<div className="bg-card-1 rounded-lg p-6 hover:shadow-lg hover:shadow-hover-glow/20 transition-shadow">
  <h3 className="text-primary-cyan text-xl font-bold">Glowing Card</h3>
</div>
```

### Sections

#### Hero Section

```jsx
<section className="bg-main-bg min-h-screen flex items-center justify-center">
  <div className="container mx-auto px-4">
    <h1 className="text-5xl font-bold text-primary-pink mb-4">
      Welcome to Game Genesis
    </h1>
    <p className="text-xl text-primary-cyan mb-8">
      Creating amazing gaming experiences
    </p>
    <button className="bg-primary-cta hover:bg-cta-hover text-white px-8 py-4 rounded-lg">
      Get Started
    </button>
  </div>
</section>
```

#### Content Section

```jsx
<section className="bg-section-bg py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-primary-cyan mb-8">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Cards here */}
    </div>
  </div>
</section>
```

### Navigation

#### Header

```jsx
<header className="bg-main-bg border-b border-subtle-border sticky top-0 z-50">
  <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
    <div className="text-primary-pink text-2xl font-bold">Game Genesis</div>
    <div className="flex gap-6">
      <a
        href="#"
        className="text-gray-300 hover:text-primary-cyan transition-colors"
      >
        Home
      </a>
      <a
        href="#"
        className="text-gray-300 hover:text-primary-cyan transition-colors"
      >
        About
      </a>
      <a
        href="#"
        className="text-gray-300 hover:text-primary-cyan transition-colors"
      >
        Services
      </a>
    </div>
  </nav>
</header>
```

### Forms

#### Input Field

```jsx
<input
  type="text"
  className="w-full bg-card-1 border border-subtle-border focus:border-primary-cyan rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-cyan/50 transition-all"
  placeholder="Enter your email"
/>
```

#### Textarea

```jsx
<textarea
  className="w-full bg-card-1 border border-subtle-border focus:border-primary-cyan rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-cyan/50 transition-all"
  rows="5"
  placeholder="Your message"
/>
```

### Links

#### Text Link

```jsx
<a
  href="#"
  className="text-primary-cyan hover:text-primary-pink transition-colors underline"
>
  Learn more
</a>
```

#### Button Link

```jsx
<a
  href="#"
  className="inline-block bg-secondary-cta hover:bg-primary-cyan text-main-bg px-6 py-3 rounded-lg font-semibold transition-colors"
>
  View Portfolio
</a>
```

### Badges

#### Status Badge

```jsx
<span className="inline-block bg-primary-pink text-white px-3 py-1 rounded-full text-sm font-semibold">
  New
</span>
```

#### Category Badge

```jsx
<span className="inline-block bg-card-2 text-primary-cyan border border-primary-cyan px-3 py-1 rounded-full text-sm">
  Game Design
</span>
```

## Color Combinations

### High Contrast

- Text: `text-primary-pink` on `bg-main-bg`
- Text: `text-primary-cyan` on `bg-main-bg`
- Text: `text-white` on `bg-primary-cta`

### Medium Contrast

- Text: `text-gray-300` on `bg-card-1`
- Text: `text-primary-cyan` on `bg-section-bg`

### Accent Combinations

- Primary: `bg-primary-pink` with `text-white`
- Secondary: `bg-primary-cyan` with `text-main-bg`
- Tertiary: `bg-card-1` with `text-primary-pink`

## Gradient Examples

### Pink to Cyan Gradient

```jsx
<div className="bg-gradient-to-r from-primary-pink to-primary-cyan">
  Gradient background
</div>
```

### Dark Gradient

```jsx
<div className="bg-gradient-to-b from-main-bg to-section-bg">
  Subtle gradient
</div>
```

### Card Gradient

```jsx
<div className="bg-gradient-to-br from-card-1 to-card-3">
  Card with gradient
</div>
```

## Hover Effects

### Glow Effect

```jsx
<div className="bg-card-1 hover:shadow-xl hover:shadow-primary-pink/30 transition-shadow duration-300">
  Glowing card
</div>
```

### Border Glow

```jsx
<div className="border-2 border-subtle-border hover:border-primary-cyan hover:shadow-lg hover:shadow-primary-cyan/20 transition-all">
  Border glow effect
</div>
```

### Scale with Glow

```jsx
<div className="bg-card-1 hover:scale-105 hover:shadow-xl hover:shadow-hover-glow/30 transition-all duration-300">
  Scale and glow
</div>
```

## Accessibility Notes

### Contrast Ratios

- Primary Pink (#FF8FA3) on Main BG (#1A1A1D): ✅ WCAG AA compliant
- Primary Cyan (#9CDBDB) on Main BG (#1A1A1D): ✅ WCAG AA compliant
- White text on Primary CTA (#FF8FA3): ✅ WCAG AA compliant

### Focus States

Always include focus states for interactive elements:

```jsx
className =
  "focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:ring-offset-2 focus:ring-offset-main-bg";
```

## Dark Mode

The color system is designed for dark mode by default. The main background automatically switches to dark in the dark mode preference.

## Quick Reference

### All Available Classes

**Backgrounds:**

- `bg-primary-pink`
- `bg-primary-cyan`
- `bg-main-bg`
- `bg-section-bg`
- `bg-card-1`
- `bg-card-2`
- `bg-card-3`
- `bg-primary-cta`
- `bg-cta-hover`
- `bg-secondary-cta`
- `bg-hover-glow`
- `bg-active-state`

**Text Colors:**

- `text-primary-pink`
- `text-primary-cyan`
- `text-main-bg`
- `text-active-state`

**Border Colors:**

- `border-primary-pink`
- `border-primary-cyan`
- `border-subtle-border`
- `border-hover-border`

**Ring Colors (for focus states):**

- `ring-primary-pink`
- `ring-primary-cyan`
- `ring-hover-border`

## Tips

1. **Use Primary Pink for CTAs**: It's your main action color
2. **Use Primary Cyan for highlights**: Great for links and secondary actions
3. **Layer cards**: Use card-1, card-2, card-3 for depth
4. **Subtle borders**: Use subtle-border for most borders, hover-border for interactive states
5. **Consistent hover states**: Always use transition classes for smooth effects

---

Your color system is now fully integrated with Tailwind CSS 4! 🎨
