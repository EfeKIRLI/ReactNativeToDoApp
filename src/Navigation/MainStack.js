import React from "react";
import Routes from './Routes'
import TabRoutes from "./TabRoutes";
import { View, Text } from 'react-native'


const MainStack = (Stack) => {
  return (
   <> 
   <Stack.Screen name={Routes.TABS} componen={TabRoutes} />
   </>
  )
}

export default MainStack

