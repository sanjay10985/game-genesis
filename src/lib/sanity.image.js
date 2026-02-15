import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./sanity.client";

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Helper function to get optimized image URL
export function getImageUrl(image, width = 800, height = null) {
  if (!image) return null;

  let url = urlFor(image).width(width).quality(80).auto("format");

  if (height) {
    url = url.height(height);
  }

  return url.url();
}
