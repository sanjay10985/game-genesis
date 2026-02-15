export default {
  name: "contactForm",
  title: "Contact Form",
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
      name: "fields",
      title: "Form Fields",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Field Name",
              type: "string",
              validation: (Rule) => Rule.required(),
              description: 'Internal name (e.g., "email", "message")',
            },
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "type",
              title: "Field Type",
              type: "string",
              options: {
                list: [
                  { title: "Text", value: "text" },
                  { title: "Email", value: "email" },
                  { title: "Phone", value: "tel" },
                  { title: "Textarea", value: "textarea" },
                  { title: "Select", value: "select" },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "placeholder",
              title: "Placeholder",
              type: "string",
            },
            {
              name: "required",
              title: "Required",
              type: "boolean",
              initialValue: false,
            },
            {
              name: "options",
              title: "Options",
              type: "array",
              of: [{ type: "string" }],
              description: "For select fields only",
              hidden: ({ parent }) => parent?.type !== "select",
            },
          ],
          preview: {
            select: {
              title: "label",
              type: "type",
              required: "required",
            },
            prepare({ title, type, required }) {
              return {
                title,
                subtitle: `${type}${required ? " (required)" : ""}`,
              };
            },
          },
        },
      ],
      initialValue: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "message", label: "Message", type: "textarea", required: true },
      ],
    },
    {
      name: "submitButtonText",
      title: "Submit Button Text",
      type: "string",
      initialValue: "Send Message",
    },
    {
      name: "successMessage",
      title: "Success Message",
      type: "text",
      rows: 2,
      initialValue: "Thank you for your message. We will get back to you soon!",
    },
    {
      name: "showContactInfo",
      title: "Show Contact Info",
      type: "boolean",
      description: "Display contact information alongside the form",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: "Contact Form",
        subtitle: title || "Contact form section",
      };
    },
  },
};
