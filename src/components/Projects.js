// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaFolder } from 'react-icons/fa';
import { portfolioData } from '../data';
import SectionHeading from './SectionHeading';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

// --- THIS IS THE UPDATED COMPONENT ---
const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.lightNavy};
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  border: 1px solid transparent; /* Prepare for border color change */
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease-in-out; /* Animate all properties for a smooth effect */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-7px); /* Slightly decreased lift for a more subtle feel */
    /* Add the glowing border and shadow effect */
    border-color: ${({ theme }) => theme.colors.green}40;
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.green}20;
  }
`;
// --- END OF UPDATED COMPONENT ---


const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  .folder {
    color: ${({ theme }) => theme.colors.green};
    font-size: 2.5rem;
  }

  .links a {
    color: ${({ theme }) => theme.colors.slate};
    font-size: 1.5rem;
    margin-left: 1rem;
    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

const CardBody = styled.div`
  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.lightestSlate};
  }
  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.lightSlate};
  }
`;

const TechList = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

// Framer Motion Variants
const gridContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const gridItem = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => (
  <ProjectsSection id="projects">
    <SectionHeading>Projects I've Built</SectionHeading>
    <ProjectsGrid
      variants={gridContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {portfolioData.projects.map((project, index) => (
        <ProjectCard key={index} variants={gridItem}>
          {/* This is the full JSX that was missing */}
          <div>
            <CardHeader>
              <div className="folder">
                <FaFolder />
              </div>
              <div className="links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Link"
                >
                  <FaGithub />
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <h3>{project.title}</h3>
              <p>{project.description.join(' ')}</p>
            </CardBody>
          </div>
          <TechList>
            {project.technologies.map((tech, i) => (
              <span key={i} className="tech-tag">
                {tech}
              </span>
            ))}
          </TechList>
        </ProjectCard>
      ))}
    </ProjectsGrid>
  </ProjectsSection>
);

export default Projects;