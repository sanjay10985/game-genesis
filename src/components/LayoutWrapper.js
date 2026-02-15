import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children, settings }) {
  return (
    <>
      <Header settings={settings} />
      <main className="min-h-screen">{children}</main>
      <Footer settings={settings} />
    </>
  );
}
