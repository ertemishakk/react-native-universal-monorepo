import { Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useAppSelector } from "../redux-app/hooks";
import { POST_SCREEN } from "../screens/Post";
import { Icon } from "@rneui/themed";
import Touchable from "./Touchable";

const PostAnalytics = () => {
   const route = useRoute<RouteProp<RootNav, typeof POST_SCREEN>>();
   const posts = useAppSelector((state) => state.posts);
   const post = posts.filter(
      (each) => each.id === Number(route?.params?.id)
   )[0];
   const windowWidth = useWindowDimensions().width;

   const menu = [
      {
         title: "Share",
         icon: "link",
         action: () => {},
      },

      {
         title: "Report Ad",
         icon: "flag",
         action: () => {},
      },
      {
         title: "Save",
         icon: "favorite",
         action: () => {},
      },
   ];

   return (
      <View
         style={{
            flexDirection: windowWidth > 600 ? "row" : "column",
            justifyContent: "space-between",
            marginTop: 20,
         }}
      >
         <View>
            <Text style={{ fontSize: 14, color: "grey" }}>490 Views</Text>
            <Text style={{ fontSize: 14, color: "grey", marginTop: 10 }}>
               Posted 4 hours ago
            </Text>
            <Text style={{ fontSize: 14, color: "grey", marginTop: 10 }}>
               Last edited 1 hour ago
            </Text>
         </View>
         <View style={{ flexDirection: "row", marginTop: 10 }}>
            {menu.map((item) => (
               <Touchable>
                  <View
                     style={{
                        marginRight: 10,
                        flexDirection: "row",
                        alignItems: "center",
                     }}
                  >
                     <Icon name={item.icon} color="grey" />
                     <Text style={{ color: "grey", paddingLeft: 5 }}>
                        {item.title}
                     </Text>
                  </View>
               </Touchable>
            ))}
         </View>
      </View>
   );
};

export default PostAnalytics;
