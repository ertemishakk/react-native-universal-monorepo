import { Platform, Text, View } from "react-native";
import React from "react";
import Touchable from "./Touchable";

const categories = [
   { text: "Feed" },
   { text: "Recently Viewed" },
   { text: "WatchList" },
];

const PostCategories = () => {
   return Platform.OS === "web" ? (
      <View
         style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 10,
         }}
      >
         {categories.map((category, index) => (
            <Touchable containerStyle={{ paddingHorizontal: 20 }}>
               <Text
                  style={{
                     fontSize: 15,
                     fontWeight: "bold",
                     color: index === 0 ? "#3baa33" : "black",
                     textDecorationLine: index === 0 ? "underline" : "none",
                  }}
               >
                  {category.text}
               </Text>
            </Touchable>
         ))}
      </View>
   ) : null;
};

export default PostCategories;
