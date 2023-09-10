import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;

    toggleBorder: string;
    background: string;

    border: string;

    primary: string;
    primaryBackground: string;

    accent: string;
    accentBackgroung: string;

    disabledText: string;
    disabledBackground: string;

    hoverBorder: string;
    boxShadow: string;
    blurBackground: string;
    glow: string;
  }
}
