import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body {
    background-color: #F6F4F6;
    color: #5F1478;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font-family: 'MuliRegular', serif;
    font-size: 1rem;
  }
  
  h1, h2, h3, h4, h5, strong {
    font-family: 'MuliBold', serif;
    font-weight: 400;
  }
  
  button {
    cursor: pointer;
  }
`;
