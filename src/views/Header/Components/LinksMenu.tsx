import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Dropdown, DropdownDivider, DropdownItem } from 'shared/components';
import { SideBarData } from 'shared/data/SideBarData';
import { IconBackground, MenuIcon } from '../styled';

type Props = {
  userRoles: string[];
};

const LinksMenu = ({ userRoles }: Props) => {
  const [navMenu, setNavMenu] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setNavMenu(!navMenu);

  return (
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
  );
};

export default LinksMenu;
