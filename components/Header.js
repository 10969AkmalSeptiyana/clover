import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import { useGlobalContext } from "../lib/hooks/useGlobalContext";
import { Container } from "./styles/Container.styled";
import {
  Nav,
  NavLink,
  NavList,
  NavIcons,
  NavToggle,
  Cart,
} from "./styles/Header.styled";
import Logo from "./ui/Logo";

export default function Header() {
  const [toggleMainMenu, setToggleMainMenu] = useState(false);
  const [isCartChanged, setCartChanged] = useState(false);
  const { state } = useGlobalContext();

  const prevCart = useRef(state?.cart || {});

  useEffect(() => {
    if (prevCart.current !== state.cart) {
      prevCart.current = state?.cart || {};
      setCartChanged(true);
      setTimeout(() => {
        setCartChanged(false);
      }, 550);
    }
  }, [state.cart]);

  return (
    <header>
      <Container>
        <Nav>
          <Logo />
          <NavList
            showMenu={toggleMainMenu ? "visible" : "hidden"}
            opacity={toggleMainMenu ? "100" : "0"}
          >
            <li>
              <Link href="/" passHref>
                <NavLink>Home</NavLink>
              </Link>
            </li>
            <li>
              <Link href="">
                <NavLink>Clothing</NavLink>
              </Link>
            </li>
            <li>
              <Link href="">
                <NavLink>Suits</NavLink>
              </Link>
            </li>
            <li>
              <Link href="">
                <NavLink>Shoes</NavLink>
              </Link>
            </li>
            <li>
              <Link href="">
                <NavLink>Accesories</NavLink>
              </Link>
            </li>
            <li>
              <Link href="">
                <NavLink>Blog</NavLink>
              </Link>
            </li>
          </NavList>

          <NavIcons>
            <svg
              width="30"
              height="24"
              viewBox="0 0 30 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.001 2.02901C12.35 -0.0799897 15.98 -0.0099895 18.243 2.25701C20.505 4.52501 20.583 8.13701 18.479 10.493L9.99901 18.985L1.52101 10.493C-0.582994 8.13701 -0.503994 4.51901 1.75701 2.25701C4.02201 -0.00698948 7.64501 -0.0829897 10.001 2.02901ZM16.827 3.67001C15.327 2.16801 12.907 2.10701 11.337 3.51701L10.002 4.71501L8.66601 3.51801C7.09101 2.10601 4.67601 2.16801 3.17201 3.67201C1.68201 5.16201 1.60701 7.54701 2.98001 9.12301L10 16.154L17.02 9.12401C18.394 7.54701 18.319 5.16501 16.827 3.67001Z"
                fill="#082032"
              />
            </svg>
            <Link href="/cart" passHref>
              <Cart
                display={
                  state.cart && Object.keys(state.cart).length > 0
                    ? "block"
                    : "none"
                }
                className={isCartChanged && "animate-bounce"}
              >
                <svg
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 14.5V2.5H0V0.5H3C3.26522 0.5 3.51957 0.605357 3.70711 0.792893C3.89464 0.98043 4 1.23478 4 1.5V13.5H16.438L18.438 5.5H6V3.5H19.72C19.872 3.5 20.022 3.53466 20.1586 3.60134C20.2952 3.66801 20.4148 3.76495 20.5083 3.88479C20.6019 4.00462 20.6668 4.1442 20.6983 4.29291C20.7298 4.44162 20.7269 4.59555 20.69 4.743L18.19 14.743C18.1358 14.9592 18.011 15.1512 17.8352 15.2883C17.6595 15.4255 17.4429 15.5 17.22 15.5H3C2.73478 15.5 2.48043 15.3946 2.29289 15.2071C2.10536 15.0196 2 14.7652 2 14.5ZM4 21.5C3.46957 21.5 2.96086 21.2893 2.58579 20.9142C2.21071 20.5391 2 20.0304 2 19.5C2 18.9696 2.21071 18.4609 2.58579 18.0858C2.96086 17.7107 3.46957 17.5 4 17.5C4.53043 17.5 5.03914 17.7107 5.41421 18.0858C5.78929 18.4609 6 18.9696 6 19.5C6 20.0304 5.78929 20.5391 5.41421 20.9142C5.03914 21.2893 4.53043 21.5 4 21.5ZM16 21.5C15.4696 21.5 14.9609 21.2893 14.5858 20.9142C14.2107 20.5391 14 20.0304 14 19.5C14 18.9696 14.2107 18.4609 14.5858 18.0858C14.9609 17.7107 15.4696 17.5 16 17.5C16.5304 17.5 17.0391 17.7107 17.4142 18.0858C17.7893 18.4609 18 18.9696 18 19.5C18 20.0304 17.7893 20.5391 17.4142 20.9142C17.0391 21.2893 16.5304 21.5 16 21.5Z"
                    fill="#082032"
                  />
                  <g>
                    <circle
                      xmlns="http://www.w3.org/2000/svg"
                      cx="20"
                      cy="5"
                      r="5"
                      fill="#398AB9"
                    />
                  </g>
                </svg>
              </Cart>
            </Link>
            <NavToggle
              onClick={() => setToggleMainMenu((prev) => !prev)}
              position={toggleMainMenu ? "fixed" : "relative"}
              top={toggleMainMenu && "10px"}
              right={toggleMainMenu && "10px"}
            >
              <svg
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.25 0.5H22.75V3H0.25V0.5ZM7.75 9.25H22.75V11.75H7.75V9.25ZM0.25 18H22.75V20.5H0.25V18Z"
                  fill="black"
                />
              </svg>
            </NavToggle>
          </NavIcons>
        </Nav>
      </Container>
    </header>
  );
}
