import styled from "styled-components";

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
`;
