export default {
  name: "servicesShowcase",
  title: "Services Showcase",
  type: "object",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Services",
      description: "Main section heading",
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
              name: "number",
              title: "Service Number",
              type: "string",
              description: 'Display number (e.g., "01", "02", "03")',
              validation: (Rule) => Rule.required(),
            },
            {
              name: "label",
              title: "Label",
              type: "string",
              initialValue: "Our Services",
              description: "Small label above the title",
            },
            {
              name: "title",
              title: "Service Title",
              type: "string",
              validation: (Rule) => Rule.required(),
              description: 'Main service title (e.g., "GAME DEVELOPMENT")',
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
              description: "Service description text",
            },
            {
              name: "buttonText",
              title: "Button Text",
              type: "string",
              initialValue: "View More",
              description: "CTA button text",
            },
            {
              name: "buttonLink",
              title: "Button Link",
              type: "string",
              description: "URL or anchor link for the button",
            },
            {
              name: "image",
              title: "Service Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
              description: "Main service image/illustration",
            },
          ],
          preview: {
            select: {
              title: "title",
              number: "number",
              media: "image",
            },
            prepare({ title, number, media }) {
              return {
                title: `${number} - ${title}`,
                media,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
      description:
        "Add your services (they will alternate left/right automatically)",
    },
  ],
  preview: {
    select: {
      title: "sectionTitle",
      services: "services",
    },
    prepare({ title, services }) {
      return {
        title: "Services Showcase",
        subtitle: `${title} - ${services?.length || 0} services`,
      };
    },
  },
};
