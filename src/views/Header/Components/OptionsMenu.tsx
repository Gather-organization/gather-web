import { useRef, useState } from 'react';

import { Dropdown } from 'shared/components';
import { ArrowIcon, IconBackground } from '../styled';

const OptionsMenu = () => {
  const [showOptions, setShowOptions] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setShowOptions(!showOptions);

  return (
    <IconBackground ref={ref} onClick={toggleDropdown}>
      <ArrowIcon $spin={!showOptions} />

      <Dropdown
        visible={showOptions}
        setVisible={setShowOptions}
        ref={ref}
        positionTop="1.1rem"
        positionLeft="-12rem"
      >
        <div>test</div>
      </Dropdown>
    </IconBackground>
  );
};

export default OptionsMenu;
