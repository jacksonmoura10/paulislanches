import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    width: 100%;
    min-height: 100vh;
    background: #020617;
    color: #ffffff;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  button,
  a {
    cursor: pointer;
  }

  button {
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
  }

  input,
  textarea,
  select {
    font: inherit;
  }

  textarea {
    resize: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #0f172a;
  }

  ::-webkit-scrollbar-thumb {
    background: #22c55e;
    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #16a34a;
  }

  @media (max-width: 768px) {
    html {
      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles;
