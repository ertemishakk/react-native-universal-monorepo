import React from "react";
import { View } from "react-native";
import { useAppSelector } from "../redux-app/hooks";
import getCurrentSaleItems from "../selectors/getCurrentSaleItems";
import SaleItem from "./SaleItem";

const Payments = () => {
  const items = useAppSelector(getCurrentSaleItems);
  return (
    <View style={{ flex: 1 }}>
      {items?.map((item, index) => (
        <SaleItem item={item} key={index} />
      ))}
    </View>
  );
};

export default Payments;
