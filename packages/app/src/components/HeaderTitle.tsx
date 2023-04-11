import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HeaderTitle = () => {
   return (
      <View>
         <Text style={styles.text}>Classified Ads for Turkish Australians</Text>
      </View>
   );
};

export default HeaderTitle;

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      color: "white",
      fontWeight: "600",
      paddingHorizontal: 10,
      paddingVertical: 20,
   },
});
