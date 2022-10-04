import styled from "styled-components";

export const StyledSuccess = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  @media screen and (min-width: 768px) {
    height: 100vh;
    margin-top: 0;
  }

  h2 {
    font-size: 32px;
    margin-top: 80px;
  }

  p {
    font-size: 18px;
    line-height: 24px;
    margin: 16px 0 50px;
    max-width: 362px;
    text-align: center;
  }
`;
