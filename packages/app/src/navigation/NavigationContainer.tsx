import React from "react";
import {
   LinkingOptions,
   NavigationContainer,
   useNavigationContainerRef,
} from "@react-navigation/native";
import { POST_SCREEN } from "../screens/Post";
import { useAppSelector } from "../redux-app/hooks";

const Container = ({ children }: { children: React.ReactNode }) => {
   const posts = useAppSelector((state) => state.posts);
   const navigationRef = useNavigationContainerRef();

   const linking: LinkingOptions<RootNav> = {
      prefixes: ["http://localhost:3000/"],
      config: {
         screens: {
            POST: {
               path: "post/:id",
               parse: {
                  id: Number,
               },
            },
            TABS: {
               screens: {
                  HOME: {
                     path: "",
                  },
                  PROFILE: {
                     path: "/profile",
                  },
               },
            },
         },
      },
   };

   return (
      <NavigationContainer
         linking={linking}
         ref={navigationRef}
         documentTitle={{
            formatter: (options, route) => {
               if (route?.name === POST_SCREEN) {
                  const post = posts.filter(
                     (each) => each.id === (route.params as any)?.id
                  )[0];
                  return `${post.title} - Lodos`;
               }

               return `${options?.title ?? route?.name} - Lodos`;
            },
         }}
      >
         {children}
      </NavigationContainer>
   );
};

export default Container;
