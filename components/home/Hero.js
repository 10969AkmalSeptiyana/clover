import Image from "next/image";

import { Container } from "../styles/Container.styled";
import { CardWrapper, HeroCard } from "../styles/Hero.styled";

export default function Hero({ categories }) {
  return (
    <section>
      <Container>
        <CardWrapper>
          {categories.map((category) => {
            return (
              <HeroCard key={category.id} title={category.title}>
                <Image
                  src={category.imageUrl}
                  alt={`Hero Image ${category.title}`}
                  quality={100}
                  width={426}
                  height={647}
                />
              </HeroCard>
            );
          })}
        </CardWrapper>
      </Container>
    </section>
  );
}
