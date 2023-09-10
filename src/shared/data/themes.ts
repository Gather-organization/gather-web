import { ThemeModes } from 'shared/Types';

type ThemeMode = { label: ThemeModes };

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
