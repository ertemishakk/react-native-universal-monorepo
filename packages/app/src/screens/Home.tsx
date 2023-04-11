import { Platform, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Posts from "./Posts";
import Categories from "../components/Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/SearchBar";
import WebHeaderLinks from "../components/WebHeaderLinks";
import HomeHeader from "../components/HomeHeader";

export const HOME_TAB = "HOME";

const Home = () => {
   return (
      <SafeAreaView edges={["top"]} style={styles.root}>
         <WebHeaderLinks />
         {Platform.OS === "web" && <HomeHeader />}
         {Platform.OS !== "web" && <SearchBar />}

         <Categories />
         <ScrollView>
            <Posts />
         </ScrollView>
      </SafeAreaView>
   );
};

export default Home;

const styles = StyleSheet.create({
   root: {
      flex: 1,
      backgroundColor: "white",
   },
});
