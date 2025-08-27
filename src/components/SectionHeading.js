// src/components/SectionHeading.js
import styled from 'styled-components';

const StyledHeading = styled.h2`
  display: flex;
  align-items: center;
  font-size: clamp(1.8rem, 4vw, 2.2rem); /* Slightly larger for more impact */
  color: ${({ theme }) => theme.colors.lightestSlate};
  margin-bottom: 2.5rem; /* More space after the heading */
  width: 100%;

  /* The numbering pseudo-element has been completely removed */

  /* The line after the heading */
  &:after {
    content: '';
    display: block;
    flex-grow: 1;
    height: 1px;
    margin-left: 20px;
    background-color: ${({ theme }) => theme.colors.lightestNavy};
  }
`;

export default StyledHeading;