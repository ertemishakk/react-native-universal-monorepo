import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppSelector } from "../redux-app/hooks";
import getCurrentSale from "../selectors/getCurrentSale";

const Payments = () => {
  const currentSale = useAppSelector(getCurrentSale);

  return (
    <View style={{ alignItems: "center", marginVertical: 10 }}>
      <Text style={styles.totalText}>
        Total: ${currentSale?.subtotal || 100}
      </Text>
    </View>
  );
};

export default Payments;

const styles = StyleSheet.create({
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
});
