import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "yzpvyl9n",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Disable CDN for development
  perspective: "published", // Only fetch published documents
});
