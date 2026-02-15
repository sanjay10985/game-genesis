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
      name: "footerMenu",
      title: "Footer Menu",
      type: "array",
      of: [{ type: "menuItem" }],
      description: "Footer navigation menu items",
    },
    {
      name: "footerText",
      title: "Footer Text",
      type: "text",
      rows: 3,
      description: "Copyright or additional footer text",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        {
          name: "twitter",
          title: "Twitter/X",
          type: "url",
        },
        {
          name: "facebook",
          title: "Facebook",
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
          name: "github",
          title: "GitHub",
          type: "url",
        },
      ],
    },
    {
      name: "contactInfo",
      title: "Contact Information",
      type: "object",
      fields: [
        {
          name: "email",
          title: "Email",
          type: "string",
        },
        {
          name: "phone",
          title: "Phone",
          type: "string",
        },
        {
          name: "address",
          title: "Address",
          type: "text",
          rows: 3,
        },
      ],
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
