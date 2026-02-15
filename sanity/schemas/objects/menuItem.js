export default {
  name: "menuItem",
  title: "Menu Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "children",
      title: "Submenu Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "string",
            },
            {
              name: "page",
              title: "Internal Page",
              type: "reference",
              to: [{ type: "page" }],
            },
          ],
        },
      ],
      description: "Optional dropdown menu items",
    },
  ],
  preview: {
    select: {
      title: "title",
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
