import { BiHome } from 'react-icons/bi';
import styled, { css } from 'styled-components';

export const NavBarPlaceholder = styled.div`
  height: 100%;
  width: 200px;
  flex: 1;
`;

export const NavBarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 200px;
  max-height: 95vh;

  padding: 1rem;
  flex: 1;

  position: fixed;
`;

export const Header = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme }) => theme.background};

  border-radius: var(--radius);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 10px;
`;

export const HeaderTitle = styled.a`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  padding: 0.4em;

  color: ${({ theme }) => theme.accent};

  @media (max-width: 640px) {
    font-size: 25px;
  }
`;

const iconCss = css`
  width: 90%;
  height: 40px;

  padding: 6px;
  border-radius: 8px;

  color: ${({ theme }) => theme.accent};
  background-color: ${({ theme }) => theme.accentBackground};

  cursor: pointer;
`;

export const HomeIcon = styled(BiHome)`
  ${iconCss}
  float: left;
`;
