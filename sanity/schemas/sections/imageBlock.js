export default {
  name: "imageBlock",
  title: "Image Block",
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
      name: "alt",
      title: "Alt Text",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Describe the image for accessibility and SEO",
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
    {
      name: "size",
      title: "Image Size",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
          { title: "Full Width", value: "full" },
        ],
      },
      initialValue: "large",
    },
    {
      name: "link",
      title: "Link",
      type: "link",
      description: "Optional link when image is clicked",
    },
  ],
  preview: {
    select: {
      title: "alt",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: "Image Block",
        subtitle: title,
        media,
      };
    },
  },
};
