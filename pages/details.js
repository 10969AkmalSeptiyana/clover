import ProductDetails from "../components/details/ProductDetails";
import SimilarProduct from "../components/details/SimilarProduct";
import Layout from "../components/Layout";
import Breadcrumb from "../components/ui/Breadcrumb";

export default function Details() {
  return (
    <Layout>
      <Breadcrumb
        lists={[
          { name: "Home", url: "/" },
          { name: "T-Shirt", url: "" },
          { name: "Details", url: "/details" },
        ]}
      />
      <ProductDetails />
      <SimilarProduct />
    </Layout>
  );
}
