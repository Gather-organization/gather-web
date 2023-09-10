import { useEffect } from 'react';
import { ThemeOptions } from 'shared/Types';
import { updateTheme } from 'shared/store/theme';
import { useAppDispatch, useAppSelector } from './reduxHooks';

const useTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(({ theme }) => theme.mode);

  const setTheme = (theme: ThemeOptions) => {
    dispatch(updateTheme(theme));
    window.localStorage.setItem('theme', theme);
  };

  const autoTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'Dark'
      : 'Light';

  const manualTheme = () =>
    window.localStorage.getItem('theme')! as ThemeOptions;

  const checkTheme = () => {
    console.log(theme);
    const updatedTheme = (
      theme === 'Auto' ? autoTheme() : manualTheme()
    ) as ThemeOptions;

    setTheme(updatedTheme);

    window.localStorage.setItem('theme', updatedTheme);
  };

  useEffect(() => {
    checkTheme();
    //eslint-disable-next-line
  }, []);

  return { theme, setTheme };
};

export default useTheme;
