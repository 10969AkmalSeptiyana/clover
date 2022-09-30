import Header from "./Header";
import Sitemap from "./Sitemap";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Sitemap />
      <Footer />
    </>
  );
}
