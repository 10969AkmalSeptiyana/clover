import { Container } from "../styles/Container.styled";
import { Card, NewsInput, Subscribe } from "../styles/NewsLetter.styled";
import Button from "../ui/Button";

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
              <Subscribe>
                <Button padding="10px 20px">Subscribe</Button>
              </Subscribe>
            </label>
          </form>
        </Card>
      </Container>
    </section>
  );
}
