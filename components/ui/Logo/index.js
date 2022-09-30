import Link from "next/link";

import { StyledLogo } from "./Logo.styled";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <StyledLogo>
        <span>Clover</span> Co.
      </StyledLogo>
    </Link>
  );
}
