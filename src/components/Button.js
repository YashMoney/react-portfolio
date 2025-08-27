// src/components/Button.js
import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.green};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme.fonts.code};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    outline: none;
  }
`;

export default Button;