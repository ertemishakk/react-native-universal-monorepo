import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Payments from "../components/Payments";
import SaleItems from "../components/SaleItems";
import { setCurrentSale } from "../reducers/currentSale";
import { useAppDispatch } from "../redux-app/hooks";

const SalePane = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setCurrentSale({
        tableName: "T1",
        pax: "1",
        subtotal: "12.50",
        cashRounding: "0",
        balance: "0",
        paid: "0",
        customerName: "Phillip",
        loyaltyBalance: "1234",
        items: [
          {
            qty: 1,
            level: 1,
            itemName: "Wagyu burger",
            price: "20.50",
            total: "20.50",
            style: {
              qty: "normal",
              itemName: "normal",
              price: "normal",
              total: "normal",
            },
          },
          {
            qty: 2,
            level: 1,
            itemName: "Wagyu burger",
            price: "20.50",
            total: "20.50",
            style: {
              qty: "normal",
              itemName: "normal",
              price: "normal",
              total: "normal",
            },
          },
        ],
        payments: [
          {
            description: "VISA",
            amountSettled: "12.50",
            tip: "0",
            amountTendered: "12.50",
            changeGiven: "0",
          },
        ],
      })
    );
  }, []);
  return (
    <View
      style={[{ flex: 1, backgroundColor: "white" }, styles.containerMargin]}
    >
      <SaleItems />
      <Payments />
    </View>
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
