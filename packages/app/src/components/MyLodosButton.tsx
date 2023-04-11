import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Touchable from "./Touchable";
import { Icon } from "@rneui/themed";

const MyLodosButton = () => {
   return (
      <Touchable>
         <View style={styles.container}>
            <Icon name="person" color="white" size={18} />
            <Text style={styles.text}>My Lodos</Text>
         </View>
      </Touchable>
   );
};

export default MyLodosButton;

const styles = StyleSheet.create({
   text: {
      fontSize: 12,
      fontWeight: "bold",
      color: "white",
      paddingLeft: 5,
   },
   container: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 0.5,
      borderColor: "silver",
      borderRadius: 5,
      padding: 5,
   },
});
