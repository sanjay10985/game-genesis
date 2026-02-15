import { getPageBySlug, getSettings } from "@/lib/sanity.queries";
import SectionMapper from "@/components/SectionMapper";
import LayoutWrapper from "@/components/LayoutWrapper";
import Link from "next/link";

// Generate metadata for SEO
export async function generateMetadata() {
  const page = await getPageBySlug("home");

  if (!page) {
    return {
      title: "Game Genesis",
      description: "Welcome to Game Genesis",
    };
  }

  return {
    title: page.seo?.metaTitle || page.title || "Game Genesis",
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

export default async function Home() {
  const [page, settings] = await Promise.all([
    getPageBySlug("home"),
    getSettings(),
  ]);

  // If no home page exists in Sanity yet, show a welcome message
  if (!page) {
    return (
      <LayoutWrapper settings={settings}>
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
          <div className="max-w-2xl text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to Game Genesis
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Your Sanity CMS is set up and ready! Create your first page to get
              started.
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Quick Start Guide
              </h2>
              <ol className="text-left space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    1
                  </span>
                  <div>
                    <strong>Open Sanity Studio:</strong> Visit{" "}
                    <a
                      href="http://localhost:3333"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      http://localhost:3333
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    2
                  </span>
                  <div>
                    <strong>Create a Page:</strong> Click "Pages" → "Create new"
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    3
                  </span>
                  <div>
                    <strong>Set the slug to "home":</strong> This will be your
                    homepage
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    4
                  </span>
                  <div>
                    <strong>Add sections:</strong> Try Hero, Text Block, or
                    Feature Grid
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    5
                  </span>
                  <div>
                    <strong>Publish:</strong> Click the "Publish" button
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    6
                  </span>
                  <div>
                    <strong>Refresh this page:</strong> Your content will
                    appear!
                  </div>
                </li>
              </ol>
            </div>

            <div className="flex gap-4 justify-center">
              <a
                href="http://localhost:3333"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Open Sanity Studio
              </a>
              <Link
                href="/SANITY_INTEGRATION_GUIDE.md"
                className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    );
  }

  return (
    <LayoutWrapper settings={settings}>
      <SectionMapper sections={page.sections} />
    </LayoutWrapper>
  );
}

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 60; // Revalidate every 60 seconds
