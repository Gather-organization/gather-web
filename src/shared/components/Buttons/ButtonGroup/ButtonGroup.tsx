import { useEffect, useState } from 'react';
import { Glider, Group, HiddenRadio, Tab } from './styled';

type Props = {
  options: ItemInfo[];
  name: string;
  currentValue: string;
  setValue: (value: string) => void;
};

interface ItemInfo {
  label: string;
}

const ButtonGroup = ({ name, options, setValue, currentValue }: Props) => {
  const [indexValue, setIndexValue] = useState<number>(0);

  useEffect(() => {
    const index = options.findIndex(
      (options) => options.label === currentValue
    );
    setIndexValue(index);
  }, [currentValue]);

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
            setValue={setValue}
            currentValue={currentValue}
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
  currentValue: string;
  setIndexValue: (value: number) => void;
  setValue: (value: string) => void;
}

const Item = (props: ItemProps) => {
  const { name, label, index, currentValue, setIndexValue, setValue } = props;

  const id = `${name}-${index}`;

  const updateValueHandler = () => {
    setIndexValue(index);
    setValue(label);
  };

  return (
    <>
      <HiddenRadio
        id={id}
        name={name}
        onClick={() => updateValueHandler()}
        checked={currentValue === label}
      />
      <Tab htmlFor={id}>{label}</Tab>
    </>
  );
};

export default ButtonGroup;
