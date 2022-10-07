import Link from "next/link";

import { Container } from "../styles/Container.styled";
import { CardGrid, Title, StrechedLink } from "../styles/NewArrivals.styled";
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
              >
                <Link href={`/products/${product.id}`} passHref>
                  <StrechedLink></StrechedLink>
                </Link>
              </Card>
            );
          })}
        </CardGrid>
      </Container>
    </section>
  );
}
