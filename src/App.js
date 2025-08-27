// src/App.js
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';

// Import components
import Navbar from './components/Navbar';
// SideLinks component is now REMOVED
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const MainContent = styled.main`
  padding: 0 150px;
  @media (max-width: 1080px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0 25px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        {/* The SideLinks component has been removed from here */}
        <MainContent>
          <Hero />
          <Education />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </MainContent>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;