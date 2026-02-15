import Image from "next/image";
import { getImageUrl } from "@/lib/sanity.image";

export default function FeatureGrid({ data }) {
  const { heading, subheading, features, columns } = data;

  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {(heading || subheading) && (
          <div className="text-center mb-12">
            {heading && <h2 className="text-4xl font-bold mb-4">{heading}</h2>}
            {subheading && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {subheading}
              </p>
            )}
          </div>
        )}

        <div className={`grid ${gridClasses[columns]} gap-8`}>
          {features.map((feature, index) => {
            const href = feature.link?.page?.slug?.current
              ? `/${feature.link.page.slug.current}`
              : feature.link?.url;

            const FeatureContent = () => (
              <>
                {feature.icon && (
                  <div className="mb-4">
                    <Image
                      src={getImageUrl(feature.icon, 80, 80)}
                      alt=""
                      width={80}
                      height={80}
                      className="mx-auto"
                    />
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </>
            );

            return href ? (
              <a
                key={index}
                href={href}
                target={feature.link?.openInNewTab ? "_blank" : undefined}
                rel={
                  feature.link?.openInNewTab ? "noopener noreferrer" : undefined
                }
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <FeatureContent />
              </a>
            ) : (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm text-center"
              >
                <FeatureContent />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
