import styled, { createGlobalStyle } from 'styled-components';

/**************
  GLOBAL-STYLE
***************/
export const GlobalStyle = createGlobalStyle`
  /* CSS RESET */
  *, *::before, *::after {
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

/**************
  STYLED-COMPONENTS
***************/
// Home
export const HomeWrapper = styled.main`
  width: 100%;
`;
export const HomeHeader = styled.header`
  width: 100%;
  height: 56px;
  line-height: 56px;

  h1 {
    color: var(--color-black);
    font-size: var(--font-size-heading);
    text-align: center;
  }
`;
export const HomeSection = styled.section`
  margin: 56px 0 0 0;
  padding: 0px 16px;
  width: 100%;
  min-height: calc(100% - 176px);

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;

  div,
  img {
    width: 100%;
    font-size: 0;
  }
`;
export const MobileButton = styled.button`
  margin: 16px 0 0 0;
  padding: 0px 16px;
  width: 100%;
  height: 42px;

  color: var(--color-white);
  font-size: var(--font-size-medium);
  background-color: var(--color-grey);
  border-radius: 8px;
`;

// MBTI
export const MbtiWrapper = styled.main`
  padding: 16px;
  width: 100vw;
  min-height: calc(100vh - 64px);
`;

// Question
export const QHeader = styled.header`
  margin: 0 0 56px 0;
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 24px;
  gap: 24px;

  h2, h3 {
    color: var(--color-black);
  }
  h2 {
    font-size: var(--font-size-medium);
  }
  h3 {
    font-size: var(--font-size-heading);
  }
`;

export const QSection = styled.section`
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;
`;

export const QButton = styled.button`
  padding: 8px 16px;
  width: 100%;
  min-height: 58px;
  max-height: 80px;

  color: var(--color-white);
  background-color: var(--color-black);
  border-radius: 8px;
`;

// Result
export const RSectionWrapper = styled.section`
  font-size: 0;

  h1, h2, h3, p {
    text-align: center;
    color: var(--color-black);
  }
  h1 {
    margin: 0 0 16px 0;
    font-size: var(--font-size-medium);
  }
  h2 {
    font-size: var(--font-size-heading);
  }
  h3 {
    margin: 0 0 8px 0;
    font-size: var(--font-size-main);
  }
  p {
    font-size: var(--font-size-medium);
  }

  img.result{
    margin: 8px 0;
    width: 100%;
  }
`;

export const RArticle = styled.article`
  margin: 16px 0;
  padding: 16px 0;
  width: 100%;

  border-top: 1px solid var(--color-black);  
  border-bottom: 1px solid var(--color-black);  
`;

export const URLWrapper = styled.article`
  border-bottom: 1px solid var(--color-black);
`;
export const URLshareWrapper = styled.div`
  margin: 0 0 16px 0;
  width: 100%;

  display: inline-flex;
  flex-direction: row;

  position: relative;

  input[type="text"] {
    flex: 1;
    padding-left: 32px;
    background-color: var(--color-white);
    border-radius: 8px 0 0 8px;
  }
  input[type="text"] + span {
    display: inline-block;
    width: 24px;
    height: 24px;

    position: absolute;
    top: 5px;
    left: 6px;

    font-size: var(--font-size-medium);
    opacity: 0.7;
  }

  input[type="text"], 
  button[type="button"] {
    height: 32px;
  }
  button[type="button"] {
    padding: 0px 16px;
    color: var(--color-white);
    font-size: var(--font-size-medium);
    cursor: copy;

    transition: all 0.4s;
    background-color: var(--color-black-opacity1);
    border-radius: 8px;
    
    &:hover, &:focus, &:active {
      background-color: var(--color-black-opacity4);
    }
  }

`;
export const ImageWrapper = styled.div`
  overflow-x: auto;
`;
export const ImageList = styled.div`
  display: inline-flex;
  flex-direction: row;
  grid-gap: 8px;
  gap: 8px;

  img {
    width: 120px;
    height: 140px;
  }
`;

// Footer
export const FWrapper = styled.footer`
  padding: 8px 16px;
  width: 100%;
  height: 64px;

  address {
    color: var(--color-black);
    font-size: var(--font-size-small);
    word-break: break-all;
  }
`;