import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Dimensions, View } from "react-native";
import Advertising from "../components/Advertising";
import { useAppSelector } from "../redux-app/hooks";
import { IDLE_MODE } from "../screens/IdleScreen";
import { SALE_MODE } from "../screens/SaleScreen";

const width = Dimensions.get("window").width;

const data = [
  {
    id: 1,
    uri: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1381&q=80",
    time: 1000,
  },
  {
    id: 2,
    uri: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    time: 1000,
  },
  {
    id: 3,
    uri: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80",
    time: 1000,
  },
];

const AdvertisingPane = () => {
  const scrollRef = useRef<ScrollView | null>(null);
  const [counter, setCounter] = useState(0);
  const mode = useAppSelector((state) => state.mode);
  const [images, setImages] = useState(data);

  const layout = useAppSelector((state) => state.adsContainer);

  useEffect(() => {
    if (mode === IDLE_MODE || (mode === SALE_MODE && layout)) {
      scrollRef.current?.scrollTo({
        x: mode === IDLE_MODE ? width * counter : layout!.width * counter,
      });
    }
  }, [counter]);

  useEffect(() => {
    if (scrollRef) {
      startTimer();
    }
  }, [counter]);

  const startTimer = () => {
    setTimeout(() => {
      setCounter(data.length - 1 > counter ? counter + 1 : 0);
    }, data[counter].time);
  };

  return (
    <View style={{ margin: mode === IDLE_MODE ? 0 : 10 }}>
      <ScrollView
        horizontal
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      >
        {images.map((item) => (
          <Advertising uri={item.uri!} key={item.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default AdvertisingPane;
