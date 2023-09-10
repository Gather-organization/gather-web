import { useEffect, useRef, useState } from 'react';

import { ThemeOptions } from 'shared/Types';
import { ButtonGroup, Dropdown } from 'shared/components';
import themes from 'shared/data/themes';
import { useTheme } from 'shared/hooks';
import { ArrowIcon, IconBackground } from '../styled';

const OptionsMenu = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { theme, setTheme } = useTheme();
  const [themeMode, setThemeMode] = useState<string>(theme);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTheme(themeMode as ThemeOptions);
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
          currentValue={theme}
        />
      </Dropdown>
    </IconBackground>
  );
};

export default OptionsMenu;
