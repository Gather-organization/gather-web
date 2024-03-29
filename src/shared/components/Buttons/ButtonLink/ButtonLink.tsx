import styled from 'styled-components';

interface Props {
  secondary?: boolean;
}

export const ButtonLink = styled.a<Props>`
  display: block;
  position: relative;
  margin: 0 1em;
  padding: 0.3em;

  text-decoration: none;
  font-size: 16px;
  font-weight: 700;

  color: ${({ secondary, theme }) =>
    secondary ? theme.accent : theme.primary};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: currentColor;
    opacity: 1;

    transform: scale(0);
    transition: all 250ms ease-in;
  }
  &:hover::after,
  &:focus::after {
    transform: scale(1);
  }

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;
