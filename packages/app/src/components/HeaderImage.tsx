import React from "react";
import { Image, StyleSheet } from "react-native";
import { useAppSelector } from "../redux-app/hooks";

const HeaderImage = () => {
  const logo = useAppSelector((state) => state.config.headerLogo);
  return (
    <Image
      resizeMode="contain"
      style={styles.image}
      source={{
        uri: logo!,
      }}
    />
  );
};

export default HeaderImage;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 70,
  },
});
