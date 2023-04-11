type RootNav = {
    HOME: undefined;
  TABS: any,
  POST: {
    id:number,
  }
    
  };
  
  interface ScreenNavigation {
    name: keyof RootNav;
    component: React.FC<any> | React.ComponentType | null;
    options?: import('@react-navigation/stack').StackNavigationOptions;
  }
  
  type UseNavigationProps =
    import('@react-navigation/native-stack').NativeStackScreenProps<RootNav>['navigation'];