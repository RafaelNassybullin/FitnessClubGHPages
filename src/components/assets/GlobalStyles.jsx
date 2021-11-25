import {createGlobalStyle} from 'styled-components'
const GlobalStyles = createGlobalStyle`
  
  :root {
    --v: 1;
    --nav-color:#011B3C;
    --button-color:#01FCAE;
    --red:#FF2625;
    --white:#FFFAFB;
    --dark:#3A1212;
  }
  @media (max-width: 433px) {
    :root {
      --v: 2;
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::selection {
    background: #FBD15C;
  }

  body {
    font-family: JosefinSans-Regular, sans-serif;
    overflow-x:hidden ;
    position: relative;
    background: #FFFAFB;
    //background: #000;
    color: #837171;
  }

  ul {
    list-style: none;
  }
  button {
    width: 12.500vw;
    height: 3.625vw;
    border-radius: 50vw;
    font-size: 1.375vw;
    background: #FF2625;
    border: 0.188vw solid #FF2625;
    outline: none;
    font-family: Alegreya-Regular, sans-serif;
    color: #FFFAFB;
    margin-right: 1.812vw;
    cursor: pointer;
    box-shadow:  0 2.500vw 7.500vw #FFA9A975;
    &:hover {
      background: #FFFAFB;
      color: #3A1212;
    }
  }
`
export default GlobalStyles