# Sanity CMS Installation Steps

Follow these steps to integrate Sanity CMS into your Next.js project.

## Step 1: Install Dependencies

In your project root, run:

```bash
npm install next-sanity @sanity/image-url @portabletext/react
npm install --save-dev @sanity/eslint-config-studio
```

## Step 2: Initialize Sanity Studio

Create a new Sanity project:

```bash
npm create sanity@latest
```

When prompted:

- **Create new project?** Yes
- **Project name:** Game Genesis (or your preference)
- **Use default dataset?** Yes (or choose custom name)
- **Project output path:** `./sanity`
- **Select project template:** Clean project with no predefined schemas

This creates a `sanity` folder with the Studio configuration.

## Step 3: Install Sanity Studio Dependencies

```bash
cd sanity
npm install
cd ..
```

## Step 4: Set Up Environment Variables

1. Copy the example environment file:

```bash
cp .env.local.example .env.local
```

2. Get your Sanity project ID:

   - Open `sanity/sanity.cli.js`
   - Copy the `projectId` value
   - Or visit https://sanity.io/manage

3. Update `.env.local` with your values:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

## Step 5: Configure CORS for Sanity

1. Go to https://sanity.io/manage
2. Select your project
3. Go to **API** settings
4. Add CORS origins:
   - `http://localhost:3000` (for development)
   - Your production domain (when deployed)

## Step 6: Run Sanity Studio

In a new terminal window:

```bash
cd sanity
npm run dev
```

Sanity Studio will open at `http://localhost:3333`

## Step 7: Create Initial Content

1. Open Sanity Studio at `http://localhost:3333`
2. Go to **Settings** and create your global settings
3. Create a new **Page**:
   - Title: "Home"
   - Slug: "home"
   - Add sections (Hero, Text Block, Feature Grid, etc.)
   - Fill in SEO fields
   - Publish

## Step 8: Update Next.js Home Page (Optional)

If you want to use Sanity for your home page, update `src/app/page.js`:

```javascript
import { getPageBySlug } from "@/lib/sanity.queries";
import SectionMapper from "@/components/SectionMapper";

export default async function Home() {
  const page = await getPageBySlug("home");

  if (!page) {
    return <div>Home page not found in Sanity</div>;
  }

  return (
    <main>
      <SectionMapper sections={page.sections} />
    </main>
  );
}

export const revalidate = 60;
```

## Step 9: Run Next.js Development Server

In your main project directory:

```bash
npm run dev
```

Your Next.js app will run at `http://localhost:3000`

## Step 10: Test the Integration

1. Create a test page in Sanity Studio with slug "test"
2. Add some sections (Hero, Text Block, etc.)
3. Publish the page
4. Visit `http://localhost:3000/test` in your browser
5. You should see your Sanity content rendered

## Troubleshooting

### "Project ID not found" error

- Make sure `.env.local` has the correct `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Restart your Next.js dev server after changing environment variables

### CORS errors

- Add your localhost and production URLs to CORS origins in Sanity dashboard
- Make sure the URLs match exactly (including http/https and port)

### Images not loading

- Check that `@sanity/image-url` is installed
- Verify your Sanity project ID is correct
- Ensure images are published in Sanity Studio

### Sections not rendering

- Check browser console for errors
- Verify section type names match between schema and component mapper
- Ensure all required fields are filled in Sanity Studio

## Next Steps

1. **Customize Schemas**: Modify section schemas in `sanity/schemas/sections/` to match your needs
2. **Style Components**: Update Tailwind classes in `src/components/sections/` for your design
3. **Add More Sections**: Create new section types by:
   - Adding schema in `sanity/schemas/sections/`
   - Creating component in `src/components/sections/`
   - Registering in `sanity/schemas/index.js`
   - Adding to `src/components/SectionMapper.js`
4. **Deploy Sanity Studio**: Run `cd sanity && npm run deploy`
5. **Set Up Preview Mode**: Implement draft content preview for editors
6. **Add Form Handling**: Implement contact form submission logic

## Useful Commands

```bash
# Run Sanity Studio locally
cd sanity && npm run dev

# Deploy Sanity Studio
cd sanity && npm run deploy

# Run Next.js dev server
npm run dev

# Build Next.js for production
npm run build

# Start Next.js production server
npm start
```

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Portable Text](https://github.com/portabletext/react-portabletext)
