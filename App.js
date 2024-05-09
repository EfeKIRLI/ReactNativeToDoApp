import React from 'react';
import { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/Navigation/Routes';
import Home from './src/Screens/Home/Home';
import { useFonts } from 'expo-font';
import navigationString from './constants/navigationString';
// import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import ActionSheet from 'react-native-actions-sheet';




const Stack = createNativeStackNavigator()

const actionSheetRef = useRef<ActionSheetRef>(null);



export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/font/Roboto-Black.ttf'),
    'Roboto-BlackItalic': require('./assets/font/Roboto-BlackItalic.ttf'),
    'Roboto-Bold': require('./assets/font/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('./assets/font/Roboto-BoldItalic.ttf'),
    'Roboto-Italic': require('./assets/font/Roboto-Light.ttf'),
    'Roboto-Light': require('./assets/font/Roboto-Light.ttf'),
    'Roboto-LightItalic': require('./assets/font/Roboto-LightItalic.ttf'),
    'Roboto-Medium': require('./assets/font/Roboto-Medium.ttf'),
    'Roboto-MediumItalic': require('./assets/font/Roboto-MediumItalic.ttf'),
    'Roboto-Regular': require('./assets/font/Roboto-Regular.ttf'),
    'Roboto-Thin': require('./assets/font/Roboto-Thin.ttf'),
    'Roboto-ThinItalic': require('./assets/font/Roboto-ThinItalic.ttf'),
  });


  if (!fontsLoaded) {
    return null;
  }

  return (
    // "@react-navigation/elements": "^1.3.30",
    // <SafeAreaProvider> 
    //   <View> 
    //   <Text> hi </Text>
    // </View>

    // </SafeAreaProvider>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName={navigationString.HOME} screenOptions={{ headerShown: true }}>
    //     <Stack.Screen name={navigationString.HOME} component={Home} />

    //   </Stack.Navigator>
    // </NavigationContainer>

    <ActionSheet ref={actionSheetRef}> 
      <View style={{ flex: 1 }} >
        <Routes />
      </View>
      </ActionSheet>
  );
}

