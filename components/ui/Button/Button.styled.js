import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: 500;
  color: #fff;
  background-color: #398ab9;
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  border-radius: ${({ radius }) => radius || "4px"};
  display: ${({ display }) => display};
  align-items: ${({ items }) => items};
  column-gap: ${({ colGap }) => colGap};
  align-self: ${({ alignSelf }) => alignSelf};
  margin: ${({ margin }) => margin};
  cursor: pointer;

  &:disabled {
    background-color: rgb(229 231 235);
    color: rgb(209 213 219);
    cursor: not-allowed;
  }
`;

export const StyledLink = styled.a`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  background-color: #398ab9;
  padding: ${({ padding }) => padding};
  border-radius: ${({ radius }) => radius};
  cursor: pointer;
`;
