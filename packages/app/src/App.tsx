import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import Navigation from "./navigation/Navigation";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import IconInjector from "./components/IconInjector";
import NavigationContainer from "./navigation/NavigationContainer";

export function App() {
   return (
      <SafeAreaProvider>
         <Provider store={store}>
            <PersistGate persistor={persistor}>
               <NavigationContainer>
                  <IconInjector />
                  <Navigation />
               </NavigationContainer>
            </PersistGate>
         </Provider>
      </SafeAreaProvider>
   );
}
