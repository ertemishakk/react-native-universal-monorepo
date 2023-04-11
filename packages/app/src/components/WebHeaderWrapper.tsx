import React from "react";
import { Platform, ScrollView, View } from "react-native";
import Header from "../components/Header";
import WebHeaderLinks from "../components/WebHeaderLinks";
import { RouteProp, useRoute } from "@react-navigation/native";
import { POST_SCREEN } from "../screens/Post";
import PostButtons from "./PostButtons";

const WebHeaderWrapper = ({ children }: { children?: React.ReactNode }) => {
   const route = useRoute<RouteProp<RootNav, typeof POST_SCREEN>>();

   return (
      <View style={{ flex: 1 }}>
         {Platform.OS === "web" && (
            <>
               <WebHeaderLinks />
               <Header />
            </>
         )}
         {children}
      </View>
   );
};

export default WebHeaderWrapper;
