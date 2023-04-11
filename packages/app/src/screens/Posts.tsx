import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useAppSelector } from "../redux-app/hooks";
import Touchable from "../components/Touchable";
import { Icon } from "@rneui/themed";
import { POST_SCREEN } from "./Post";
import LinkButton from "../components/LinkButton";
import PostCategories from "../components/PostCategories";

const Posts = () => {
   const posts = useAppSelector((state) => state.posts);

   return (
      <View
         style={{
            alignItems: "center",
         }}
      >
         <View style={{ maxWidth: 1200 }}>
            <View style={{ padding: 10, flex: 1 }}>
               <PostCategories />

               {posts?.map((post) => (
                  <LinkButton
                     key={post.id}
                     to={{ screen: POST_SCREEN, params: { id: post.id } }}
                  >
                     <View style={styles.postContainer}>
                        <Image
                           source={{
                              width: 100,
                              height: 100,
                              uri:
                                 "https://gumtreeau-res.cloudinary.com/image/private/t_$_s-l800/gumtree/430dc1dc-b727-49e8-9244-3099d0c90f66.jpg",
                           }}
                           resizeMode="cover"
                        />

                        <View style={{ paddingHorizontal: 10, flex: 2 }}>
                           <Text
                              numberOfLines={1}
                              style={{ fontSize: 14, fontWeight: "500" }}
                           >
                              {post.title}
                           </Text>
                           <Text
                              numberOfLines={3}
                              style={{
                                 fontSize: 13,
                                 color: "grey",
                                 marginTop: 10,
                              }}
                           >
                              {post.description}
                           </Text>
                        </View>
                        <View
                           style={{
                              flex: 1,
                              alignItems: "flex-end",
                           }}
                        >
                           <View style={{ flex: 1 }}>
                              <Text
                                 style={{
                                    fontSize: 16,
                                    marginTop: 5,
                                    fontWeight: "bold",
                                 }}
                              >
                                 ${post.price}
                              </Text>
                              {post.negotiable && (
                                 <Text
                                    style={{
                                       fontSize: 12,
                                       marginTop: 5,
                                       fontWeight: "bold",
                                       color: "#3baa33",
                                    }}
                                 >
                                    Negotiable
                                 </Text>
                              )}

                              <View
                                 style={{ justifyContent: "flex-end", flex: 1 }}
                              >
                                 <Text
                                    style={{
                                       fontSize: 13,
                                       marginTop: 5,
                                    }}
                                 >
                                    {post.location}
                                 </Text>
                                 <Text
                                    style={{
                                       fontSize: 13,
                                       marginTop: 5,
                                    }}
                                 >
                                    24 hours ago
                                 </Text>
                              </View>
                           </View>
                        </View>
                        <View
                           style={{
                              justifyContent: "flex-end",
                              paddingHorizontal: 20,
                           }}
                        >
                           <Touchable>
                              <Icon name="favorite" color="silver" />
                           </Touchable>
                        </View>
                     </View>
                  </LinkButton>
               ))}
            </View>
         </View>
      </View>
   );
};

export default Posts;

const styles = StyleSheet.create({
   postContainer: {
      padding: 10,
      margin: 10,
      borderRadius: 5,
      backgroundColor: "white",
      flexDirection: "row",
      borderWidth: 1,
      borderColor: "silver",
   },
});
