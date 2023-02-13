import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

import io from "socket.io-client";
import Screens from "./components/Screens";

const socket = io("http://localhost:5100");

export function App() {
  useEffect(() => {
    socket.on("saleMode", (data) => {});

    return () => {
      socket.off("saleMode");
    };
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={styles.root}>
          <Screens />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "red",
  },
});
