import React from "react";
import { View, Text, useWindowDimensions, Platform } from "react-native";
import { Icon } from "@rneui/themed";
import Touchable from "./Touchable";

const Categories = () => {
   const categories = [
      {
         icon: "local-taxi",
         text: "Vehicles",
      },
      {
         icon: "home",
         text: "Housing",
      },
      {
         icon: "work",
         text: "Jobs",
      },
      {
         icon: "shopping-cart",
         text: "For Sale",
      },
      {
         icon: "menu",
         text: "More",
      },
   ];
   const windowWidth = useWindowDimensions().width;

   return Platform.OS === "web" ? null : (
      <View
         style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20,
            borderBottomWidth: 1,
            borderColor: "silver",
         }}
      >
         {windowWidth > 1200 && <View style={{ flex: 1 }} />}

         {categories.map((category) => (
            <Touchable
               containerStyle={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
               }}
               key={category.icon}
            >
               <Icon name={category.icon} />
               <Text>{category.text}</Text>
            </Touchable>
         ))}
         {windowWidth > 1200 && <View style={{ flex: 1 }} />}
      </View>
   );
};

export default Categories;
