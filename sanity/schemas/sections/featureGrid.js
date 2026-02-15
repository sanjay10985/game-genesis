export default {
  name: "featureGrid",
  title: "Feature Grid",
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
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "image",
              description: "Icon or small image for this feature",
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
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
            {
              name: "link",
              title: "Link",
              type: "link",
              description: "Optional link for this feature",
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
      features: "features",
    },
    prepare({ title, features }) {
      return {
        title: "Feature Grid",
        subtitle: title || `${features?.length || 0} features`,
      };
    },
  },
};
