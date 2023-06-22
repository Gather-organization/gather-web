import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SideBarData } from 'shared/data/SideBarData';
import { RootState, authActions } from 'shared/store';
import { Header, HomeIcon, NavBarContainer, NavBarPlaceholder } from './styled';

export const NavBar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [userRoles, setUserRoles] = useState<string[]>([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector<RootState>((state) => state.auth.isAuthenticated);
  const roles = useSelector<RootState>((state) => state.auth.roles);

  const toggleDropdown = () => setNavMenu(!navMenu);
  const logoutHandler = () => dispatch(authActions.signOut());

  const ref = useRef<HTMLDivElement>(null);

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
        <Header>
          <HomeIcon />
          <div>test</div>
          <div>test</div>
        </Header>
      </NavBarContainer>
    </>
  );
};
