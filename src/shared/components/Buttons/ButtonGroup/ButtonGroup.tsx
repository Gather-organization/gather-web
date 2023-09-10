import { useState } from 'react';
import { Glider, Group, HiddenRadio, Tab } from './styled';

type Props = {
  options: ItemInfo[];
  name: string;
};

interface ItemInfo {
  label: string;
}

const ButtonGroup = ({ name, options }: Props) => {
  const [indexValue, setIndexValue] = useState<number>(0);

  return (
    <Group>
      {options.map(({ label }, index) => {
        return (
          <Item
            key={index}
            name={name}
            index={index}
            label={label}
            setIndexValue={setIndexValue}
          />
        );
      })}
      <Glider indexValue={indexValue} />
    </Group>
  );
};

interface ItemProps extends ItemInfo {
  name: string;
  index: number;
  setIndexValue: (value: number) => void;
}

const Item = (props: ItemProps) => {
  const { name, label, index, setIndexValue } = props;

  const id = `${name}-${index}`;

  return (
    <>
      <HiddenRadio id={id} name={name} onClick={() => setIndexValue(index)} />
      <Tab htmlFor={id}>{label}</Tab>
    </>
  );
};

export default ButtonGroup;
