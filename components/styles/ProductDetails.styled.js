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
    font-size: 32px;
    @media screen and (min-width: 768px) {
      font-size: 42px;
    }
  }

  span {
    font-size: 20px;
    font-weight: 400;
    color: #082032;
  }

  h3 {
    font-size: 18px;
    margin: 30px 0 15px;
  }

  p {
    max-width: 469px;
    font-size: 18px;
    line-height: 24px;
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

export const SizeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #082032;
  border-bottom: 1px solid #082032;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;

    &:checked + div {
      background-color: #398ab9;
    }
  }
`;

export const Size = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #082032;
  padding: 10px;

  &:hover {
    background-color: #398ab9;
  }
`;
