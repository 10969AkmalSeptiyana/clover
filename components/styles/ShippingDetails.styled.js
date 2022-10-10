import styled from "styled-components";

export const StyledShippingDetails = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 33%;
    padding: 0 16px;
  }
`;

export const Card = styled.div`
  background-color: #f9f9f9;
  padding: 24px 16px;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  h3 {
    font-size: 26px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    font-size: 14px;
    color: #082032;
    margin-bottom: 8px;
  }

  input {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 8px 16px;
    background-color: #fff;
    font-size: 14px;

    &:focus {
      border: 1px solid #398ab9;
      outline: none;
    }
  }
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  column-gap: 23px;
  flex-wrap: wrap;

  div {
    width: 45%;
    height: 80px;
    margin-bottom: 16px;

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
        border: 1px solid #398ab9;
        outline: none;
      }
    }

    div {
      border: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background-color: #fff;
      width: 100%;
      height: 100%;

      img {
        max-height: 100%;
      }
    }
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;
