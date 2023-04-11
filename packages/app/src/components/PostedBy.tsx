import { Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import Touchable from "./Touchable";

const PostedBy = () => {
   return (
      <Touchable>
         <View
            style={{
               flexDirection: "row",
               alignItems: "center",
               flex: 1,
               borderTopWidth: 0.5,
               borderBottomWidth: 0.5,
               paddingVertical: 20,
               borderColor: "silver",
            }}
         >
            <View>
               <Icon name="account-circle" size={60} color="silver" />
            </View>
            <View style={{ marginLeft: 10, flex: 1 }}>
               <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  Ishak Ertem
               </Text>
               <Text style={{ marginTop: 10 }}>Member since 2020</Text>
            </View>
            <View>
               <Icon name="chevron-right" size={30} color="#03a2cd" />
            </View>
         </View>
      </Touchable>
   );
};

export default PostedBy;
