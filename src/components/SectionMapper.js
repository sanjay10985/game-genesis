import Hero from "./sections/Hero";
import TextBlock from "./sections/TextBlock";
import ImageBlock from "./sections/ImageBlock";
import FeatureGrid from "./sections/FeatureGrid";
import PortfolioGrid from "./sections/PortfolioGrid";
import ServiceList from "./sections/ServiceList";
import NewsList from "./sections/NewsList";
import ContactForm from "./sections/ContactForm";

// Map section types to their corresponding components
const sectionComponents = {
  hero: Hero,
  textBlock: TextBlock,
  imageBlock: ImageBlock,
  featureGrid: FeatureGrid,
  portfolioGrid: PortfolioGrid,
  serviceList: ServiceList,
  newsList: NewsList,
  contactForm: ContactForm,
};

export default function SectionMapper({ sections }) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((section) => {
        const SectionComponent = sectionComponents[section._type];

        if (!SectionComponent) {
          console.warn(`No component found for section type: ${section._type}`);
          return null;
        }

        return <SectionComponent key={section._key} data={section} />;
      })}
    </>
  );
}
