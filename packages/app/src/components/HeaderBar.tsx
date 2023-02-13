import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderImage from "./HeaderImage";
import HeaderTitle from "./HeaderTitle";
import { useAppSelector } from "../redux-app/hooks";

const HeaderBar = () => {
  const headerLogo = useAppSelector((state) => state.config.headerLogo);

  return (
    <View style={styles.container}>
      {headerLogo ? <HeaderImage /> : <HeaderTitle />}
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "aqua",
    alignItems: "center",
    justifyContent: "center",
  },
});
