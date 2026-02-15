export default {
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Link Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "URL",
      type: "string",
      description: "External URL or internal path (e.g., /about)",
    },
    {
      name: "page",
      title: "Internal Page",
      type: "reference",
      to: [{ type: "page" }],
      description: "Link to an internal page (overrides URL field)",
    },
    {
      name: "openInNewTab",
      title: "Open in New Tab",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "text",
      url: "url",
      page: "page.slug.current",
    },
    prepare({ title, url, page }) {
      return {
        title: title,
        subtitle: page ? `/${page}` : url,
      };
    },
  },
};
