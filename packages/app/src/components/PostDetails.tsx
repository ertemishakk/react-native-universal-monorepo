import { Text, View, Image } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useAppSelector } from "../redux-app/hooks";
import { POST_SCREEN } from "../screens/Post";
import PostImage from "./PostImage";
import PostedBy from "./PostedBy";
import { Icon } from "@rneui/themed";
import PostAnalytics from "./PostAnalytics";

const PostDetails = () => {
   const route = useRoute<RouteProp<RootNav, typeof POST_SCREEN>>();
   const posts = useAppSelector((state) => state.posts);
   const post = posts.filter(
      (each) => each.id === Number(route?.params?.id)
   )[0];

   return (
      <View
         style={{
            backgroundColor: "white",
            flex: 1,
         }}
      >
         <PostImage
            uri="https://gumtreeau-res.cloudinary.com/image/private/t_$_s-l400/gumtree/4af46c6b-8119-4722-a468-dc11a3a04910.jpg"
            activeIndex={1}
            total={2}
         />
         <View style={{ marginHorizontal: 20 }}>
            <Text
               style={{
                  borderColor: "silver",
                  marginVertical: 10,
               }}
            />
            <Text style={{ fontSize: 30, marginTop: 20 }}>{post.title}</Text>
            <Text
               style={{
                  marginVertical: 10,
                  fontSize: 25,
                  fontWeight: "500",
                  color: "#03a2cd",
               }}
            >
               ${post.price}
            </Text>
            <View
               style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
            >
               <Icon name="map" color="#03a2cd" />
               <Text style={{ marginVertical: 10 }}>{post.location}</Text>
            </View>

            <Text
               style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#03a2cd",
                  marginTop: 20,
               }}
            >
               Seller's description
            </Text>
            <Text style={{ marginVertical: 10, fontSize: 15, lineHeight: 30 }}>
               {post.description}
            </Text>
            <PostedBy />
            <PostAnalytics />
         </View>
      </View>
   );
};

export default PostDetails;
