import Image from "next/image";
import { getImageUrl } from "@/lib/sanity.image";

export default function ServiceList({ data }) {
  const { heading, subheading, services, layout } = data;

  const layoutClasses = {
    list: "flex flex-col gap-8",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-8",
    cards: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
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

        <div className={layoutClasses[layout]}>
          {services.map((service, index) => {
            const href = service.link?.page?.slug?.current
              ? `/${service.link.page.slug.current}`
              : service.link?.url;

            const ServiceContent = () => (
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                {service.icon && (
                  <div className="mb-4">
                    <Image
                      src={getImageUrl(service.icon, 60, 60)}
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.price && (
                  <p className="text-2xl font-bold text-blue-600 mb-4">
                    {service.price}
                  </p>
                )}

                {href && (
                  <span className="text-blue-600 font-semibold hover:underline">
                    Learn More →
                  </span>
                )}
              </div>
            );

            return href ? (
              <a
                key={index}
                href={href}
                target={service.link?.openInNewTab ? "_blank" : undefined}
                rel={
                  service.link?.openInNewTab ? "noopener noreferrer" : undefined
                }
              >
                <ServiceContent />
              </a>
            ) : (
              <div key={index}>
                <ServiceContent />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
