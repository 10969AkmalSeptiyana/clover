import styled from "styled-components";

export const Title = styled.h2`
  font-size: 36px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }

  span {
    color: #398ab9;
  }
`;

export const CardWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`;

export const CardBlog = styled.div`
  @media screen and (min-width: 992px) {
    flex: 1;
  }
`;

export const CardBody = styled.div`
  margin-top: 20px;

  h3 {
    font-size: 24px;
  }

  p {
    color: #707070;
    line-height: 24px;
    margin: 10px 0 20px;
    max-width: 413px;
  }

  a {
    color: #398ab9;
  }
`;
