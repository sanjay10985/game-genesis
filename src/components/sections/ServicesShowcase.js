import Image from "next/image";
import { getImageUrl } from "@/lib/sanity.image";

export default function ServicesShowcase({ data }) {
  const { sectionTitle = "Services", services = [] } = data || {};

  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-4 lg:px-8 mb-16">
        <div className="flex items-center gap-4">
          <div className="relative">
            <h2 className="text-5xl lg:text-6xl text-white tracking-wider relative z-10">
              {sectionTitle}
            </h2>
            {/* Underline decoration */}
            <div className="absolute -bottom-2 left-0 w-32 h-1 bg-primary-cyan"></div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-0">
        {services.map((service, index) => (
          <ServiceItem
            key={service._key || index}
            service={service}
            index={index}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceItem({ service, index, isEven }) {
  const {
    title,
    number,
    description,
    buttonText = "View More",
    buttonLink = "#",
    image,
    label = "Our Services",
  } = service;

  // Get image URL from Sanity if provided
  const imageUrl = image ? getImageUrl(image, 800, 800) : null;

  return (
    <div className="relative py-16 lg:py-24">
      {/* Decorative curved line - placeholder for SVG */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute ${isEven ? "top-0 right-0" : "top-0 left-0"} w-1/2 h-full opacity-20`}
        >
          {/* SVG will go here */}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
        >
          {/* Content Side */}
          <div className={`space-y-6 ${!isEven ? "lg:order-2" : ""}`}>
            {/* Label */}
            <div className="flex items-center  text-white/60 ">
              <span className="text-sm tracking-widest uppercase text-primary-cyan mr-2">
                {label}
              </span>
              <div className="w-20 h-px bg-primary-cyan/30 mr-2"></div>
              <div className="w-2 h-2 bg-black border-primary-cyan border-1 mr-1" />
              <div className="w-2 h-2 bg-primary-cyan border-primary-cyan border-1" />
            </div>

            {/* Service Number */}
            <div className="relative">
              <span className="text-8xl lg:text-9xl font-bold text-white/5  outlined-gradient-text">
                {`0${index + 1}`}
              </span>
              <h3 className="text-4xl lg:text-5xl xl:text-6xl text-primary-pink tracking-wider relative z-10 uppercase">
                {title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              {description}
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href={buttonLink}
                className="inline-block px-8 py-3 bg-primary-cyan text-black hover:bg-primary-cyan/90 transition-all duration-300 tracking-wide font-semibold rounded-sm"
              >
                {buttonText}
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className={`relative ${!isEven ? "lg:order-1" : ""}`}>
            <div className="relative aspect-square max-w-md mx-auto">
              {imageUrl ? (
                <>
                  {/* Glow effect behind image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/20 to-primary-cyan/20 rounded-full blur-3xl scale-110"></div>

                  {/* Image */}
                  <div className="relative z-10">
                    <Image
                      src={imageUrl}
                      alt={title || "Service"}
                      width={800}
                      height={800}
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </>
              ) : (
                // Placeholder if no image
                <div className="w-full h-full bg-gradient-to-br from-card-1 to-card-2 rounded-lg flex items-center justify-center">
                  <span className="text-white/20 text-6xl">
                    {number || `0${index + 1}`}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
