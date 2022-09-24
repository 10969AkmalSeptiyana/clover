import Link from "next/link";

import { StyledLogo } from "./Logo.styled";

export default function Logo() {
  return (
    <Link href="/">
      <StyledLogo>
        <span>Clover</span> Co.
      </StyledLogo>
    </Link>
  );
}
