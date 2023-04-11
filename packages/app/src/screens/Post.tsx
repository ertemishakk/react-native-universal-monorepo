import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";

import PostDetails from "../components/PostDetails";
import PostButtons from "../components/PostButtons";
import { useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WebHeaderLinks from "../components/WebHeaderLinks";
import Header from "../components/Header";

export const POST_SCREEN = "POST";

const Post = () => {
   const windowWidth = useWindowDimensions().width;
   return (
      <SafeAreaView edges={["bottom"]} style={styles.root}>
         <WebHeaderLinks />
         <Header />
         <View style={{ flex: 1 }}>
            <ScrollView>
               <View style={{ marginBottom: 20 }}>
                  <PostDetails />
               </View>
            </ScrollView>
            <PostButtons />
         </View>
      </SafeAreaView>
   );
};

export default Post;

const styles = StyleSheet.create({
   root: {
      flex: 1,
      backgroundColor: "white",
   },
});
