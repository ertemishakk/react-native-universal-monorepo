import React from "react";
import DefaultNavigation from "./DefaultNavigation";
import TabNavigation from "./TabNavigation";
import Post, { POST_SCREEN } from "../screens/Post";

const Navigation = () => {
   const screens: ScreenNavigation[] = [
      {
         name: "TABS",
         component: TabNavigation,
         options: {
            headerShown: false,
         },
      },
      {
         name: POST_SCREEN,
         component: Post,
         // component: () => (
         //    <WebHeaderWrapper>
         //       <Post />
         //    </WebHeaderWrapper>
         // ),
         options: {
            headerShown: false,
         },
      },
   ];
   return <DefaultNavigation screens={screens} />;
};

export default Navigation;
