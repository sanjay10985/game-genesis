import Image from "next/image";
import { getImageUrl } from "@/lib/sanity.image";

export default function PortfolioGrid({ data }) {
  const { heading, subheading, items, columns } = data;

  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-16 px-4">
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

        <div className={`grid ${gridClasses[columns]} gap-6`}>
          {items.map((item, index) => {
            const href = item.link?.page?.slug?.current
              ? `/${item.link.page.slug.current}`
              : item.link?.url;

            const ItemContent = () => (
              <>
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={getImageUrl(item.image, 600, 450)}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  {item.category && (
                    <span className="text-sm text-gray-500 uppercase tracking-wide">
                      {item.category}
                    </span>
                  )}
                  <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                  {item.description && (
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  )}
                </div>
              </>
            );

            return href ? (
              <a
                key={index}
                href={href}
                target={item.link?.openInNewTab ? "_blank" : undefined}
                rel={
                  item.link?.openInNewTab ? "noopener noreferrer" : undefined
                }
                className="group"
              >
                <ItemContent />
              </a>
            ) : (
              <div key={index}>
                <ItemContent />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
