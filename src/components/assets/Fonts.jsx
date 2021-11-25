import {createGlobalStyle} from "styled-components";

import AlegreyaBoldWoff from "../../fonts/Alegreya-Bold.woff";
import AlegreyaRegularWoff from "../../fonts/Alegreya-Regular.woff";
import JosefinSansSemiBold from "../../fonts/JosefinSans-SemiBold.woff";
import JosefinSansItalic from "../../fonts/JosefinSans-Italic.woff";
import JosefinSansBold from "../../fonts/JosefinSans-Bold.woff";
import JosefinSansRegular from "../../fonts/JosefinSans-Regular.woff";
import AbrilFatfaceRegular from "../../fonts/AbrilFatface-Regular.woff";

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Alegreya-Bold';
    src: url(${AlegreyaBoldWoff}) format('woff'),
  }
  @font-face {
    font-family: 'Alegreya-Regular';
    src: url(${AlegreyaRegularWoff}) format('woff');
  }
  @font-face {
    font-family: 'JosefinSans-SemiBold';
    src: url(${JosefinSansSemiBold}) format('woff');
  }
  @font-face {
    font-family: 'JosefinSans-Bold';
    src: url(${JosefinSansBold}) format('woff');
  }
  @font-face {
    font-family: 'JosefinSans-Italic';
    src: url(${JosefinSansItalic}) format('woff');
  }
  @font-face {
    font-family: 'JosefinSans-Regular';
    src: url(${JosefinSansRegular}) format('woff');
  }
  @font-face {
    font-family: 'AbrilFatface-Regular';
    src: url(${AbrilFatfaceRegular}) format('woff');
  }
`;

export default Fonts;