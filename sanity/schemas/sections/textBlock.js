export default {
  name: "textBlock",
  title: "Text Block",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "alignment",
      title: "Text Alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
        ],
        layout: "radio",
      },
      initialValue: "left",
    },
    {
      name: "maxWidth",
      title: "Max Width",
      type: "string",
      options: {
        list: [
          { title: "Narrow", value: "narrow" },
          { title: "Medium", value: "medium" },
          { title: "Wide", value: "wide" },
          { title: "Full", value: "full" },
        ],
      },
      initialValue: "medium",
    },
  ],
  preview: {
    select: {
      title: "heading",
      content: "content",
    },
    prepare({ title, content }) {
      const block = content?.find((item) => item._type === "block");
      const text = block?.children?.[0]?.text;
      return {
        title: "Text Block",
        subtitle: title || text || "No content",
      };
    },
  },
};
