import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import style from './style'
import { FlatList } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

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

            <View style={style.subContainer}>
                <Text style={style.todayTasks} >Today's tasks </Text>

                <FlatList data={tasks}
                    contentContainerStyle={{ gap: 10 }}
                    renderItem={({ item }) => (
 
                        <View style={style.taskConatiner} >
                            <MaterialCommunityIcons
                                name={item.isCompleted
                                    ? "checkbox-marked"
                                    : "checkbox-blank"
                                }
                                size={26}
                                color={item.isCompleted
                                    ? '#DFBD43'
                                    : '#FFE0B5'
                                    
                                }

                            />
                            <Text style={style.taskTitle} >{item.title} </Text>
                        </View>
                    )}

                />

            </View>
        </View>


    )
}

export default Home;

