import { Container } from "../styles/Container.styled";
import { CardGrid, Title } from "../styles/NewArrivals.styled";
import Card from "../ui/Card";

export default function NewArrivals({ products }) {
  return (
    <section>
      <Container>
        <Title>New Arrivals</Title>
        <CardGrid>
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                img={product.imageUrl}
                title={product.title}
                price={product.price}
                src={`Image Product ${product.title}`}
              />
            );
          })}
        </CardGrid>
      </Container>
    </section>
  );
}
