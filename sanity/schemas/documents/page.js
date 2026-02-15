export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Page title (used in navigation and SEO)",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'URL path for this page (e.g., "about-us")',
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      description: "Search engine optimization settings",
    },
    {
      name: "sections",
      title: "Page Sections",
      type: "array",
      description: "Add and arrange sections to build your page",
      of: [
        { type: "hero" },
        { type: "servicesShowcase" },
        { type: "textBlock" },
        { type: "imageBlock" },
        { type: "featureGrid" },
        { type: "portfolioGrid" },
        { type: "serviceList" },
        { type: "newsList" },
        { type: "contactForm" },
      ],
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      description: "When this page was published",
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
    },
    prepare({ title, slug }) {
      return {
        title: title,
        subtitle: `/${slug || ""}`,
      };
    },
  },
};
