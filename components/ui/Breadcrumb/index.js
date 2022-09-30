import Link from "next/link";

import { Container } from "../../styles/Container.styled";
import { StyledBreadcrumb } from "./Breadcrumb.styled";

export default function Breadcrumb({ lists }) {
  return (
    <div>
      <Container>
        <StyledBreadcrumb>
          {lists?.map?.((item) => {
            return (
              <li key={item.url}>
                <Link href={item.url}>{item.name}</Link>
              </li>
            );
          })}
        </StyledBreadcrumb>
      </Container>
    </div>
  );
}
