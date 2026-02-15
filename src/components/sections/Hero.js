import Image from "next/image";
import { getImageUrl } from "@/lib/sanity.image";

export default function Hero({ data }) {
  // Destructure data from Sanity with fallbacks
  const {
    heading = "Build Iconic Games",
    subheading = "Igniting Your Game Vision",
    ctaText = "Let's Build Your Game",
    ctaLink = "#contact",
    backgroundImage,
    characterImage,
    scrollingTexts = [
      "Graphic Art",
      "Game Visuals",
      "Game Art Services",
      "Art for Games",
      "Game Art",
      "Visual Game Design",
      "Creative Game Art",
      "Concept Art",
    ],
  } = data || {};

  // Get image URL from Sanity if provided
  const characterImageUrl = characterImage
    ? getImageUrl(characterImage, 1200, 1400)
    : "/hero-characters.png";

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Diagonal Lines Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="diagonal-lines"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="200"
                y2="200"
                stroke="#9CDBDB"
                strokeWidth="0.5"
                strokeDasharray="5,5"
              />
              <line
                x1="0"
                y1="100"
                x2="100"
                y2="200"
                stroke="#9CDBDB"
                strokeWidth="0.5"
                strokeDasharray="5,5"
              />
              <line
                x1="100"
                y1="0"
                x2="200"
                y2="100"
                stroke="#9CDBDB"
                strokeWidth="0.5"
                strokeDasharray="5,5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      {/* Cyan Diagonal Line Accent */}
      <div className="absolute top-0 right-0 w-full h-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 1024 768"
          preserveAspectRatio="none"
        >
          <line
            x1="100%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="#9CDBDB"
            strokeWidth="2"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen pt-24 pb-16">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-wider leading-tight">
                <span className="block text-primary-pink hero-glow-text">
                  {heading}
                </span>
              </h1>
              {subheading && (
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primary-cyan tracking-wide leading-tight">
                  {subheading}
                </h2>
              )}
            </div>

            {/* CTA Button */}
            {ctaText && (
              <div>
                <a
                  href={ctaLink}
                  className="inline-block group relative px-8 py-4 bg-transparent border-2 border-primary-pink text-primary-pink hover:bg-primary-pink hover:text-white transition-all duration-300 tracking-wide text-lg overflow-hidden clip-path-button"
                >
                  <span className="relative z-10">{ctaText}</span>
                  <div className="absolute inset-0 bg-primary-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></div>
                </a>
              </div>
            )}
          </div>

          {/* Right Content - Character Images */}
          <div className="relative h-[500px] lg:h-[700px]">
            {/* Main Character Image */}
            <div className="absolute right-0 bottom-0 w-full h-full">
              <Image
                src={characterImageUrl}
                alt={heading || "Game Characters"}
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Glow Effect Behind Characters */}
            <div className="absolute right-1/4 top-1/4 w-64 h-64 bg-primary-cyan/20 rounded-full blur-3xl"></div>
            <div className="absolute right-1/3 top-1/3 w-48 h-48 bg-primary-pink/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Scrolling Text Banner */}
        {scrollingTexts && scrollingTexts.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-b border-primary-cyan/30 py-6">
            <div className="flex animate-scroll whitespace-nowrap">
              {/* First Set */}
              <div className="flex items-center gap-8 px-8">
                {scrollingTexts.map((text, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex items-center gap-8"
                  >
                    <span className="text-white/60 tracking-wider text-lg">
                      {text}
                    </span>
                    <div className="w-8 h-8 border border-primary-cyan/50 rotate-45 flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-cyan"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-8 px-8">
                {scrollingTexts.map((text, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex items-center gap-8"
                  >
                    <span className="text-white/60 tracking-wider text-lg">
                      {text}
                    </span>
                    <div className="w-8 h-8 border border-primary-cyan/50 rotate-45 flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-cyan"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
