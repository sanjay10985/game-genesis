import { client } from "./sanity.client";

// GROQ query to fetch a page by slug with all sections
export const pageQuery = `
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    seo {
      metaTitle,
      metaDescription,
      ogImage,
      keywords,
      noIndex
    },
    sections[] {
      _type,
      _key,
      
      // Hero fields
      _type == "hero" => {
        heading,
        subheading,
        ctaText,
        ctaLink,
        characterImage,
        backgroundImage,
        scrollingTexts
      },
      
      // Text Block fields
      _type == "textBlock" => {
        heading,
        content,
        alignment,
        maxWidth
      },
      
      // Image Block fields
      _type == "imageBlock" => {
        image,
        alt,
        caption,
        size,
        link {
          text,
          url,
          page->{slug},
          openInNewTab
        }
      },
      
      // Feature Grid fields
      _type == "featureGrid" => {
        heading,
        subheading,
        features[] {
          icon,
          title,
          description,
          link {
            text,
            url,
            page->{slug},
            openInNewTab
          }
        },
        columns
      },
      
      // Portfolio Grid fields
      _type == "portfolioGrid" => {
        heading,
        subheading,
        items[] {
          image,
          title,
          category,
          description,
          link {
            text,
            url,
            page->{slug},
            openInNewTab
          }
        },
        columns
      },
      
      // Service List fields
      _type == "serviceList" => {
        heading,
        subheading,
        services[] {
          icon,
          title,
          description,
          features,
          price,
          link {
            text,
            url,
            page->{slug},
            openInNewTab
          }
        },
        layout
      },
      
      // Services Showcase fields
      _type == "servicesShowcase" => {
        sectionTitle,
        services[] {
          _key,
          number,
          label,
          title,
          description,
          buttonText,
          buttonLink,
          image
        }
      },
      
      // News List fields
      _type == "newsList" => {
        heading,
        subheading,
        articles[] {
          image,
          title,
          excerpt,
          date,
          author,
          category,
          link {
            text,
            url,
            page->{slug},
            openInNewTab
          }
        },
        layout
      },
      
      // Contact Form fields
      _type == "contactForm" => {
        heading,
        subheading,
        fields[] {
          name,
          label,
          type,
          placeholder,
          required,
          options
        },
        submitButtonText,
        successMessage,
        showContactInfo
      }
    },
    publishedAt
  }
`;

// Fetch page by slug
export async function getPageBySlug(slug) {
  return await client.fetch(pageQuery, { slug });
}

// Get all page slugs for static generation
export async function getAllPageSlugs() {
  const query = `*[_type == "page" && defined(slug.current)][].slug.current`;
  return await client.fetch(query);
}

// Fetch global settings
export async function getSettings() {
  const query = `
    *[_type == "settings"][0] {
      siteTitle,
      siteDescription,
      logo,
      headerMenu[] {
        title,
        url,
        page->{slug},
        children[] {
          title,
          url,
          page->{slug}
        }
      },
      footerTagline,
      footerQuickLinks[] {
        title,
        url
      },
      footerServices[] {
        title,
        url
      },
      footerContactInfo {
        address,
        email
      },
      footerCtaText,
      footerCtaLink,
      copyrightText,
      socialLinks {
        facebook,
        twitter,
        instagram,
        linkedin,
        youtube
      }
    }
  `;
  return await client.fetch(query);
}

// Preview mode query (for draft content)
export async function getPageBySlugPreview(slug) {
  return await client.fetch(
    pageQuery,
    { slug },
    { perspective: "previewDrafts" },
  );
}
