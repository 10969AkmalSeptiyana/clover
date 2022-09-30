import { Container } from "../styles/Container.styled";
import { CardGrid, Title } from "../styles/NewArrivals.styled";
import Card from "../ui/Card";

export default function NewArrivals() {
  return (
    <section>
      <Container>
        <Title>New Arrivals</Title>
        <CardGrid>
          <Card
            img="/images/image-product-1.png"
            title="High Quality T-Shirt"
            price="40.00"
            src="Image Product 1"
          />
          <Card
            img="/images/image-product-2.png"
            title="Technical T-shirt"
            price="39.00"
            src="Image Product 2"
          />
          <Card
            img="/images/image-product-3.png"
            title="Men’s Cotton T-Shirt"
            price="35.00"
            src="Image Product 3"
          />
          <Card
            img="/images/image-product-4.png"
            title="Men’s Solid Regular"
            price="25.00"
            src="Image Product 4"
          />
          <Card
            img="/images/image-product-5.png"
            title="Shirts isolated"
            price="50.00"
            src="Image Product 5"
          />
          <Card
            img="/images/image-product-6.png"
            title="High Quality T-Shirt Zara"
            price="45.00"
            src="Image Product 6"
          />
        </CardGrid>
      </Container>
    </section>
  );
}
