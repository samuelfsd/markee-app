import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    black: '#1E293B',
    lightBlack: '#292445',
    gray: '#E4E5E7',
    white: '#FAFAFA',
    primary: '#1FC8E1',
    secondary: '#2DD4BF',
  },
};

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'DM Sans', sans-serif;
  }
  
`;
