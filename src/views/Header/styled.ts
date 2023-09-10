import { FaBars } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import styled, { css } from 'styled-components';

export const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: [column1] 28% [column2] 42% [column3] 28%;
  align-items: center;
  justify-content: center;
  height: 5vh;

  background: ${({ theme }) => theme.blurBackground};
  backdrop-filter: blur(8px);

  min-width: 100vw;
`;

export const HeaderColumn1 = styled.div`
  grid-column: column1;
`;

export const HeaderColumn2 = styled.div`
  grid-column: column2;
  display: flex;
  justify-content: center;
`;

export const HeaderColumn3 = styled.div`
  grid-column: column3;
  display: flex;
  justify-content: flex-end;
`;

export const HeaderTitle = styled.a`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  padding: 0.4em;

  color: var(--purple-500);
  color: ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    font-size: 25px;
  }
`;

export const IconBackground = styled.div`
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.3s;

  &:active {
    background: ${({ theme }) => theme.primaryBackground};
    border-radius: 100%;
  }
`;

const iconCss = css`
  width: 1.4em;
  height: 1.4em;

  color: ${({ theme }) => theme.primary};

  cursor: pointer;
`;

export const MenuIcon = styled(FaBars)`
  ${iconCss}
  float: left;
`;

type IconProps = {
  $spin: boolean;
};

export const ArrowIcon = styled(IoIosArrowDown)<IconProps>`
  ${iconCss}

  transition: all ease-in-out 0.3s;

  ${(props) =>
    props.$spin &&
    css`
      transform: rotate(90deg);
    `}
`;
