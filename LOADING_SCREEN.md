# Loading Screen Implementation

## Overview

A smooth, animated loading screen that displays on the first page load of each session.

## Features

### Visual Elements

- **Logo Animation** - Pulsing logo with floating effect
- **Glow Effects** - Radial gradient glow behind logo using brand colors
- **Progress Bar** - Animated gradient progress bar (Pink to Cyan)
- **Text Animations** - Smooth fade-in and slide-up effects
- **Background** - Subtle gradient background

### Animations

1. **Logo Pulse** - Gentle scale animation (2s loop)
2. **Logo Float** - Vertical floating motion (3s loop)
3. **Glow Pulse** - Expanding/contracting glow effect
4. **Progress Bar** - Gradient shift animation with shimmer effect
5. **Fade Out** - Smooth exit animation after 2.5s
6. **Text Blink** - Subtle opacity animation on loading text

### Smart Loading Behavior

- Shows only on **first load** per session
- Uses `sessionStorage` to track if user has already seen it
- Subsequent page navigations skip the loading screen
- Resets when browser tab/window is closed

## Technical Details

### Duration

- **Progress Animation**: ~2.5 seconds
- **Fade Out**: 0.6 seconds
- **Total Display Time**: ~3 seconds

### Progress Simulation

- Starts at 0%
- Increments randomly (0-15% per step)
- Updates every 150ms
- Caps at 100%

### Colors Used

- Primary Pink (#FF8FA3) - Logo glow, progress bar
- Primary Cyan (#9CDBDB) - Glow effects, progress bar
- Black gradient background
- White text with opacity variations

## Files Created/Modified

### Created:

- `src/components/LoadingScreen.js` - Main loading screen component
- `LOADING_SCREEN.md` - This documentation

### Modified:

- `src/app/layout.js` - Added LoadingScreen component
- `src/app/globals.css` - Added loading screen styles and animations

## Customization Options

### Change Duration

In `LoadingScreen.js`:

```javascript
// Change total display time (default: 2500ms)
setTimeout(() => {
  setIsLoading(false);
  sessionStorage.setItem("hasLoadedBefore", "true");
}, 2500); // Change this value
```

### Change Progress Speed

```javascript
// Change progress update interval (default: 150ms)
const progressInterval = setInterval(() => {
  setProgress((prev) => {
    if (prev >= 100) return 100;
    return prev + Math.random() * 15; // Change increment amount
  });
}, 150); // Change interval
```

### Disable Session Storage (Show Every Time)

Remove or comment out these lines:

```javascript
const hasLoaded = sessionStorage.getItem("hasLoadedBefore");
if (hasLoaded) {
  setIsLoading(false);
  return;
}
```

### Change Loading Text

In `LoadingScreen.js`:

```javascript
<p className="loading-text">Loading Experience...</p>
// Change to your preferred text
```

## CSS Classes

All styles are in `globals.css`:

- `.loading-screen` - Main container
- `.loading-content` - Content wrapper
- `.loading-logo` - Logo container
- `.logo-glow` - Glow effect
- `.logo-image` - Logo image
- `.loading-title` - Site title
- `.loading-bar-container` - Progress bar container
- `.loading-bar-fill` - Progress bar fill
- `.loading-text` - Loading text

## Animations Defined

1. `fadeOut` - Screen exit animation
2. `slideUp` - Content entrance
3. `pulse` - Logo scale pulse
4. `glowPulse` - Glow expansion
5. `float` - Logo vertical float
6. `fadeInText` - Text fade-in
7. `shimmer` - Progress bar shimmer
8. `gradientShift` - Progress bar gradient animation
9. `blink` - Text opacity blink

## Browser Compatibility

- Uses `sessionStorage` (supported in all modern browsers)
- CSS animations (widely supported)
- Next.js Image component for optimized loading
- Responsive design for mobile devices

## Performance

- Minimal JavaScript (only runs once per session)
- CSS animations (GPU accelerated)
- No external dependencies
- Optimized image loading with Next.js Image

## Testing

To test the loading screen:

1. Open your site in a new tab/window
2. You'll see the loading screen
3. Navigate to other pages - no loading screen
4. Close the tab and reopen - loading screen appears again

To force it to show every time during development:

- Open DevTools → Application → Storage → Session Storage
- Delete the `hasLoadedBefore` key
- Refresh the page
