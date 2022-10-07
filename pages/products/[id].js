import ProductDetails from "../../components/details/ProductDetails";
import SimilarProduct from "../../components/details/SimilarProduct";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/ui/Breadcrumb";

export default function Details({ details }) {
  return (
    <Layout>
      <Breadcrumb
        lists={[
          { name: "Home", url: "/" },
          { name: "T-Shirt", url: "" },
          { name: "Details", url: "/details" },
        ]}
      />
      <ProductDetails details={details} />
      <SimilarProduct details={details} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_HOST}/api/products`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: {
      id: `${product.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`${process.env.API_HOST}/api/products/${id}`);
  const details = await res.json();

  return {
    props: {
      details,
    },
  };
}
