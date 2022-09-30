import { Container } from "../styles/Container.styled";
import { Card, NewsInput, Subscribe } from "../styles/NewsLetter.styled";

export default function NewsLetter() {
  return (
    <section>
      <Container>
        <Card>
          <h2>Subscribe our newsletter</h2>
          <p>Sign up to receive information about new products</p>

          <form>
            <label>
              <NewsInput type="text" placeholder="Enter your email here" />
              <Subscribe type="submit">Subscribe</Subscribe>
            </label>
          </form>
        </Card>
      </Container>
    </section>
  );
}
