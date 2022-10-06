import Layout from "../components/Layout";
import Blog from "../components/home/Blog";
import Hero from "../components/home/Hero";
import NewArrivals from "../components/home/NewArrivals";
import NewsLetter from "../components/home/NewsLetter";

export default function Home({ categories, products }) {
  return (
    <Layout>
      <main>
        <Hero categories={categories} />
        <NewArrivals products={products} />
        <NewsLetter />
        <Blog />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_HOST}/api/categories`);
  const categories = await res.json();

  const data = await fetch(`${process.env.API_HOST}/api/products`);
  const products = await data.json();

  return {
    props: {
      categories,
      products,
    },
  };
}
