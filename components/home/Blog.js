import Image from "next/image";

import { Container } from "../styles/Container.styled";
import { Title, CardWrapper, CardBlog, CardBody } from "../styles/Blog.styled";

export default function Blog() {
  return (
    <section>
      <Container>
        <Title>
          Latest <span>Blog</span>
        </Title>
        <CardWrapper>
          <CardBlog>
            <Image
              src="/images/image-blog-1.png"
              width={413}
              height={413}
              alt="Image Blog 1"
              quality={100}
              objectFit="cover"
            />
            <CardBody>
              <h3>Casual Valentine Looks</h3>
              <p>
                I have always loved getting dressed up for the holidays, but
                over the years ...
              </p>
              <a href="#">Read More</a>
            </CardBody>
          </CardBlog>
          <CardBlog>
            <Image
              src="/images/image-blog-2.png"
              width={413}
              height={413}
              alt="Image Blog 2"
              quality={100}
              objectFit="cover"
            />
            <CardBody>
              <h3>My Classic Sweaters for Cut-Outs</h3>
              <p>
                Cozy knits and sweaters are a winter classic, but this season
                I’m loving the twist on the classic ...
              </p>
              <a href="#">Read More</a>
            </CardBody>
          </CardBlog>
          <CardBlog>
            <Image
              src="/images/image-blog-3.png"
              width={413}
              height={413}
              alt="Image Blog 3"
              quality={100}
              objectFit="cover"
            />
            <CardBody>
              <h3>Comfortable Sneakers On Sale</h3>
              <p>
                I’ve had these sneakers for years and they are hands down the
                most comfortable sneakers I own. They are a running shoe so I’m
                sure ...
              </p>
              <a href="#">Read More</a>
            </CardBody>
          </CardBlog>
        </CardWrapper>
      </Container>
    </section>
  );
}
