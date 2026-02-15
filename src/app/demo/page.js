import { getSettings } from "@/lib/sanity.queries";
import LayoutWrapper from "@/components/LayoutWrapper";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Demo - Game Genesis",
  description: "Hero section demo",
};

export default async function DemoPage() {
  const settings = await getSettings();

  return (
    <LayoutWrapper settings={settings}>
      <Hero />
    </LayoutWrapper>
  );
}
