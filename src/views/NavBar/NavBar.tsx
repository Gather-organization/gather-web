import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { SideBarData } from 'shared/data/SideBarData';
import { useRoles } from 'shared/hooks';

import { HomeIcon, List, NavBarContainer, NavBarPlaceholder } from './styled';

export const NavBar = () => {
  const { userRoles } = useRoles();

  useEffect(() => {
    const data = SideBarData.filter(
      (sbd) => !sbd.roles || sbd.roles.includes(userRoles[0])
    );
  }, [userRoles]);

  return (
    <>
      <NavBarPlaceholder />
      <NavBarContainer>
        <List>
          <HomeIcon />
          <div>test</div>
          <div>test</div>
          <Link to="signup">sign up</Link>
        </List>
      </NavBarContainer>
    </>
  );
};
