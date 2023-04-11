import { Text, View, Image, ImageBackground, Platform } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

const PostImage = ({
   uri,
   activeIndex,
   total,
}: {
   uri: string;
   activeIndex: number;
   total: number;
}) => {
   return (
      <View style={{ position: "relative" }}>
         <ImageBackground
            source={{
               height: 400,
               uri,
            }}
            blurRadius={10}
         />

         <Image
            resizeMode={Platform.OS === "web" ? "contain" : "cover"}
            source={{
               height: 400,
               uri,
            }}
         />
         <View
            style={{
               position: "absolute",
               bottom: 10,
               left: 10,
               backgroundColor: "transparent",
               borderRadius: 5,
               padding: 5,
               flexDirection: "row",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <Icon name="image" />
            <Text>
               {activeIndex} / {total}
            </Text>
         </View>
      </View>
   );
};

export default PostImage;
