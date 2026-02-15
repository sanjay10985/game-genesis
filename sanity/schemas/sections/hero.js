export default {
  name: "hero",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "text",
      rows: 3,
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "ctaButtons",
      title: "CTA Buttons",
      type: "array",
      of: [{ type: "link" }],
      validation: (Rule) => Rule.max(2),
      description: "Call-to-action buttons (max 2)",
    },
    {
      name: "alignment",
      title: "Text Alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "center",
    },
    {
      name: "height",
      title: "Section Height",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
          { title: "Full Screen", value: "fullscreen" },
        ],
      },
      initialValue: "large",
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "backgroundImage",
    },
    prepare({ title, media }) {
      return {
        title: "Hero",
        subtitle: title,
        media,
      };
    },
  },
};
