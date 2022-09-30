import styled from "styled-components";

export const Card = styled.div`
  background-image: url(/images/newsletter.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 0 16px;

  @media screen and (min-width: 992px) {
    text-align: initial;
    padding: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }

  h2 {
    font-size: 48px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 5px;
    z-index: 10;
  }

  p {
    font-size: 18px;
    color: #fff;
    font-weight: 400;
    z-index: 10;
  }

  form {
    max-width: 577px;
    width: 100%;
    margin-top: 50px;
    z-index: 10;

    label {
      position: relative;
    }
  }
`;

export const NewsInput = styled.input`
  width: 100%;
  padding: 15px 130px 15px 15px;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.5);

  &::placeholder {
    color: #fff;
  }
`;

export const Subscribe = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  color: #fff;
  background-color: #398ab9;
  border-radius: 4px;
  position: absolute;
  right: 10px;
  top: -10px;
  cursor: pointer;
`;
