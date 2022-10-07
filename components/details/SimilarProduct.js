import { Container } from "../styles/Container.styled";
import { Title, CardWrapper } from "../styles/SimilarProduct.styled";
import Card from "../ui/Card";

export default function SimilarProduct({ details }) {
  return (
    <section>
      <Container>
        <Title>Similar Product</Title>
        <CardWrapper>
          {details?.similarProducts.map((item) => {
            return (
              <Card
                key={item.id}
                img={item.imageUrl}
                title={item.title}
                price={item.price}
                alt={`Similar Image ${item.title}`}
              />
            );
          })}
        </CardWrapper>
      </Container>
    </section>
  );
}
