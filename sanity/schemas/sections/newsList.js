export default {
  name: "newsList",
  title: "News List",
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
      name: "articles",
      title: "Articles",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Featured Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "excerpt",
              title: "Excerpt",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
            {
              name: "date",
              title: "Date",
              type: "date",
            },
            {
              name: "author",
              title: "Author",
              type: "string",
            },
            {
              name: "category",
              title: "Category",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "link",
              description: "Link to full article",
            },
          ],
          preview: {
            select: {
              title: "title",
              date: "date",
              media: "image",
            },
            prepare({ title, date, media }) {
              return {
                title,
                subtitle: date,
                media,
              };
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
          { title: "Featured + Grid", value: "featured" },
        ],
      },
      initialValue: "grid",
    },
  ],
  preview: {
    select: {
      title: "heading",
      articles: "articles",
    },
    prepare({ title, articles }) {
      return {
        title: "News List",
        subtitle: title || `${articles?.length || 0} articles`,
      };
    },
  },
};
