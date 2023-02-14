import React from "react";
import { View, Image, Dimensions } from "react-native";
import { useAppSelector } from "../redux-app/hooks";
import { IDLE_MODE } from "../screens/IdleScreen";
import { SALE_MODE } from "../screens/SaleScreen";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Advertising = ({ uri }: { uri: string }) => {
  const container = useAppSelector((state) => state.adsContainer);
  const mode = useAppSelector((state) => state.mode);

  return (mode === IDLE_MODE && windowHeight && windowWidth) ||
    (mode === SALE_MODE && container) ? (
    <Image
      source={{
        uri,
        height: mode === IDLE_MODE ? windowHeight : container?.height! - 20,
        width: mode === IDLE_MODE ? windowWidth : container?.width,
      }}
      resizeMode="cover"
    />
  ) : (
    <></>
  );
};

export default Advertising;
