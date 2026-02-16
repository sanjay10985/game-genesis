# Sanity Studio Deployment Guide

## Overview

Your Next.js frontend is deployed on Vercel. Now we'll deploy Sanity Studio so your team can manage content from anywhere.

## Deployment Options

### Option 1: Deploy to Sanity's Hosting (Recommended - Free & Easy)

Sanity provides free hosting for your Studio at `your-studio-name.sanity.studio`

### Option 2: Deploy to Vercel (Alternative)

Host Studio alongside your Next.js app

---

## Option 1: Deploy to Sanity Hosting (RECOMMENDED)

### Step 1: Configure CORS for Production

First, add your production domain to Sanity's CORS settings:

```bash
cd sanity
npx sanity cors add https://your-vercel-domain.vercel.app --credentials
```

Replace `your-vercel-domain.vercel.app` with your actual Vercel domain.

If you have a custom domain:

```bash
npx sanity cors add https://yourdomain.com --credentials
```

### Step 2: Deploy Sanity Studio

From the `sanity` directory, run:

```bash
cd sanity
npm run deploy
```

This will:

1. Build your Studio
2. Upload it to Sanity's hosting
3. Give you a URL like: `https://game-genesis.sanity.studio`

**You'll be prompted to:**

- Choose a hostname (e.g., `game-genesis`)
- Confirm the deployment

### Step 3: Access Your Deployed Studio

After deployment, you can access your Studio at:

```
https://your-chosen-hostname.sanity.studio
```

### Step 4: Update Environment Variables on Vercel

Your Next.js app is already configured, but verify these environment variables are set in Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add/verify these variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=yzpvyl9n
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

4. Redeploy your Vercel app if you added new variables

---

## Option 2: Deploy Studio to Vercel

If you prefer to host Studio on Vercel (e.g., at `yourdomain.com/studio`):

### Step 1: Create Vercel Configuration

Create `sanity/vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

### Step 2: Update Sanity package.json

Add build script in `sanity/package.json`:

```json
{
  "scripts": {
    "dev": "sanity dev",
    "start": "sanity start",
    "build": "sanity build",
    "deploy": "sanity deploy",
    "vercel-build": "sanity build"
  }
}
```

### Step 3: Deploy to Vercel

1. Create a new Vercel project for Sanity Studio
2. Connect your repository
3. Set root directory to `sanity`
4. Deploy

### Step 4: Configure CORS

Add your Studio URL to CORS:

```bash
cd sanity
npx sanity cors add https://your-studio.vercel.app --credentials
```

---

## Post-Deployment Checklist

### ✅ Verify CORS Settings

Check your CORS configuration:

```bash
cd sanity
npx sanity cors list
```

You should see:

- `http://localhost:3000` (for local development)
- `https://your-vercel-domain.vercel.app` (your production frontend)
- Your Studio URL (if deployed separately)

### ✅ Test Studio Access

1. Visit your deployed Studio URL
2. Log in with your Sanity account
3. Try creating/editing content
4. Verify changes appear on your production site

### ✅ Configure API Token (Optional)

For preview mode or ISR, create an API token:

1. Go to https://www.sanity.io/manage
2. Select your project (`yzpvyl9n`)
3. Go to **API** → **Tokens**
4. Click **Add API token**
5. Name it (e.g., "Production Read Token")
6. Set permissions to **Viewer** (read-only)
7. Copy the token

Add to Vercel environment variables:

```
SANITY_API_TOKEN=your_token_here
```

### ✅ Set Up Webhooks (Optional)

For automatic revalidation when content changes:

1. In Sanity dashboard, go to **API** → **Webhooks**
2. Click **Create webhook**
3. Set URL to: `https://your-vercel-domain.vercel.app/api/revalidate`
4. Select dataset: `production`
5. Save

Then create the API route in your Next.js app (see below).

---

## Quick Commands Reference

### Deploy Studio to Sanity Hosting

```bash
cd sanity
npm run deploy
```

### Add CORS Origin

```bash
cd sanity
npx sanity cors add https://yourdomain.com --credentials
```

### List CORS Origins

```bash
cd sanity
npx sanity cors list
```

### Remove CORS Origin

```bash
cd sanity
npx sanity cors delete https://old-domain.com
```

### Check Sanity Project Info

```bash
cd sanity
npx sanity projects list
```

---

## Troubleshooting

### Issue: "CORS Error" when accessing Studio

**Solution:** Add your domain to CORS:

```bash
cd sanity
npx sanity cors add https://your-domain.com --credentials
```

### Issue: Changes not appearing on production site

**Solutions:**

1. Check if ISR revalidation is set (see `revalidate` in page components)
2. Set up webhooks for automatic revalidation
3. Manually redeploy Vercel app
4. Clear Vercel cache

### Issue: "Project not found" error

**Solution:** Verify environment variables in Vercel match your Sanity project ID:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=yzpvyl9n
```

### Issue: Studio loads but can't save content

**Solutions:**

1. Check you're logged in to Sanity
2. Verify your Sanity account has write permissions
3. Check browser console for errors

---

## Optional: Set Up Revalidation Webhook

Create `src/app/api/revalidate/route.js`:

```javascript
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    // Verify webhook secret (optional but recommended)
    const secret = request.headers.get("sanity-webhook-secret");
    if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // Revalidate all pages or specific paths
    revalidatePath("/", "layout");

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating", error: err.message },
      { status: 500 },
    );
  }
}
```

Add to Vercel environment variables:

```
SANITY_WEBHOOK_SECRET=your_random_secret_string
```

---

## Your Current Configuration

- **Project ID:** `yzpvyl9n`
- **Dataset:** `production`
- **Studio Title:** Game Genesis
- **Local Studio:** http://localhost:3333
- **Frontend (Vercel):** Your Vercel domain

---

## Next Steps

1. **Deploy Studio:** Run `cd sanity && npm run deploy`
2. **Configure CORS:** Add your Vercel domain
3. **Test:** Access Studio and create content
4. **Optional:** Set up webhooks for auto-revalidation
5. **Share:** Give team members access via Sanity dashboard

---

## Team Access

To add team members:

1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to **Members**
4. Click **Invite members**
5. Enter email addresses
6. Set permissions (Administrator, Editor, or Viewer)

---

## Useful Links

- **Sanity Dashboard:** https://www.sanity.io/manage
- **Your Project:** https://www.sanity.io/manage/project/yzpvyl9n
- **Sanity Docs:** https://www.sanity.io/docs
- **Deployment Docs:** https://www.sanity.io/docs/deployment
