# Quick Guide: Adding Your Images

## Step 1: Prepare Your Images

You need 2 images from your design:

### Image 1: Logo

- **Filename**: `logo.png`
- **What to extract**: The circular GameGenesis logo from the header
- **Size**: Save at 200x200px or larger
- **Format**: PNG with transparent background

### Image 2: Hero Characters

- **Filename**: `hero-characters.png`
- **What to extract**: The two game characters on the right side
- **Size**: Save at 1200x1400px or larger (portrait orientation)
- **Format**: PNG with transparent background

## Step 2: Add Images to Project

1. Open your project folder
2. Navigate to the `public` folder
3. Copy your images into the `public` folder:
   ```
   public/
   ├── logo.png              ← Your logo here
   ├── hero-characters.png   ← Your characters here
   ```

## Step 3: Verify Images

1. Make sure filenames match exactly:
   - `logo.png` (not Logo.png or logo.PNG)
   - `hero-characters.png` (not hero_characters.png)

2. Check file sizes:
   - Logo should be under 100KB
   - Characters should be under 500KB
   - Compress if needed using tools like TinyPNG

## Step 4: View Your Hero Section

1. Make sure your dev server is running:

   ```bash
   npm run dev
   ```

2. Visit the demo page:

   ```
   http://localhost:3000/demo
   ```

3. You should see:
   - ✅ Logo in the header
   - ✅ Characters on the right side
   - ✅ All text and effects

## Troubleshooting

### Images Not Showing?

**Check 1: Filenames**

```bash
# In your terminal, check if files exist:
ls public/logo.png
ls public/hero-characters.png
```

**Check 2: Browser Console**

- Open browser DevTools (F12)
- Check Console tab for 404 errors
- Look for image loading errors

**Check 3: Restart Server**

```bash
# Stop the server (Ctrl+C)
# Start again
npm run dev
```

**Check 4: Clear Cache**

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Images Look Blurry?

- Use higher resolution images (2x the display size)
- Logo: 200x200px minimum
- Characters: 1200x1400px minimum

### Images Have White Background?

- Re-export as PNG with transparency
- Use image editing software to remove background
- Or use online tools like remove.bg

## Alternative: Use Placeholder Images

If you don't have the images yet, you can use placeholders:

1. Visit https://placehold.co/
2. Generate placeholder images:
   - Logo: https://placehold.co/200x200/FF8FA3/white?text=Logo
   - Characters: https://placehold.co/1200x1400/9CDBDB/white?text=Characters

3. Download and rename them to match required filenames

## Next Steps

Once images are added:

1. ✅ View demo page
2. ✅ Check mobile responsiveness
3. ✅ Test all interactions
4. ✅ Customize text and colors as needed

---

Need help? Check HERO_SECTION_GUIDE.md for detailed documentation.
