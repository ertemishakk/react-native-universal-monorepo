import React from "react";
import Home, { HOME_TAB } from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Messages, { MESSAGES_TAB } from "../screens/Messages";
import Profile, { PROFILE_TAB } from "../screens/Profile";
import Watchlist, { WATCHLIST_TAB } from "../screens/Watchlist";
import { Icon } from "@rneui/themed";
import { Platform, Pressable, ScrollView, View } from "react-native";
import WebHeaderLinks from "../components/WebHeaderLinks";
import HomeHeader from "../components/HomeHeader";
import Header from "../components/Header";

const Tab = createBottomTabNavigator();
const POST_TAB = "POST_TAB";

const Navigation = () => {
   const tabs = [
      {
         name: HOME_TAB,
         component: Home,
         options: {
            headerShown: false,
         },
         icon: "home",
      },
      {
         name: PROFILE_TAB,
         component: Profile,
         options: {
            headerShown: false,
         },
         icon: "person",
      },
      // {
      //    name: POST_TAB,
      //    component: () => <></>,
      //    options: {
      //       headerShown: false,
      //    },
      //    icon: "add-a-photo",
      // },
      {
         name: WATCHLIST_TAB,
         component: Watchlist,
         options: {
            headerShown: false,
         },
         icon: "favorite",
      },
      {
         name: MESSAGES_TAB,
         component: Messages,
         options: {
            headerShown: false,
         },
         icon: "chat",
      },
   ];
   return (
      <Tab.Navigator>
         {tabs.map((tab) => (
            <Tab.Screen
               key={tab.name}
               name={tab.name}
               component={tab.component}
               // component={() => (
               //    <View style={{ flex: 1 }}>
               //       <WebHeaderLinks />
               //       {tab.name === HOME_TAB ? <HomeHeader /> : <Header />}
               //       <tab.component />
               //    </View>
               // )}
               options={{
                  ...tab.options,
                  tabBarStyle: {
                     display: Platform.OS === "web" ? "none" : "",
                  },
                  tabBarIcon: () => <Icon name={tab.icon} />,
                  tabBarButton: (props) => (
                     <Pressable
                        {...props}
                        onPress={(e) => {
                           if (tab.name === POST_TAB) {
                              return;
                           } else {
                              props!.onPress!(e);
                           }
                        }}
                     />
                  ),
               }}
            />
         ))}
      </Tab.Navigator>
   );
};

export default Navigation;
