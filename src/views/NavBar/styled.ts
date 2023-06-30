import { BiHome } from 'react-icons/bi';
import styled, { css } from 'styled-components';

export const NavBarPlaceholder = styled.div`
  height: 100%;
  max-width: 200px;
  min-width: 200px;
  flex: 1;
`;

export const NavBarContainer = styled.div`
  position: fixed;

  height: 100%;
  width: 200px;
  max-height: 95vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  padding: 1rem;
  padding-right: 0;
`;

export const List = styled.div`
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

  background: rgba(246, 248, 250, 0.75);
  background: rgba(255, 255, 255, 0.9);
`;

const iconCss = css`
  width: 90%;
  height: 40px;

  padding: 6px;
  border-radius: 8px;

  color: ${({ theme }) => theme.accent};
  background-color: ${({ theme }) => theme.accentBackground};
  border: 2px solid ${({ theme }) => theme.accentBackground};

  cursor: pointer;

  transition: all 400ms ease;

  :hover {
    border: 2px solid #becdfa;
  }

  :active {
    border: 2px solid ${({ theme }) => theme.accent};
  }
`;

export const HomeIcon = styled(BiHome)`
  ${iconCss}
  float: left;
`;
