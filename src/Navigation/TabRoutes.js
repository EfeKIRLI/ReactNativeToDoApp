import { View, Text, Settings,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationString from '../../constants/navigationString';
import Home from '../Screens/Home/Home';
import SettingScreen from '../Screens/SettingScreen/SettingScreen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';




const Tab = createBottomTabNavigator()

const TabRoutes = () => {
  return (
    <Tab.Navigator 
    initialRouteName={navigationString.HOME}
    screenOptions={{ 
      headerShown: false,
      // tabBarActiveBackgroundColor: 'gray',
      tabBarActiveTintColor: '#444444',
      // tabBarInactiveBackgroundColor: '#EDEAEA',
      tabBarInactiveTintColor: 'black',
      tabBarShowLabel:true,
      tabBarStyle:{ 
      backgroundColor:'#EDEAEA',
    
      
      // borderRadius:30,
      // marginHorizontal:2
      }
    }}
    >
      <Tab.Screen name={navigationString.HOME} component={Home 
      } 
      options={{ 
        // title:'List',
        tabBarStyle:{ 
          backgroundColor:'#EDEAEA',
          borderRadius:30,
          marginHorizontal:3,
          height:60,
          
        },
        tabBarIcon: ({focused}) => { 
          return ( 
            <MaterialIcons name="home" size={36} color={focused ? "#444444" : "gray"} borderRadius={50} />
          )
        }
      }}
      />
      <Tab.Screen name={navigationString.SETTING} component={SettingScreen} 
      options={{ 
        tabBarStyle:{ 
          backgroundColor:'#EDEAEA',
          borderRadius:30,
          marginHorizontal:3,
          height:60,

        },
        tabBarIcon: ({focused}) => { 
          return ( 
            <Ionicons name="settings-outline" size={36} color={focused ? "#444444" : "gray"}  />
          )
        }
      }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  )
}

export default TabRoutes