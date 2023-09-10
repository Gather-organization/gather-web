import styled from 'styled-components';

type Props = {
  indexValue: number;
};

export const Glider = styled.span<Props>`
  position: absolute;
  z-index: 2;

  display: flex;

  height: 2rem;
  width: 4rem;

  background-color: ${({ theme }) => theme.accentBackground};
  border-radius: 99px;

  transition: 0.25s ease-out;
  transform: translateX(${({ indexValue }) => indexValue * 100}%);
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  z-index: 10;
  opacity: 0;
`;

export const Group = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  padding: 0.3rem;
  background-color: ${(props) => props.theme.background};
  border-radius: var(--radius);

  * {
    z-index: 1;
  }
`;

export const Tab = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 4rem;

  font-size: 1rem;
  font-weight: bold;

  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;

  z-index: 3;

  ${HiddenRadio}:checked + & {
    color: ${({ theme }) => theme.accent};
  }
`;
