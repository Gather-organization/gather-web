import { ThemeOptions } from 'shared/Types';

type ThemeMode = { label: ThemeOptions };

const themeModes: ThemeMode[] = [
  {
    label: 'Light',
  },
  {
    label: 'Dark',
  },
  {
    label: 'Auto',
  },
];

export default themeModes;
