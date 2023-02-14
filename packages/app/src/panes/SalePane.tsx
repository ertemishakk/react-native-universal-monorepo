import React from "react";
import { StyleSheet, View } from "react-native";
import { useAppSelector } from "../redux-app/hooks";

const SalePane = () => {
  return (
    <View
      style={[{ flex: 1, backgroundColor: "white" }, styles.containerMargin]}
    ></View>
  );
};

export default SalePane;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMargin: {
    margin: 10,
  },
});
