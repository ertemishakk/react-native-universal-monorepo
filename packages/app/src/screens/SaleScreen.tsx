import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderBar from "../components/HeaderBar";
import Loyalty from "../components/Loyalty";
import AdvertisingPane from "../panes/AdvertisingPane";
import SalePane from "../panes/SalePane";
import { setLayout } from "../reducers/adsContainer";
import { useAppDispatch } from "../redux-app/hooks";

export const SALE_MODE = "SALE_MODE";

const Sale = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <HeaderBar />
      <Loyalty />
      <View style={styles.paneContainer}>
        <View style={[{ flex: 2 }]}>
          <SalePane />
        </View>
        <View
          style={[{ flex: 3 }]}
          onLayout={(e) =>
            dispatch(
              setLayout({
                height: e.nativeEvent.layout.height,
                width: e.nativeEvent.layout.width,
              })
            )
          }
        >
          <AdvertisingPane />
        </View>
      </View>
    </View>
  );
};

export default Sale;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paneContainer: { margin: 10, flexDirection: "row", flex: 1 },
});
