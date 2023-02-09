import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

import io from "socket.io-client";

const socket = io("http://localhost:5100");

export function App() {
  const [mode, setMode] = useState<null | string>(null);
  useEffect(() => {
    socket.on("saleMode", (data) => {
      setMode(data.mode);
    });

    return () => {
      socket.off("saleMode");
    };
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={styles.root}>
          <View style={styles.container}>
            <Text>Electron</Text>
          </View>
          <View style={styles.container}>
            <Text>App</Text>
          </View>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    flex: 1,
    borderColor: "blue",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
