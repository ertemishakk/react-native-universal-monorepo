import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderTitle = () => {
  return (
    <View>
      <Text style={styles.title}>Welcome To Pizza Club</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
