import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
    border: string;
    main: string;
    accent: string;
    accentBackground: string;
    hoverBorder: string;
    disabledText: string;
    boxShadow: string;
    disabledBackground: string;
    blurBackground: string;
  }
}
