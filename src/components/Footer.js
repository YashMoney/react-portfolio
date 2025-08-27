// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data';

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// This component is now simplified to always show the links
const SocialLinks = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.lightSlate};
    font-size: 1.5rem;
    margin: 0 1rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
      transform: translateY(-5px); /* Add a nice hover effect */
    }
  }
`;

const CreditText = styled.p`
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.slate};
`;

const Footer = () => (
  <FooterContainer>
    {/* These icons will now be visible on all screen sizes */}
    <SocialLinks>
      <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href={`mailto:${portfolioData.email}`} aria-label="Email"><FaEnvelope /></a>
    </SocialLinks>
    <CreditText>Built by {portfolioData.name}</CreditText>
  </FooterContainer>
);

export default Footer;