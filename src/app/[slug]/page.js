import { notFound } from "next/navigation";
import {
  getPageBySlug,
  getAllPageSlugs,
  getSettings,
} from "@/lib/sanity.queries";
import SectionMapper from "@/components/SectionMapper";
import LayoutWrapper from "@/components/LayoutWrapper";

// Generate static params for all pages
export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();

  // Filter out 'home' since it's handled by the root page
  return slugs
    .filter((slug) => slug !== "home")
    .map((slug) => ({
      slug: slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const page = await getPageBySlug(params.slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription || "",
    keywords: page.seo?.keywords?.join(", "),
    robots: page.seo?.noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: page.seo?.metaTitle || page.title,
      description: page.seo?.metaDescription || "",
      images: page.seo?.ogImage ? [page.seo.ogImage] : [],
    },
  };
}

export default async function Page({ params }) {
  const [page, settings] = await Promise.all([
    getPageBySlug(params.slug),
    getSettings(),
  ]);

  if (!page) {
    notFound();
  }

  return (
    <LayoutWrapper settings={settings}>
      <SectionMapper sections={page.sections} />
    </LayoutWrapper>
  );
}

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 60; // Revalidate every 60 seconds
