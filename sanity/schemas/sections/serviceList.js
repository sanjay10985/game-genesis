export default {
  name: "serviceList",
  title: "Service List",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "text",
      rows: 2,
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "image",
              description: "Icon for this service",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
            {
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }],
              description: "List of features or benefits",
            },
            {
              name: "price",
              title: "Price",
              type: "string",
              description: "Optional pricing information",
            },
            {
              name: "link",
              title: "Link",
              type: "link",
              description: "Link to more details",
            },
          ],
          preview: {
            select: {
              title: "title",
              media: "icon",
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "List", value: "list" },
          { title: "Grid", value: "grid" },
          { title: "Cards", value: "cards" },
        ],
      },
      initialValue: "cards",
    },
  ],
  preview: {
    select: {
      title: "heading",
      services: "services",
    },
    prepare({ title, services }) {
      return {
        title: "Service List",
        subtitle: title || `${services?.length || 0} services`,
      };
    },
  },
};
