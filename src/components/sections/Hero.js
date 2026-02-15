import Image from "next/image";
import { getImageUrl } from "@/lib/sanity.image";

export default function Hero({ data }) {
  const {
    heading,
    subheading,
    backgroundImage,
    ctaButtons,
    alignment,
    height,
  } = data;

  const heightClasses = {
    small: "min-h-[400px]",
    medium: "min-h-[500px]",
    large: "min-h-[600px]",
    fullscreen: "min-h-screen",
  };

  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <section
      className={`relative flex flex-col justify-center ${heightClasses[height]} px-4`}
    >
      {backgroundImage && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={getImageUrl(backgroundImage, 1920, 1080)}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      <div
        className={`container mx-auto flex flex-col gap-6 ${alignmentClasses[alignment]}`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl">
          {heading}
        </h1>

        {subheading && (
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            {subheading}
          </p>
        )}

        {ctaButtons && ctaButtons.length > 0 && (
          <div className="flex gap-4 mt-4">
            {ctaButtons.map((button, index) => {
              const href = button.page?.slug?.current
                ? `/${button.page.slug.current}`
                : button.url;

              return (
                <a
                  key={index}
                  href={href}
                  target={button.openInNewTab ? "_blank" : undefined}
                  rel={button.openInNewTab ? "noopener noreferrer" : undefined}
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                    index === 0
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {button.text}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
