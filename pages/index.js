import Layout from "../components/Layout";
import Blog from "../components/home/Blog";
import Hero from "../components/home/Hero";
import NewArrivals from "../components/home/NewArrivals";
import NewsLetter from "../components/home/NewsLetter";

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero />
        <NewArrivals />
        <NewsLetter />
        <Blog />
      </main>
    </Layout>
  );
}
