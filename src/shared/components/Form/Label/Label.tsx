import styled from 'styled-components';

export const Label = styled.label`
  padding-left: 0.1em;

  font-size: 1.25rem;
  font-weight: bold;

  color: ${({ theme }) => theme.text};
`;
