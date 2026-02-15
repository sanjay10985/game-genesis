# Sanity CMS Implementation Checklist

Use this checklist to track your Sanity CMS integration progress.

## 📋 Initial Setup

### Dependencies

- [ ] Install `next-sanity`
- [ ] Install `@sanity/image-url`
- [ ] Install `@portabletext/react`
- [ ] Install `@sanity/eslint-config-studio` (dev)

### Sanity Project

- [ ] Run `npm create sanity@latest`
- [ ] Choose project name
- [ ] Select dataset (production)
- [ ] Set output path (`./sanity`)
- [ ] Install Sanity Studio dependencies

### Environment Setup

- [ ] Copy `.env.local.example` to `.env.local`
- [ ] Get Sanity project ID from dashboard
- [ ] Add project ID to `.env.local`
- [ ] Set dataset name in `.env.local`
- [ ] Set API version in `.env.local`
- [ ] Generate API token (if needed)
- [ ] Add `.env.local` to `.gitignore`

### CORS Configuration

- [ ] Go to Sanity dashboard (sanity.io/manage)
- [ ] Navigate to API settings
- [ ] Add `http://localhost:3000` to CORS origins
- [ ] Add production domain to CORS origins (when ready)

## 🏗️ Schema Setup

### Documents

- [ ] Review `sanity/schemas/documents/page.js`
- [ ] Review `sanity/schemas/documents/settings.js`
- [ ] Customize fields as needed
- [ ] Test in Sanity Studio

### Objects

- [ ] Review `sanity/schemas/objects/seo.js`
- [ ] Review `sanity/schemas/objects/link.js`
- [ ] Review `sanity/schemas/objects/menuItem.js`
- [ ] Customize as needed

### Sections

- [ ] Review all section schemas in `sanity/schemas/sections/`
- [ ] Customize section fields
- [ ] Add validation rules
- [ ] Test previews in Studio

### Schema Registry

- [ ] Verify all schemas registered in `sanity/schemas/index.js`
- [ ] Check for import errors
- [ ] Test Studio loads without errors

## 🎨 Component Setup

### Library Files

- [ ] Review `src/lib/sanity.client.js`
- [ ] Review `src/lib/sanity.queries.js`
- [ ] Review `src/lib/sanity.image.js`
- [ ] Test queries work

### Section Components

- [ ] Review all components in `src/components/sections/`
- [ ] Customize Tailwind styles
- [ ] Test with sample data
- [ ] Ensure responsive design

### Section Mapper

- [ ] Review `src/components/SectionMapper.js`
- [ ] Verify all sections registered
- [ ] Test dynamic rendering

### Page Routes

- [ ] Review `src/app/[slug]/page.js`
- [ ] Test dynamic routing
- [ ] Verify metadata generation
- [ ] Test ISR revalidation

## 🧪 Testing

### Sanity Studio

- [ ] Run `cd sanity && npm run dev`
- [ ] Studio opens at `http://localhost:3333`
- [ ] No console errors
- [ ] All schemas visible
- [ ] Can create documents

### Content Creation

- [ ] Create global settings document
- [ ] Fill in site title and description
- [ ] Add menu items
- [ ] Add social links
- [ ] Save and publish

### Page Creation

- [ ] Create test page with slug "test"
- [ ] Add title and SEO metadata
- [ ] Add Hero section
- [ ] Add Text Block section
- [ ] Add Feature Grid section
- [ ] Publish page

### Next.js Integration

- [ ] Run `npm run dev`
- [ ] Visit `http://localhost:3000/test`
- [ ] Page renders correctly
- [ ] All sections display
- [ ] Images load properly
- [ ] Links work correctly
- [ ] No console errors

## 🎯 Customization

### Styling

- [ ] Update Tailwind classes in components
- [ ] Match brand colors
- [ ] Adjust spacing and typography
- [ ] Test responsive breakpoints
- [ ] Add dark mode (if needed)

### Additional Sections

- [ ] Identify needed section types
- [ ] Create new section schemas
- [ ] Build React components
- [ ] Register in schema index
- [ ] Add to SectionMapper
- [ ] Test thoroughly

### Custom Fields

- [ ] Add custom fields to existing schemas
- [ ] Update GROQ queries
- [ ] Update components to use new fields
- [ ] Test with sample data

## 🚀 Production Preparation

### Performance

- [ ] Test build: `npm run build`
- [ ] Verify ISR works
- [ ] Check image optimization
- [ ] Test page load times
- [ ] Optimize GROQ queries

### SEO

- [ ] Verify metadata generation
- [ ] Test Open Graph images
- [ ] Create sitemap
- [ ] Add robots.txt
- [ ] Test with SEO tools

### Security

- [ ] API tokens secured
- [ ] Environment variables not committed
- [ ] CORS configured correctly
- [ ] Preview mode secured (if implemented)
- [ ] Validate all user inputs

### Deployment

- [ ] Deploy Sanity Studio: `cd sanity && npm run deploy`
- [ ] Note Studio URL
- [ ] Deploy Next.js to Vercel/hosting
- [ ] Update CORS with production URL
- [ ] Test production site
- [ ] Verify content updates work

## 🔧 Optional Features

### Webhooks

- [ ] Create revalidation API route
- [ ] Set up webhook in Sanity dashboard
- [ ] Configure webhook secret
- [ ] Test automatic revalidation

### Preview Mode

- [ ] Create preview API route
- [ ] Add preview secret to env
- [ ] Update page to support drafts
- [ ] Test preview functionality
- [ ] Add preview exit route

### Form Handling

- [ ] Create contact form API route
- [ ] Implement email sending
- [ ] Add form validation
- [ ] Test form submission
- [ ] Add success/error handling

### Analytics

- [ ] Add analytics tracking
- [ ] Track page views
- [ ] Track form submissions
- [ ] Set up conversion goals

### Search

- [ ] Implement search functionality
- [ ] Create search API route
- [ ] Add search UI
- [ ] Test search results

## 📚 Documentation

### Code Documentation

- [ ] Add comments to complex code
- [ ] Document custom functions
- [ ] Update README with changes
- [ ] Create component documentation

### Content Guidelines

- [ ] Create editor guidelines
- [ ] Document section usage
- [ ] Add image size recommendations
- [ ] Create SEO best practices guide

### Team Onboarding

- [ ] Share Sanity Studio URL
- [ ] Provide login credentials
- [ ] Train team on content creation
- [ ] Document common tasks

## ✅ Final Checks

### Functionality

- [ ] All pages render correctly
- [ ] All sections work as expected
- [ ] Images load and optimize
- [ ] Links navigate properly
- [ ] Forms submit successfully
- [ ] SEO metadata present

### Performance

- [ ] Lighthouse score > 90
- [ ] Images optimized
- [ ] No console errors
- [ ] Fast page loads
- [ ] ISR working

### Accessibility

- [ ] Alt text on all images
- [ ] Proper heading hierarchy
- [ ] Keyboard navigation works
- [ ] Color contrast sufficient
- [ ] Screen reader friendly

### Browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

### Device Testing

- [ ] Desktop
- [ ] Tablet
- [ ] Mobile (iOS)
- [ ] Mobile (Android)

## 🎉 Launch

- [ ] Final content review
- [ ] Backup Sanity content
- [ ] Deploy to production
- [ ] Update DNS (if needed)
- [ ] Monitor for errors
- [ ] Announce launch
- [ ] Celebrate! 🎊

## 📝 Post-Launch

### Monitoring

- [ ] Set up error tracking
- [ ] Monitor performance
- [ ] Track analytics
- [ ] Review user feedback

### Maintenance

- [ ] Schedule content updates
- [ ] Plan feature additions
- [ ] Update dependencies regularly
- [ ] Backup content regularly

### Optimization

- [ ] Review analytics data
- [ ] Optimize slow pages
- [ ] Improve SEO
- [ ] Enhance user experience

---

## Notes

Use this space to track issues, ideas, or custom requirements:

```
[Your notes here]
```

---

**Progress:** **\_** / **\_** tasks completed

**Target Launch Date:** ****\_\_****

**Actual Launch Date:** ****\_\_****
