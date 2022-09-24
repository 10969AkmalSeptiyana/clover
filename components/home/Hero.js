import Image from "next/image";

import { Container } from "../styles/Container.styled";
import { CardWrapper, HeroCard } from "../styles/Hero.styled";

export default function Hero() {
  return (
    <section>
      <Container>
        <CardWrapper>
          <HeroCard title="Women">
            <img src="/images/hero-image-1.png" alt="Hero Image 1" />
          </HeroCard>
          <HeroCard title="Kids">
            <img src="/images/hero-image-2.png" alt="Hero Image 2" />
          </HeroCard>
          <HeroCard title="Men">
            <img src="/images/hero-image-3.png" alt="Hero Image 3" />
          </HeroCard>
        </CardWrapper>
      </Container>
    </section>
  );
}
