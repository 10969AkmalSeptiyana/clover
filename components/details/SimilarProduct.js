import { Container } from "../styles/Container.styled";
import { Title, CardWrapper } from "../styles/SimilarProduct.styled";
import Card from "../ui/Card";

export default function SimilarProduct() {
  return (
    <section>
      <Container>
        <Title>Similar Product</Title>
        <CardWrapper>
          <Card
            img="/images/similar-image-1.png"
            title="Striped Cotton Shirt"
            price="55.00"
            alt="Similar Image 1"
          />
          <Card
            img="/images/similar-image-2.png"
            title="Strech Poplin Shirt"
            price="65.00"
            alt="Similar Image 2"
          />
          <Card
            img="/images/similar-image-3.png"
            title="Wrinkled Look Shirt"
            price="47.00"
            alt="Similar Image 3"
          />
        </CardWrapper>
      </Container>
    </section>
  );
}
