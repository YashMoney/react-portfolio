// src/components/Education.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data';
import SectionHeading from './SectionHeading';

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 700px;
  margin: 0 auto;
`;

const TabsContainer = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const TabList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const Tab = styled.button`
  background: transparent;
  border: none;
  border-left: 2px solid ${({ theme }) => theme.colors.lightestNavy};
  padding: 1rem;
  text-align: left;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.green : theme.colors.slate)};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: ${({ theme }) => theme.colors.lightNavy};
    color: ${({ theme }) => theme.colors.green};
  }
`;

const TabContent = styled(motion.div)`
  padding-left: 2rem;
  flex: 1;
`;

const Education = () => {
  const [activeTab, setActiveTab] = useState(0);

  const educationTabs = [
    { name: "University", data: portfolioData.education[0] },
    { name: "School", data: portfolioData.education[1] }
  ];

  return (
    <Section id="education">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <SectionHeading>Education</SectionHeading>
        <TabsContainer>
          <TabList>
            {educationTabs.map((tab, index) => (
              <Tab key={index} isActive={activeTab === index} onClick={() => setActiveTab(index)}>
                {tab.name}
              </Tab>
            ))}
          </TabList>
          <AnimatePresence mode="wait">
            <TabContent
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{educationTabs[activeTab].data.degree} @ <span>{educationTabs[activeTab].data.institution}</span></h3>
              <p>{educationTabs[activeTab].data.duration}</p>
              <p>CGPA: {educationTabs[activeTab].data.cgpa}</p>
            </TabContent>
          </AnimatePresence>
        </TabsContainer>
      </motion.div>
    </Section>
  );
};

export default Education;