import React from "react";
import Sale, { SALE_MODE } from "../screens/Sale";
import Idle, { IDLE_MODE } from "../screens/Idle";
import { useAppSelector } from "../redux-app/hooks";

interface ScreenType {
  [key: string]: React.ElementType;
}

const Screens = () => {
  const mode = useAppSelector((state) => state.mode);

  const AvailableScreens: ScreenType = {
    [SALE_MODE]: Sale,
    [IDLE_MODE]: Idle,
  };

  const Component = AvailableScreens[mode];

  if (!Component) {
    return null;
  }

  return <Component />;
};

export default Screens;
