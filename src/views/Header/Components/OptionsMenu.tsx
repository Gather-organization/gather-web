import { useEffect, useRef, useState } from 'react';

import { ThemeModes } from 'shared/Types';
import { ButtonGroup, Dropdown } from 'shared/components';
import themes from 'shared/data/themes';
import { useTheme } from 'shared/hooks';
import { ArrowIcon, IconBackground } from '../styled';

const OptionsMenu = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { mode, setMode } = useTheme();
  const [themeMode, setThemeMode] = useState<string>(mode);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMode(themeMode as ThemeModes);
    //eslint-disable-next-line
  }, [themeMode]);

  const toggleDropdown = () => setShowOptions(!showOptions);

  return (
    <IconBackground ref={ref}>
      <ArrowIcon $spin={!showOptions} onClick={toggleDropdown} />

      <Dropdown
        visible={showOptions}
        setVisible={setShowOptions}
        ref={ref}
        positionTop="1.1rem"
        positionLeft="-12rem"
      >
        <ButtonGroup
          name="theme"
          options={themes}
          setValue={setThemeMode}
          currentValue={mode}
        />
      </Dropdown>
    </IconBackground>
  );
};

export default OptionsMenu;
