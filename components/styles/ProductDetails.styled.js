import styled from "styled-components";

export const StyledProductDetails = styled.section`
  margin-top: 70px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 30px;

  div {
    @media screen and (min-width: 992px) {
      flex: 1;
    }
  }

  h2 {
    font-size: 42px;
    color: #082032;
    font-weight: 500;
  }

  span {
    font-size: 20px;
    font-weight: 400;
    color: #082032;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    color: #082032;
    margin: 30px 0 15px;
  }

  p {
    max-width: 469px;
    color: #082032;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }

  p:not(:last-child) {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    h3 {
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 400;
      color: #082032;
    }

    ul {
      border-top: 1px solid #082032;
      border-bottom: 1px solid #082032;

      li {
        font-size: 18px;
        font-weight: 400;
        color: #082032;
        padding: 10px;

        &:hover {
          background-color: #398ab9;
        }
      }
    }
  }
`;

export const Preview = styled.div`
  img {
    border-radius: 15px;
  }
`;

export const Slider = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    column-gap: 20px;

    img {
      border-radius: 15px;
    }
  }
`;

export const Button = styled.button`
  padding: 16px 40px;
  background-color: #398ab9;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  column-gap: 10px;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 40px;
  align-self: center;
`;
