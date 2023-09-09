import { Outlet } from 'react-router';
import styled from 'styled-components';

import { Header, NavBar } from 'views';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  background: rgba(150, 150, 150, 0.3);
  backdrop-filter: blur(50px);
`;

const ContentWrapper = styled.div`
  width: 100%;
  width: 100%;

  flex: 1;

  display: flex;
  flex-direction: row;
`;

const ContentLayout = () => {
  return (
    <Container>
      <Header />
      <ContentWrapper>
        <NavBar />
        <Outlet />
      </ContentWrapper>
    </Container>
  );
};

export default ContentLayout;
