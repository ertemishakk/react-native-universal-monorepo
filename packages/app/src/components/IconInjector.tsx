import React from "react";
import { Platform } from "react-native";

const IconInjector = () => {
   return Platform.OS === "web" ? (
      <style type="text/css">{`
  @font-face {
    font-family: 'MaterialIcons';
    src: url(${require("react-native-vector-icons/Fonts/MaterialIcons.ttf")}) format('truetype');
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url(${require("react-native-vector-icons/Fonts/FontAwesome.ttf")}) format('truetype');
  }
`}</style>
   ) : null;
};

export default IconInjector;
