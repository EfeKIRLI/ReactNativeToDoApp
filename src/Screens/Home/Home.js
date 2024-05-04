import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import style from './style'
import { FlatList } from 'react-native-gesture-handler'

const initialTasks = [
    {
        title: 'Save the Tasks',
        isCompleted: true
    },
    {
        title: 'Save the Tasks By writing ',
        isCompleted: false
    },
    {
        title: 'add a new task ',
        isCompleted: false
    },
    {
        title: 'change a new task ',
        isCompleted: false
    },
    {
        title: 'sperate in 3 tabs as: List - Add - Settings ',
        isCompleted: false
    },

]

const Home = () => {

    const [tasks, setTasks] = useState(initialTasks)
    return (

        <View style={style.container}>
            <Text>My To Do Screens </Text>

            <FlatList data={tasks} 
            renderItem={(item) => <Text>{item} </Text>}
            
            /> 

        
        </View>


    )
}

export default Home;

