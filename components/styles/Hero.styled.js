import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const HeroCard = styled.div`
  position: relative;

  @media screen and (min-width: 992px) {
    flex: 1;
  }

  span {
    display: initial !important;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 5;
  }

  &::after {
    content: "${({ title }) => title}";
    position: absolute;
    left: 20px;
    bottom: 60px;
    font-size: 48px;
    color: #fff;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    z-index: 10;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;
