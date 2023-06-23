import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { SideBarData } from 'shared/data/SideBarData';
import { RootState } from 'shared/store';
import { HomeIcon, List, NavBarContainer, NavBarPlaceholder } from './styled';

export const NavBar = () => {
  const [userRoles, setUserRoles] = useState<string[]>([]);

  const roles = useSelector<RootState>((state) => state.auth.roles);

  useEffect(() => {
    const rolesArray: any[] = roles as string[];
    setUserRoles(rolesArray);
  }, [roles]);

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
        </List>
      </NavBarContainer>
    </>
  );
};
