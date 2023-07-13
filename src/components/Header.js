import React from "react";
import styled from "styled-components";
import Nav from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <h1>MyCart</h1>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

`;
export default Header;