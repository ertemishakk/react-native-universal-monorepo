import React from "react";
import { View, Image, StyleSheet } from "react-native";
import LogoRow from "./LogoRow";
import HeaderTitle from "./HeaderTitle";
import SearchBar from "./SearchBar";

const HomeHeader = () => {
   return (
      <View style={{ position: "relative" }}>
         <View
            style={{
               alignItems: "center",
               justifyContent: "center",
               flexDirection: "row",
               zIndex: 999,
            }}
         >
            <View
               style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  maxWidth: 1200,
               }}
            >
               <View style={{ flex: 1 }}>
                  <View style={{ padding: 10, marginBottom: 30 }}>
                     <LogoRow />
                     <HeaderTitle />
                  </View>
                  <SearchBar />
               </View>
            </View>
         </View>

         <Image
            source={{ uri: require("../assets/bazaar.jpg") }}
            style={{
               width: "100%",
               position: "absolute",
               top: 0,
               bottom: 0,
            }}
         />
         <View style={styles.overlay} />
      </View>
   );
};

export default HomeHeader;

const styles = StyleSheet.create({
   overlay: {
      height: "100%",
      width: "100%",
      position: "absolute",
      backgroundColor: "rgba(0,0,0,0.3)",
   },
});
