import styled from "styled-components";

export const StyledSitemap = styled.section`
  border-top: 1px solid #ddd;
  padding-top: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 80px;

  @media screen and (min-width: 768px) {
    column-gap: 100px;
  }

  div {
    h3 {
      font-size: 20px;
      font-weight: 500;
      color: #082032;
      margin-bottom: 35px;
    }

    ul {
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      a {
        color: #082032;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  column-gap: 35px;
  align-items: center;
  margin-bottom: 60px;
`;

export const Payments = styled.div`
  display: flex;
  column-gap: 22px;
  align-items: center;
`;
