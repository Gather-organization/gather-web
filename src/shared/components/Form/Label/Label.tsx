import styled from 'styled-components';

export const Label = styled.label`
  padding-left: 0.1em;

  font-size: 18px;
  font-weight: 500;

  color: ${({ theme }) => theme.text};
`;
