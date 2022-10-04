import Link from "next/link";

import { StyledButton, StyledLink } from "./Button.styled";

export default function Button(props) {
  if (props.type === "link") {
    return (
      <Link href={props.href} passHref>
        <StyledLink {...props}>{props.children}</StyledLink>
      </Link>
    );
  }

  return (
    <StyledButton {...props} type={props.isSubmit && "submit"}>
      {props.children}
    </StyledButton>
  );
}
