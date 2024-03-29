import styled from 'styled-components';

interface FlexSpaceProps {
  space?: string;
  direction?: 'column' | 'row';
}

export const FlexSpace = styled.div<FlexSpaceProps>`
  display: flex;
  flex-direction: ${(props) => props.direction ?? 'column'};
  gap: ${(props) => props.space ?? '16px'};
`;

export const Fullpage = styled.div`
  background: var(--gray-50);
  height: 100vh;
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 80vw;

  margin: 0 auto;
  padding: 2rem 0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 640px) {
    max-width: 100%;
    padding: 2rem;
  }
`;
