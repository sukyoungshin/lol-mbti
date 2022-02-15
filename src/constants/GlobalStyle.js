import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* CSS RESET */
  *, *::before, *::after {
    font-size: 0;
    box-sizing: border-box;
  }
  html, body{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  #root {
    height: 100%;
  }
  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  input, button {
    border: none;
    outline: none;
  }

  /* BACKGROUND-COLOR */
  body {
    background-color: var(--color-bgcolor);    
  }
  /* FONT-FAMILY */
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  /* FONT-SIZE & COLOR */
  html {
    --font-size-heading : 22px;
    --font-size-main : 16px;
    --font-size-medium : 14px;
    --font-size-small: 12px;

    --color-white: #ffffff;      
    --color-bgcolor: #F5F5F5;
    --color-light-grey: #F6F6F6;
    --color-grey: #C5C5C5;
    --color-black: #333333;

    --color-black-opacity1: rgba(0,0,0,0.1);
    --color-black-opacity4: rgba(0,0,0,0.4);
  }
  // MOBILE
  @media all and (max-width: 450px) {
  }
  // TABLET
  // DESKTOP
`;