import Layout from "../components/Layout";
import Breadcrumb from "../components/ui/Breadcrumb";
import { Wrapper } from "../components/styles/Cart.styled";
import ShoppingCart from "../components/cart/ShoppingCart";
import { Container } from "../components/styles/Container.styled";
import ShippingDetails from "../components/cart/ShippingDetails";

export default function Cart({ meta }) {
  return (
    <Layout>
      <Breadcrumb
        lists={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section>
        <Container>
          <Wrapper>
            <ShoppingCart />
            <ShippingDetails meta={meta} />
          </Wrapper>
        </Container>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_HOST}/api/checkout/meta`);
  const meta = await res.json();

  return {
    props: {
      meta,
    },
  };
}
