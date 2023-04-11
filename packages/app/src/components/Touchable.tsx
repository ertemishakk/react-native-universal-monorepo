import React from "react";
import { View, ViewStyle, StyleProp, Pressable } from "react-native";

const Touchable = ({
   children,
   containerStyle,
   onPress,
}: {
   children: React.ReactNode;
   onPress?: (e?: any) => void;
   containerStyle?: StyleProp<ViewStyle>;
}) => {
   return (
      <Pressable
         onPress={onPress}
         style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1 },
            containerStyle,
         ]}
      >
         <View>{children}</View>
      </Pressable>
   );
};

export default Touchable;
