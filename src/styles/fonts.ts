import { createGlobalStyle } from 'styled-components';

import MuliLight from '../assets/fonts/Muli-Light.ttf';
import MuliRegular from '../assets/fonts/Muli-Regular.ttf';
import MuliBold from '../assets/fonts/Muli-Bold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: "MuliLight";
    src: url(${MuliLight});
    font-weight: 100;
    font-style: normal;
  }
  
  @font-face {
    font-family: "MuliRegular";
    src: url(${MuliRegular});
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: "MuliBold";
    src: url(${MuliBold});
    font-weight: 700;
    font-style: normal;
  }
`;
