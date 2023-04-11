import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useAppSelector } from "../redux-app/hooks";
import { POST_SCREEN } from "../screens/Post";
import Touchable from "./Touchable";

const PostButtons = () => {
   const route = useRoute<RouteProp<RootNav, typeof POST_SCREEN>>();
   const posts = useAppSelector((state) => state.posts);
   const post = posts.filter(
      (each) => each.id === Number(route?.params?.id)
   )[0];

   return (
      <View
         style={{
            flexDirection: "row",
            marginHorizontal: 20,
            marginVertical: 5,
         }}
      >
         <Touchable containerStyle={[{}, styles.callButton, styles.button]}>
            <Text style={{ color: "grey" }}>Call</Text>
         </Touchable>
         <Touchable containerStyle={[styles.messageButton, styles.button]}>
            <Text style={{ color: "white" }}>Message</Text>
         </Touchable>
      </View>
   );
};

export default PostButtons;

const styles = StyleSheet.create({
   callButton: {
      backgroundColor: "white",
      borderWidth: 0.5,
      borderColor: "black",
      marginRight: 5,
   },
   messageButton: {
      backgroundColor: "green",
      marginLeft: 5,
   },
   button: {
      flex: 1,
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
   },
});
