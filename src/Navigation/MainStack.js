import React from "react";
// import Routes from './Routes'
import TabRoutes from "./TabRoutes";
// import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import navigationString from "../../constants/navigationString";

const Stack = createStackNavigator()


const MainStack = (Stack) => {
  return (
   <> 
   <Stack.Screen name={navigationString.TABS} component={TabRoutes} />
   </>
  )
}

export default MainStack;


