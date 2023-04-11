import React from "react";
import { View, Text, StyleSheet, Platform, ScrollView } from "react-native";
import Touchable from "./Touchable";
import { Icon } from "@rneui/themed";
import MyLodosButton from "./MyLodosButton";

const menu = [
   {
      text: "Cars & Vehicles",
   },
   {
      text: "Real Estate",
   },
   {
      text: "Jobs",
   },
   {
      text: "For Sale",
   },
   {
      text: "Directory",
   },
   {
      text: "Freebies",
   },
   {
      text: "Pets",
   },
   {
      text: "Friends & Dating",
   },
];

const WebHeaderLinks = () => {
   return Platform.OS === "web" ? (
      <View
         style={{
            padding: 10,
            backgroundColor: "#2c2034",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
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
            <Touchable
               containerStyle={{
                  borderRightWidth: 1,
                  paddingRight: 10,
                  borderColor: "silver",
               }}
            >
               <Icon name="home" color="white" />
            </Touchable>
            <ScrollView
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               contentContainerStyle={{
                  flex: 1,
                  flexDirection: "row",
               }}
            >
               {menu.map((category) => (
                  <Touchable key={category.text}>
                     <View style={{ paddingHorizontal: 20 }}>
                        <Text
                           style={{
                              color: "white",
                              fontSize: 13,
                              fontWeight: "bold",
                           }}
                        >
                           {category.text}
                        </Text>
                     </View>
                  </Touchable>
               ))}
            </ScrollView>

            <MyLodosButton />
         </View>
      </View>
   ) : null;
};

export default WebHeaderLinks;

const styles = StyleSheet.create({});
