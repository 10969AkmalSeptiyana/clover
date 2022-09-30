import Header from "../components/Header";
import Blog from "../components/home/Blog";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import NewArrivals from "../components/home/NewArrivals";
import NewsLetter from "../components/home/NewsLetter";
import Sitemap from "../components/Sitemap";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NewArrivals />
        <NewsLetter />
        <Blog />
        <Sitemap />
        <Footer />
      </main>
    </>
  );
}
