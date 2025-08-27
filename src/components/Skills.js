// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import SectionHeading from './SectionHeading';

const Section = styled.section` /* ... same as before ... */ `;
const SkillsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 1rem;
`;

const SkillItem = styled(motion.li)`
  position: relative;
  padding-left: 20px;
  font-family: ${({ theme }) => theme.fonts.code};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.green};
  }
`;

const Skills = () => {
  const allSkills = [...portfolioData.skills.languages, ...portfolioData.skills.tools, ...portfolioData.skills.database];
  return (
    <Section id="skills">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <SectionHeading>Skills</SectionHeading>
        <SkillsList variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {allSkills.map(skill => (
            <SkillItem key={skill} variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}>
              {skill}
            </SkillItem>
          ))}
        </SkillsList>
      </motion.div>
    </Section>
  );
};

export default Skills;