// import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './MainStack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
                  {/* <MainStack /> */}
            <Stack.Navigator>
                {MainStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;