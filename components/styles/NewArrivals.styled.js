import styled from "styled-components";

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
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

export const CardProduct = styled.div``;

export const CardBody = styled.div`
  max-width: 413px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;

  svg {
    cursor: pointer;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #707070;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.h4`
  font-size: 18px;
  font-weight: 400;
  color: #082032;
`;
