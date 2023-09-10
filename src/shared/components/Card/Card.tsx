import styled, { css } from 'styled-components';

type CardProps = {
  glow: boolean;
};

const Card: any = styled.div<CardProps>`
  background: ${({ theme }) => theme.background};
  width: 100%;
  margin-top: 1em;
  padding: 1.4em;
  border-radius: var(--radius);
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  box-shadow: ${({ theme }) => theme.boxShadow};

  ${({ glow }) =>
    glow &&
    css`
      box-shadow: ${({ theme }) => theme.glow};
    `}

  @media (max-width: 640px) {
    box-shadow: none;
    border: none;
    background: none;
    margin: 0;
  }
`;

const CardTitle = styled.h1`
  margin-bottom: 0.2em;

  font-weight: 600;
  font-size: 36px;
  font-family: 'Quicksand', sans-serif;

  color: ${({ theme }) => theme.text};

  @media (max-width: 640px) {
    font-size: 30px;
    margin: 0.2em 0 0.6em 0.3em;
  }
`;

Card.Title = CardTitle;

export default Card;
