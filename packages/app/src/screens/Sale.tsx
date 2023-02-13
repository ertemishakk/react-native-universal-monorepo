import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderBar from "../components/HeaderBar";

export const SALE_MODE = "SALE_MODE";

const Sale = () => {
  return (
    <View style={styles.container}>
      <HeaderBar />
    </View>
  );
};

export default Sale;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});
