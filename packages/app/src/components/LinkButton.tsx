import React from "react";
import { View, ViewStyle, StyleProp, Pressable } from "react-native";
import { useLinkProps } from "@react-navigation/native";
import { To } from "@react-navigation/native/lib/typescript/src/useLinkTo";

const LinkButton = ({
   children,
   containerStyle,
   to,
}: {
   children: React.ReactNode;
   to: To<RootNav>;
   containerStyle?: StyleProp<ViewStyle>;
}) => {
   const { onPress, ...props } = useLinkProps({ to });

   return (
      <Pressable
         onPress={onPress}
         {...props}
         style={({ pressed }) => [
            {
               opacity: pressed ? 0.5 : 1,
            },
            containerStyle,
         ]}
      >
         <View>{children}</View>
      </Pressable>
   );
};

export default LinkButton;
