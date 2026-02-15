import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemas } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Game Genesis",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singleton for global settings
            S.listItem()
              .title("Settings")
              .child(
                S.document().schemaType("settings").documentId("settings")
              ),
            S.divider(),
            // All pages
            S.listItem()
              .title("Pages")
              .child(S.documentTypeList("page").title("Pages")),
            S.divider(),
            // Filter out settings and page from the rest
            ...S.documentTypeListItems().filter(
              (listItem) => !["settings", "page"].includes(listItem.getId())
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemas,
  },
});
