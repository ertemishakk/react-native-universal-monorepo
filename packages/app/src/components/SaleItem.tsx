import React from "react";
import { Text, View } from "react-native";

const SaleItem = ({ item }: { item: SaleItem }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      >
        <Text style={{ flex: 1 }}>
          {item.qty} - {item.itemName}
        </Text>
        <Text>${item.price}</Text>
      </View>

      {item.qty > 1 && (
        <View style={{ marginLeft: 60 }}>
          <Text>${item.price} Each</Text>
        </View>
      )}
    </View>
  );
};

export default SaleItem;
