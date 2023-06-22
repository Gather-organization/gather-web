import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { ButtonLink } from 'shared/components';
import { Dropdown } from 'shared/components/Dropdown/Dropdown';
import {
  DropdownDivider,
  DropdownItem,
} from 'shared/components/Dropdown/styled';
import { SideBarData } from 'shared/data/SideBarData';
import { RootState, authActions } from 'shared/store';
import {
  HeaderColumn1,
  HeaderColumn2,
  HeaderColumn3,
  HeaderStyled,
  HeaderTitle,
  IconBackground,
  MenuIcon,
} from './styled';

export const Header = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [userRoles, setUserRoles] = useState<any[]>([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector<RootState>((state) => state.auth.isAuthenticated);
  const roles = useSelector<RootState>((state) => state.auth.roles);

  const toggleDropdown = () => setNavMenu(!navMenu);
  const logoutHandler = () => dispatch(authActions.signOut());

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rolesArray: any[] = roles as any[];
    setUserRoles(rolesArray);
  }, [roles]);

  return (
    <HeaderStyled>
      <HeaderColumn1>
        <IconBackground ref={ref} onClick={toggleDropdown}>
          <MenuIcon />
          <Dropdown
            visible={navMenu}
            setVisible={setNavMenu}
            ref={ref}
            positionTop="1.1em"
            positionLeft="-1em"
          >
            {SideBarData.map(({ title, path, roles }, index) => {
              if (roles)
                if (!roles?.some((element) => userRoles.includes(element)))
                  return <React.Fragment key={index}></React.Fragment>;

              return (
                <React.Fragment key={index}>
                  <DropdownItem
                    as={Link}
                    to={path}
                    onClick={() => setNavMenu(false)}
                  >
                    <span>{title}</span>
                  </DropdownItem>
                  {index !== SideBarData.length - 1 && <DropdownDivider />}
                </React.Fragment>
              );
            })}
          </Dropdown>
        </IconBackground>
      </HeaderColumn1>
      <HeaderColumn2>
        <HeaderTitle as={Link} to={'/'}>
          Gather
        </HeaderTitle>
      </HeaderColumn2>
      <HeaderColumn3>
        {auth ? (
          <ButtonLink onClick={() => logoutHandler()}>Sair</ButtonLink>
        ) : (
          <ButtonLink onClick={() => navigate('/login')}>Login</ButtonLink>
        )}
      </HeaderColumn3>
    </HeaderStyled>
  );
};
