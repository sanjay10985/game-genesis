export default {
  name: "hero",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Main Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: 'Large heading text (e.g., "Build Iconic Games")',
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "string",
      description: 'Secondary heading text (e.g., "Igniting Your Game Vision")',
    },
    {
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Let's Build Your Game",
      description: "Text for the call-to-action button",
    },
    {
      name: "ctaLink",
      title: "CTA Button Link",
      type: "string",
      initialValue: "#contact",
      description: "URL or anchor link for the CTA button",
    },
    {
      name: "characterImage",
      title: "Character Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Main character/hero image (displayed on right side)",
    },
    {
      name: "backgroundImage",
      title: "Background Image (Optional)",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Optional background image",
    },
    {
      name: "scrollingTexts",
      title: "Scrolling Text Items",
      type: "array",
      of: [{ type: "string" }],
      initialValue: [
        "Graphic Art",
        "Game Visuals",
        "Game Art Services",
        "Art for Games",
        "Game Art",
        "Visual Game Design",
        "Creative Game Art",
        "Concept Art",
      ],
      description: "Text items that scroll at the bottom of the hero section",
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "subheading",
      media: "characterImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: "Hero",
        subtitle: title || "No heading set",
        media,
      };
    },
  },
};
