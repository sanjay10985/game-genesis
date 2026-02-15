export default {
  name: "portfolioGrid",
  title: "Portfolio Grid",
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
      name: "items",
      title: "Portfolio Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "category",
              title: "Category",
              type: "string",
              description: "e.g., Web Design, Branding, Mobile App",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            },
            {
              name: "link",
              title: "Link",
              type: "link",
              description: "Link to project details or external site",
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "category",
              media: "image",
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "columns",
      title: "Columns",
      type: "number",
      options: {
        list: [
          { title: "2 Columns", value: 2 },
          { title: "3 Columns", value: 3 },
          { title: "4 Columns", value: 4 },
        ],
      },
      initialValue: 3,
    },
  ],
  preview: {
    select: {
      title: "heading",
      items: "items",
    },
    prepare({ title, items }) {
      return {
        title: "Portfolio Grid",
        subtitle: title || `${items?.length || 0} items`,
      };
    },
  },
};
