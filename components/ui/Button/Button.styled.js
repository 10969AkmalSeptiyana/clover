import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: 500;
  color: #fff;
  background-color: #398ab9;
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  border-radius: ${({ radius }) => radius || "4px"};
  cursor: pointer;
`;

export const StyledLink = styled.a`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  background-color: #398ab9;
  padding: ${({ padding }) => padding};
  border-radius: ${({ radius }) => radius};
  display: ${({ display }) => display};
  align-items: ${({ items }) => items};
  column-gap: ${({ colGap }) => colGap};
  align-self: ${({ alignSelf }) => alignSelf};
  margin: ${({ margin }) => margin};
  cursor: pointer;
`;
