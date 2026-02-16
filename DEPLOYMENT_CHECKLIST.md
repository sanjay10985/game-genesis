# Sanity Deployment Checklist

## Quick Start (5 Minutes)

### Step 1: Deploy Sanity Studio

```bash
cd sanity
npm run deploy
```

When prompted:

- Choose a hostname (e.g., `game-genesis`)
- Confirm deployment

Your Studio will be available at: `https://your-hostname.sanity.studio`

---

### Step 2: Configure CORS

Add your Vercel production domain:

```bash
cd sanity
npx sanity cors add https://your-vercel-domain.vercel.app --credentials
```

If you have a custom domain, add that too:

```bash
npx sanity cors add https://yourdomain.com --credentials
```

---

### Step 3: Verify Vercel Environment Variables

Go to your Vercel project → Settings → Environment Variables

Ensure these are set:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=yzpvyl9n
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

If you added new variables, redeploy your Vercel app.

---

### Step 4: Test Your Deployment

1. ✅ Visit your deployed Studio URL
2. ✅ Log in with your Sanity account
3. ✅ Create or edit a page
4. ✅ Publish the changes
5. ✅ Wait 60 seconds (ISR revalidation time)
6. ✅ Check your production site - changes should appear

---

## Optional: Set Up Webhooks (Instant Updates)

### Step 1: Add Webhook Secret to Vercel

In Vercel → Settings → Environment Variables, add:

```
SANITY_WEBHOOK_SECRET=your_random_secret_string_here
```

Generate a random secret:

```bash
openssl rand -base64 32
```

### Step 2: Create Webhook in Sanity

1. Go to https://www.sanity.io/manage/project/yzpvyl9n
2. Navigate to **API** → **Webhooks**
3. Click **Create webhook**
4. Configure:
   - **Name:** Production Revalidation
   - **URL:** `https://your-vercel-domain.vercel.app/api/revalidate`
   - **Dataset:** production
   - **Trigger on:** Create, Update, Delete
   - **HTTP method:** POST
   - **Secret:** (paste your SANITY_WEBHOOK_SECRET)
5. Save

Now content updates will trigger instant revalidation!

---

## Troubleshooting

### ❌ CORS Error

**Solution:** Add your domain to CORS

```bash
cd sanity
npx sanity cors add https://your-domain.com --credentials
```

### ❌ Changes Not Appearing

**Solutions:**

1. Wait 60 seconds (ISR revalidation)
2. Set up webhooks for instant updates
3. Manually redeploy Vercel

### ❌ Can't Access Studio

**Solution:** Check you're logged in to Sanity and have permissions

---

## Team Access

To add team members:

1. Go to https://www.sanity.io/manage/project/yzpvyl9n
2. Click **Members** → **Invite members**
3. Enter email addresses
4. Set permissions (Administrator/Editor/Viewer)

---

## Useful Commands

```bash
# Deploy Studio
cd sanity && npm run deploy

# List CORS origins
cd sanity && npx sanity cors list

# Add CORS origin
cd sanity && npx sanity cors add https://domain.com --credentials

# Check project info
cd sanity && npx sanity projects list
```

---

## Your Configuration

- **Project ID:** yzpvyl9n
- **Dataset:** production
- **Studio Title:** Game Genesis
- **Revalidation:** 60 seconds (ISR)
- **API Route:** /api/revalidate (created)

---

## Done! 🎉

Your Sanity Studio is now deployed and ready for production use.

**Studio URL:** https://your-hostname.sanity.studio
**Frontend URL:** Your Vercel domain
**Dashboard:** https://www.sanity.io/manage/project/yzpvyl9n
