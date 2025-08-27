// src/components/Achievements.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Import motion
import { portfolioData } from '../data';
import SectionHeading from './SectionHeading'; // Use the new heading

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 700px;
  margin: 0 auto;
`;

const AchievementList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const AchievementItem = styled(motion.li)`
  position: relative;
  padding-left: 25px;
  color: ${({ theme }) => theme.colors.slate};

  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.green};
  }
`;

const Achievements = () => (
  <Section id="achievements">
    {/* Use the new motion animation instead of FadeIn */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading>Achievements & Accomplishments</SectionHeading>
      <AchievementList
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {portfolioData.achievements.map((item, index) => (
          <AchievementItem
            key={index}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {item}
          </AchievementItem>
        ))}
      </AchievementList>
    </motion.div>
  </Section>
);

export default Achievements;