import Image from "next/image";
import { getImageUrl } from "@/lib/sanity.image";

export default function NewsList({ data }) {
  const { heading, subheading, articles, layout } = data;

  const layoutClasses = {
    list: "flex flex-col gap-8",
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    featured: "flex flex-col gap-8",
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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

        <div className={layoutClasses[layout]}>
          {layout === "featured" && articles.length > 0 && (
            <FeaturedArticle article={articles[0]} />
          )}

          {layout === "featured" && articles.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(1).map((article, index) => (
                <ArticleCard
                  key={index}
                  article={article}
                  formatDate={formatDate}
                />
              ))}
            </div>
          )}

          {layout !== "featured" &&
            articles.map((article, index) => (
              <ArticleCard
                key={index}
                article={article}
                formatDate={formatDate}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedArticle({ article }) {
  const href = article.link?.page?.slug?.current
    ? `/${article.link.page.slug.current}`
    : article.link?.url;

  const Content = () => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="grid md:grid-cols-2 gap-6">
        {article.image && (
          <div className="relative aspect-[16/9] md:aspect-auto">
            <Image
              src={getImageUrl(article.image, 800, 600)}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-8 flex flex-col justify-center">
          {article.category && (
            <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-2">
              {article.category}
            </span>
          )}
          <h3 className="text-3xl font-bold mb-4">{article.title}</h3>
          <p className="text-gray-600 mb-4 text-lg">{article.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {article.author && <span>{article.author}</span>}
            {article.date && (
              <span>{new Date(article.date).toLocaleDateString()}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={article.link?.openInNewTab ? "_blank" : undefined}>
      <Content />
    </a>
  ) : (
    <Content />
  );
}

function ArticleCard({ article, formatDate }) {
  const href = article.link?.page?.slug?.current
    ? `/${article.link.page.slug.current}`
    : article.link?.url;

  const Content = () => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {article.image && (
        <div className="relative aspect-[16/9]">
          <Image
            src={getImageUrl(article.image, 600, 400)}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {article.category && (
          <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
            {article.category}
          </span>
        )}
        <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          {article.author && <span>{article.author}</span>}
          {article.date && <span>{formatDate(article.date)}</span>}
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={article.link?.openInNewTab ? "_blank" : undefined}>
      <Content />
    </a>
  ) : (
    <Content />
  );
}
