import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  error?: boolean;
}

export const SDateInput = styled(DatePicker)<Props>`
  --box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  width: 100%;
  height: 3.2rem;
  padding: 0.6em;
  margin-top: 0.4em;
  border-radius: var(--radius);
  box-sizing: border-box;

  font-size: 16px;

  transition: 0.4s;
  outline: none;
  color: ${({ error, theme: { text } }) => (error ? 'var(--error)' : text)};
  border: 2px solid
    ${({ error, theme }) => (error ? 'var(--error)' : theme.border)};

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow};
    border: 2px solid ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.text};
  }

  .react-datepicker__input-container {
    > input {
      &::placeholder {
        color: var(--error);
      }
    }
  }
`;
