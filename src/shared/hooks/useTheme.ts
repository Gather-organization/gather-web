import { useEffect } from 'react';

import { ThemeModes, ThemeOptions } from 'shared/Types';
import {
  updateMode,
  updateTheme as updateThemeSelector,
} from 'shared/store/theme';
import { useAppDispatch, useAppSelector } from './reduxHooks';

const useTheme = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(({ theme }) => theme.mode);
  const option = useAppSelector(({ theme }) => theme.option);

  const setTheme = (theme: ThemeOptions) => {
    dispatch(updateThemeSelector(theme));
    window.localStorage.setItem('theme_option', theme);
  };

  const setMode = (mode: ThemeModes) => {
    window.localStorage.setItem('theme_mode', mode);
    dispatch(updateMode(mode));
    updateTheme(mode);
  };

  const autoTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'Dark'
      : 'Light';

  const updateTheme = (mode: ThemeModes) => {
    const updatedTheme = (mode === 'Auto' ? autoTheme() : mode) as ThemeOptions;

    setTheme(updatedTheme);
  };

  useEffect(() => {
    updateTheme(mode);
    //eslint-disable-next-line
  }, []);

  return { theme: option, setTheme, setMode, mode };
};

export default useTheme;
