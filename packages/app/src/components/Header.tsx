import React from "react";
import { View } from "react-native";
import LogoRow from "./LogoRow";

const Header = () => {
   return (
      <View
         style={{
            paddingVertical: 20,
            paddingHorizontal: 10,
            backgroundColor: "#36263b",
         }}
      >
         <LogoRow />
      </View>
   );
};

export default Header;
