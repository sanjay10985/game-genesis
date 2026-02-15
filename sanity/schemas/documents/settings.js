export default {
  name: "settings",
  title: "Global Settings",
  type: "document",
  fields: [
    {
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Main site title",
    },
    {
      name: "siteDescription",
      title: "Site Description",
      type: "text",
      rows: 3,
      description: "Default meta description for SEO",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Site logo",
    },
    {
      name: "headerMenu",
      title: "Header Menu",
      type: "array",
      of: [{ type: "menuItem" }],
      description: "Main navigation menu items",
    },
    {
      name: "footerTagline",
      title: "Footer Tagline",
      type: "text",
      rows: 2,
      description:
        "Tagline displayed in footer (e.g., 'Building games that play smooth...')",
    },
    {
      name: "footerQuickLinks",
      title: "Footer Quick Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Link Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      description: "Quick links section in footer",
    },
    {
      name: "footerServices",
      title: "Footer Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Service Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "string",
            },
          ],
        },
      ],
      description: "Services list in footer",
    },
    {
      name: "footerContactInfo",
      title: "Footer Contact Info",
      type: "object",
      fields: [
        {
          name: "address",
          title: "Address",
          type: "text",
          rows: 3,
        },
        {
          name: "email",
          title: "Email",
          type: "string",
        },
      ],
      description: "Contact information displayed in footer",
    },
    {
      name: "footerCtaText",
      title: "Footer CTA Button Text",
      type: "string",
      initialValue: "Hire Now",
      description: "Call-to-action button text in footer",
    },
    {
      name: "footerCtaLink",
      title: "Footer CTA Button Link",
      type: "string",
      description: "Call-to-action button URL",
    },
    {
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
      initialValue: "© 2026 GameGenesis. All rights reserved.",
      description: "Copyright text at bottom of footer",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        {
          name: "facebook",
          title: "Facebook",
          type: "url",
        },
        {
          name: "twitter",
          title: "Twitter/X",
          type: "url",
        },
        {
          name: "instagram",
          title: "Instagram",
          type: "url",
        },
        {
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
        },
        {
          name: "youtube",
          title: "YouTube",
          type: "url",
        },
      ],
      description: "Social media links",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Global Settings",
      };
    },
  },
};
