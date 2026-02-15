# Creating Your First Page in Sanity

## Step-by-Step Guide

### 1. Open Sanity Studio

Visit: http://localhost:3333

### 2. Create Global Settings (Optional but Recommended)

1. Click on **"Settings"** in the left sidebar
2. Fill in:
   - **Site Title**: Game Genesis
   - **Site Description**: Your game development studio
   - **Header Menu**: Add menu items
     - Title: "Home", URL: "/"
     - Title: "About", URL: "/about"
     - Title: "Services", URL: "/services"
   - **Footer Text**: © 2026 Game Genesis. All rights reserved.
   - **Social Links**: Add your social media URLs
   - **Contact Info**: Add email, phone, address
3. Click **"Publish"**

### 3. Create Your Home Page

1. Click on **"Pages"** in the left sidebar
2. Click **"Create new"** (the + button)
3. Fill in the basic information:
   - **Title**: Home
   - **Slug**: Click "Generate" → it will create "home"

### 4. Add SEO Information

Scroll down to the **SEO** section:

- **Meta Title**: Game Genesis - Professional Game Development
- **Meta Description**: We create amazing games and interactive experiences
- **Keywords**: game development, game studio, game design

### 5. Add Sections to Your Page

#### Section 1: Hero Section

1. Click **"Add item"** under Page Sections
2. Select **"Hero Section"**
3. Fill in:
   - **Heading**: Welcome to Game Genesis
   - **Subheading**: We create immersive gaming experiences that captivate players worldwide
   - **Text Alignment**: Center
   - **Section Height**: Large
   - **CTA Buttons**:
     - Button 1: Text: "View Our Work", URL: "/portfolio"
     - Button 2: Text: "Contact Us", URL: "/contact"

#### Section 2: Text Block

1. Click **"Add item"** again
2. Select **"Text Block"**
3. Fill in:
   - **Heading**: About Our Studio
   - **Content**: Write a few paragraphs about your studio

     ```
     Game Genesis is a cutting-edge game development studio dedicated to
     creating unforgettable gaming experiences. With a team of passionate
     developers, designers, and storytellers, we bring innovative ideas to life.

     Our mission is to push the boundaries of interactive entertainment and
     deliver games that resonate with players around the world.
     ```

   - **Text Alignment**: Left
   - **Max Width**: Medium

#### Section 3: Feature Grid

1. Click **"Add item"** again
2. Select **"Feature Grid"**
3. Fill in:
   - **Heading**: Our Services
   - **Subheading**: Everything you need to bring your game to life
   - **Columns**: 3
   - **Features**: Add 3 features

     **Feature 1:**
     - Title: Game Development
     - Description: Full-cycle game development from concept to launch

     **Feature 2:**
     - Title: 3D Art & Animation
     - Description: Stunning visuals and smooth animations that bring games to life

     **Feature 3:**
     - Title: Game Design
     - Description: Engaging gameplay mechanics and compelling narratives

#### Section 4: Contact Form

1. Click **"Add item"** again
2. Select **"Contact Form"**
3. Fill in:
   - **Heading**: Get In Touch
   - **Subheading**: Have a project in mind? Let's talk!
   - **Submit Button Text**: Send Message
   - **Success Message**: Thank you! We'll get back to you soon.
   - **Show Contact Info**: Yes
   - Keep the default fields (Name, Email, Message)

### 6. Publish Your Page

1. Click the **"Publish"** button in the bottom right
2. Wait for the success message

### 7. View Your Page

1. Go to: http://localhost:3000
2. Your home page should now display with all the sections you created!

## Creating Additional Pages

### Example: About Page

1. Create a new page with slug "about"
2. Add sections like:
   - Hero with team photo
   - Text Block with company history
   - Portfolio Grid with past projects
   - Team member profiles

### Example: Services Page

1. Create a new page with slug "services"
2. Add sections like:
   - Hero
   - Service List with all your offerings
   - Feature Grid with benefits
   - Contact Form

### Example: Portfolio Page

1. Create a new page with slug "portfolio"
2. Add sections like:
   - Hero
   - Portfolio Grid with your projects
   - Text Block with case studies

## Tips

- **Preview as you go**: The Sanity Studio shows a preview on the right
- **Reorder sections**: Drag and drop sections to reorder them
- **Delete sections**: Click the trash icon to remove a section
- **Duplicate sections**: Use the duplicate button to copy a section
- **Save drafts**: Your work is auto-saved as a draft
- **Publish when ready**: Only published content appears on your site

## Troubleshooting

**Page not showing?**

- Make sure you clicked "Publish" (not just save)
- Wait 60 seconds for ISR to update
- Refresh your browser
- Check the slug matches the URL

**Images not loading?**

- Make sure images are uploaded in Sanity
- Check that the image field is filled
- Verify CORS is configured (we already did this)

**Sections not rendering?**

- Check browser console for errors
- Verify all required fields are filled
- Make sure the section type is registered in SectionMapper.js

## Next Steps

Once your home page is working:

1. Create more pages (About, Services, Portfolio, Contact)
2. Customize the styling in the component files
3. Add your own images and content
4. Set up form submission for the contact form
5. Deploy to production!

---

Need help? Check the documentation files:

- QUICK_REFERENCE.md
- CODE_EXAMPLES.md
- SANITY_BEST_PRACTICES.md
