import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/Navigation/Routes';
import Home from './src/Screens/Home/Home';
 

 
const Stack = createNativeStackNavigator()


export default function App() {
  return (
      // "@react-navigation/elements": "^1.3.30",
    // <SafeAreaProvider> 
    //   <View> 
    //   <Text> hi </Text>
    // </View>

    // </SafeAreaProvider>
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.HOME} screenOptions={{headerShown:true}}>
        <Stack.Screen name={Routes.HOME} component={Home} />
       
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

