import Image from "next/image";

import Layout from "../components/Layout";
import Breadcrumb from "../components/ui/Breadcrumb";
import { Container } from "../components/styles/Container.styled";
import { StyledSuccess } from "../components/styles/Success.sytled";
import Button from "../components/ui/Button";

export default function Success() {
  return (
    <Layout>
      <Container>
        <Breadcrumb
          lists={[
            { url: "/", name: "Home" },
            { url: "success", name: "Success Checkout" },
          ]}
        />
        <StyledSuccess>
          <Image
            src="/images/success.png"
            alt="Success Image"
            width={499}
            height={430}
          />
          <h2>Checkout Successful</h2>
          <p>
            The item you buy will be sent immediately so now please sit tight
            and be ready for it.
          </p>
          <Button type="link" href="/" padding="15px 40px" radius="50px">
            Back To Shop
          </Button>
        </StyledSuccess>
      </Container>
    </Layout>
  );
}
