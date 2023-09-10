import patterns from 'shared/assets/images/patternpad.svg';
import styled from 'styled-components';

export const SignInBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  background: url(${patterns}) no-repeat center center;
  background-size: cover;
`;

export const SignInInfo = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SignInForm = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 44rem;

  background: rgba(250, 250, 250, 0.5);
  backdrop-filter: blur(50px);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6rem;

  @media (max-width: 900px) {
    width: 80vw;
    margin: auto;
    background: none;
    backdrop-filter: none;
  }
`;

export const SignInImage = styled.img`
  width: 140%;
`;

export const SignInFormContent = styled.div`
  width: 60%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10vh;

  @media (max-width: 900px) {
    background: rgba(250, 250, 250, 0.5);
    backdrop-filter: blur(50px);
    width: 90vw;
    padding: 16vh 3rem;
    border-radius: var(--radius);
  }
`;

export const SignInTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;

  color: var(--gray-700);
`;

export const SignInInputs = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ErrorNote = styled.span`
  position: relative;
  width: 100%;
  left: 2px;

  font-size: 16px;
  text-align: left;
  font-weight: 500;

  color: var(--error);
`;

interface LinkProps {
  secondary?: boolean;
}

export const LinkButton = styled.a<LinkProps>`
  text-decoration: underline;
  text-decoration-thickness: 2px;
  font-size: 16px;
  font-weight: bold;

  color: ${({ theme }) => theme.accent};
`;

export const RegisterInfo = styled.span`
  margin-left: 4px;

  display: flex;
  gap: 4px;

  color: var(--gray-700);
  font-weight: 500;
`;

export const Test = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 400px;
  width: 400px;

  background-color: red;
  z-index: 20;
`;
