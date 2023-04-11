import { View, TextInput, StyleSheet, Platform } from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";

const SearchBar = () => {
   const [value, setValue] = useState("");
   return (
      <View
         style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            shadowColor: "#171717",
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
         }}
      >
         <View
            style={{
               flex: 1,
               flexDirection: "row",
            }}
         >
            <View style={{ flex: 1, padding: 5 }}>
               <TextInput
                  placeholder="I'm looking for..."
                  value={value}
                  onChangeText={setValue}
                  style={[
                     {
                        padding: 10,
                        flex: 1,
                        fontSize: 20,
                        color: "#b0b0b0",
                     },
                     Platform.OS === "web" ? styles.web : {},
                  ]}
               />
            </View>
         </View>
         <View style={{ backgroundColor: "green", padding: 15 }}>
            <Icon name="search" color="white" />
         </View>
      </View>
   );
};

export default SearchBar;

const styles = StyleSheet.create({
   web: {
      //@ts-ignore
      outlineStyle: "none",
   },
});
