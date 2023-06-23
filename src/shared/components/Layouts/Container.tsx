import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  height: 100%;

  flex: 1;
  display: flex;

  /* background: ${({ theme }) => theme.body}; */

  padding: 1rem;
`;

export const ContainerContent = styled.div`
  flex: 1;
  border-radius: var(--radius);
  background: ${({ theme }) => theme.background};
`;

type Props = {
  children: JSX.Element;
};

const Container = ({ children }: Props) => {
  return (
    <ContainerWrapper>
      <ContainerContent>{children}</ContainerContent>
    </ContainerWrapper>
  );
};

export default Container;
