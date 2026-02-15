import Image from "next/image";
import { getImageUrl } from "@/lib/sanity.image";

export default function ImageBlock({ data }) {
  const { image, alt, caption, size, link } = data;

  const sizeClasses = {
    small: "max-w-2xl",
    medium: "max-w-4xl",
    large: "max-w-6xl",
    full: "max-w-full",
  };

  const href = link?.page?.slug?.current
    ? `/${link.page.slug.current}`
    : link?.url;

  const ImageContent = () => (
    <div className="relative w-full aspect-video">
      <Image
        src={getImageUrl(image, 1200)}
        alt={alt}
        fill
        className="object-cover rounded-lg"
      />
    </div>
  );

  return (
    <section className="py-16 px-4">
      <div className={`container mx-auto ${sizeClasses[size]}`}>
        {href ? (
          <a
            href={href}
            target={link?.openInNewTab ? "_blank" : undefined}
            rel={link?.openInNewTab ? "noopener noreferrer" : undefined}
            className="block hover:opacity-90 transition-opacity"
          >
            <ImageContent />
          </a>
        ) : (
          <ImageContent />
        )}

        {caption && (
          <p className="text-center text-gray-600 mt-4 italic">{caption}</p>
        )}
      </div>
    </section>
  );
}
