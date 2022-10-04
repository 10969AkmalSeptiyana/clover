import styled from "styled-components";

export const StyledShoppingCart = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 66%;
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 70px;
  padding-bottom: 13px;
  border-bottom: 1px solid #ddd;
  @media screen and (min-width: 768px) {
    border-bottom: 0;
  }

  h3 {
    font-size: 26px;
  }
`;

export const CartTable = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 12px;
  }
`;

export const TableHeading = styled.div`
  width: ${({ width }) => width};

  &:not(:first-child) {
    padding-left: 16px;
    padding-right: 16px;
  }

  &:nth-child(3) h4 {
    padding: 0 34px;
  }

  &:nth-child(4) h4 {
    padding: 0 20px;
  }

  &:last-child h4 {
    margin: 0 auto;
  }

  h4 {
    font-size: 16px;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
`;

export const ImageItem = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  img {
    border-radius: 15px;
  }

  div {
    @media screen and (min-width: 768px) {
      display: none;
    }

    button,
    span {
      font-size: 18px;
      font-weight: 500;
      color: #082032;
    }

    button {
      background-color: transparent;
    }

    span {
      margin: 0 20px;
    }
  }
`;

export const ProductItem = styled.div`
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    width: 33%;
  }

  h3 {
    font-size: 18px;
  }

  span {
    font-size: 14px;
    color: #082032;
  }

  h4 {
    font-size: 16px;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export const Price = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 24%;
    flex: 1;
  }
`;

export const Item = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 24%;
    flex: 1;
  }

  div {
    button,
    span {
      font-size: 18px;
      font-weight: 500;
      color: #082032;
    }

    button {
      background-color: transparent;
    }

    span {
      margin: 0 20px;
    }
  }
`;

export const Delete = styled.div`
  margin-left: auto;
  @media screen and (min-width: 768px) {
    width: 16%;
  }

  div {
    text-align: center;
  }

  button {
    color: #e0195d;
    padding: 4px 12px;
    background-color: transparent;
  }
`;
