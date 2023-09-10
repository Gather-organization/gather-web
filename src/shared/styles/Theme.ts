import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  body: '#f6f8fa',
  background: '#FFF',
  border: '#e6e8eb',
  text: '#4f505c',
  disabledText: 'var(--gray-500)',
  disabledBackground: 'var(--gray-50)',
  toggleBorder: '#FFF',

  primary: '#3661ed',
  primaryBackground: '#e6eef9',

  accent: '#7ceca7',
  accentBackgroung: '#ebf9ea',

  hoverBorder: 'var(--gray-400)',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  blurBackground: 'rgba(246, 248, 250, 0.8)',
  glow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
};

export const darkTheme: DefaultTheme = {
  body: '#121212',
  background: '#0b0d11',
  border: '#323232',
  text: '#FAF9F6',

  disabledText: '#5B5B5B',
  disabledBackground: '#242424',

  primary: '#4E93F2',
  primaryBackground: 'rgba(54, 97, 237, 0.1)',

  accent: '#7ceca7',
  accentBackgroung: '#ebf9ea',

  toggleBorder: '#6B8096',
  hoverBorder: 'var(--gray-700)',
  boxShadow:
    'inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02), 0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09)',
  blurBackground: 'rgba(10, 10, 10, 0.8)',
  glow: '0px 0px 50px 18px rgba(124, 236, 167, 0.3)',
};
