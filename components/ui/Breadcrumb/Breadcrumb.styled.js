import styled from "styled-components";

export const StyledBreadcrumb = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  margin-top: 40px;

  li:not(:last-child)::after {
    content: "/";
    padding: 0 20px;
    color: #082032;
  }

  li:not(:last-child) a {
    font-weight: 300;
  }

  li:last-child a {
    font-weight: 500;
  }

  a {
    color: #082032;
  }
`;
