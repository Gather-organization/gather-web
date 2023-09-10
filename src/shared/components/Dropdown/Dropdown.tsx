import React, { useEffect } from 'react';
import { DropdownBody, DropdownContainer } from './styled';
interface Props {
  children: JSX.Element[] | JSX.Element;
  positionTop?: string;
  positionLeft?: string;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = React.forwardRef((props: Props, ref: any) => {
  const { children, positionTop, positionLeft, visible, setVisible } = props;

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) setVisible(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  });

  return (
    <>
      {visible && (
        <DropdownContainer>
          <DropdownBody positionTop={positionTop} positionLeft={positionLeft}>
            {React.Children.map(children, (child, index) => {
              return child.props.name
                ? React.createElement(child.type, {
                    ...{
                      ...child.props,
                      key: index,
                    },
                  })
                : child;
            })}
          </DropdownBody>
        </DropdownContainer>
      )}
    </>
  );
});

export default Dropdown;
