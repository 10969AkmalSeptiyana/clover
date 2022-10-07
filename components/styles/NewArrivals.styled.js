import styled from "styled-components";

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 856px) {
    text-align: initial;
    font-size: 42px;
    margin-bottom: 30px;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  row-gap: 50px;
  column-gap: 20px;

  @media screen and (max-width: 435px) {
    grid-template-columns: 1fr;
  }
`;

export const StrechedLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;
