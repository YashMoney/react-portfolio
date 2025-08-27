// src/components/Hero.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'; // Import the new library
import { portfolioData } from '../data';
import Button from './Button';

// --- STYLED COMPONENTS ---

// Main layout component
const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 8rem 2rem 4rem 2rem;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

// Text content on the left
const HeroText = styled.div`
  flex-basis: 60%;
  div { overflow: hidden; }
  h1, h2, p { margin: 0; }
  h1 { font-size: 1.1rem; font-family: ${({ theme }) => theme.fonts.code}; color: ${({ theme }) => theme.colors.green}; margin: 0 0 1rem 0; }
  h2 { font-size: clamp(2.5rem, 6vw, 4.5rem); color: ${({ theme }) => theme.colors.lightestSlate}; }
  p { max-width: 540px; margin-top: 1.5rem; color: ${({ theme }) => theme.colors.slate}; 
      @media (max-width: 768px) { margin: 1.5rem auto; } 
  }
`;

// New component for the typing animation slogan
const TypingSlogan = styled.span`
  font-size: clamp(1.8rem, 5vw, 3.5rem);
  color: ${({ theme }) => theme.colors.slate};
  margin-top: 0.5rem;
  display: block; /* Ensures it takes up its own line */
`;


// --- NEW CODE EDITOR ANIMATION ---
const blink = keyframes`
  50% { opacity: 0; }
`;

const CodeEditorWrapper = styled(motion.div)`
  flex-shrink: 0;
  width: 350px; /* Increased width */
  height: 220px; /* Adjusted height */
  background: #112240; /* lightNavy */
  border-radius: 8px;
  box-shadow: 0 20px 40px -15px rgba(2, 12, 27, 0.7);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 3rem 0 2rem 0;
    width: 90%;
    max-width: 350px;
  }
`;

const EditorHeader = styled.div`
  background: #233554; /* lightestNavy */
  padding: 8px 12px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  align-items: center;
`;

const WindowDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-right: 8px;
`;

const EditorBody = styled.div`
  padding: 1rem;
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: 0.9rem;
  flex-grow: 1;

  .cursor {
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.green};
    width: 8px;
    height: 1.2em;
    animation: ${blink} 1s infinite;
  }
`;

// Framer Motion text animation variant
const textVariant = {
  hidden: { y: '100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// --- THE COMPONENT ---
const Hero = () => (
  <HeroSection id="hero">
    {/* Left Side: Introduction Text */}
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
      <HeroText>
        <div><motion.h1 variants={textVariant}>Hi, my name is</motion.h1></div>
        <div><motion.h2 variants={textVariant}>{portfolioData.name}.</motion.h2></div>
        
        {/* The Typing Animation for your slogan */}
        <TypeAnimation
          sequence={[
            'I build things for the web.',
            2000,
            'I engineer efficient ML models.',
            2000,
            'I create intuitive user experiences.',
            2000,
          ]}
          wrapper={TypingSlogan}
          speed={50}
          repeat={Infinity}
        />
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <p>
            I’m a computer science student with a strong passion for machine learning and web development.
I enjoy designing intuitive, high-performance applications and exploring emerging technologies.
Beyond coding, I thrive on solving challenging problems, learning about scalable architectures,
and continuously honing my skills to deliver efficient and elegant solutions.
          </p>
          <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ marginTop: '2rem' }}>Download CV</Button>
        </motion.div>
      </HeroText>
    </motion.div>

    {/* Right Side: The Code Editor Visual */}
    <CodeEditorWrapper initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }}>
      <EditorHeader>
        <WindowDot color="#ff5f56" />
        <WindowDot color="#ffbd2e" />
        <WindowDot color="#27c93f" />
      </EditorHeader>
      <EditorBody>
        <TypeAnimation
            sequence={[
                "def create_solution(problem):\n  # Start with an elegant idea\n  idea = 'Build a responsive React UI'\n\n  # Add some powerful logic\n  logic = 'Integrate with a Python API'\n\n  return f'{idea} + {logic}'",
                5000
            ]}
            speed={80}
            repeat={Infinity}
            cursor={true}
            wrapper="span"
            style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
        />
      </EditorBody>
    </CodeEditorWrapper>
  </HeroSection>
);

export default Hero;