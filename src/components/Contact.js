// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from './Button';

const ContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  padding: 4rem 2rem;
`;

const ContactTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem); /* Made title bigger */
  color: ${({ theme }) => theme.colors.lightestSlate};
  margin-bottom: 1.5rem;
`;

/* The numbered h4 component has been removed */

const Contact = () => (
  <ContactSection id="contact">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* The "What's Next" heading is gone */}
      <ContactTitle>Get In Touch</ContactTitle>
      <p style={{ marginBottom: '2.5rem' }}>
        My inbox is always open. Whether you have a question, a potential opportunity, or just want to say hi, I’ll get back to you!
      </p>
      <Button href="mailto:khati2212yash@gmail.com">
        Say Hello
      </Button>
    </motion.div>
  </ContactSection>
);

export default Contact;