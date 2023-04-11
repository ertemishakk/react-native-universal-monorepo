import React from "react";
import { View, Text } from "react-native";
import Touchable from "./Touchable";
import { Icon } from "@rneui/themed";
import LinkButton from "./LinkButton";
import { HOME_TAB } from "../screens/Home";

const LogoRow = () => {
   return (
      <View
         style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
         }}
      >
         <LinkButton
            to={{
               screen: "TABS",
               params: {
                  screen: HOME_TAB,
               },
            }}
         >
            <View
               style={{
                  flexDirection: "row",
                  alignItems: "center",
               }}
            >
               <Icon name="bolt" color="white" size={35} />
               <Text
                  style={{
                     color: "white",
                     fontSize: 30,
                     fontWeight: "bold",
                  }}
               >
                  Lodos
               </Text>
            </View>
         </LinkButton>
         <Touchable
            containerStyle={{
               backgroundColor: "#3baa33",
               padding: 15,
               borderRadius: 2,
               paddingHorizontal: 25,
            }}
         >
            <Text
               style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
               }}
            >
               Post an add
            </Text>
         </Touchable>
      </View>
   );
};

export default LogoRow;
