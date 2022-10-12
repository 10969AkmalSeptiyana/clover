import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 73px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  z-index: 30;
  visibility: ${({ showMenu }) => showMenu};
  opacity: ${({ opacity }) => opacity};

  @media screen and (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    column-gap: 50px;
    row-gap: 0;
    background-color: transparent;
    position: relative;
    visibility: visible;
    opacity: 100;
  }
`;

export const NavLink = styled.a`
  color: #082032;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;

  svg {
    cursor: pointer;
  }
`;

export const NavToggle = styled.div`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  z-index: 50;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const Cart = styled.a`
  svg g circle {
    display: ${({ display }) => display};
  }

  &.animate-bounce {
    animation: bounce 1s linear;

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
`;
