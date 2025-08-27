// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
// The Button import is no longer needed here

const Nav = styled.nav`
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.colors.lightestSlate};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.lightestSlate};
    margin: 0 1rem;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.code}; /* Use mono font for links */
    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

const Navbar = () => (
  <Nav>
    <a href="/" style={{ textDecoration: 'none', color: '#64ffda' }}>
      <h3>YK</h3>
    </a>
    <NavLinks>
      <a href="#education">Education</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
      {/* The Resume button has been removed from here */}
    </NavLinks>
  </Nav>
);

export default Navbar;