import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, TextInput, ScrollView, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import style from './style'
import { FlatList } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SearchBar from '../../components/SearchBar/SearchBar';
import NewTaskInput from '../../components/NewTaskInput/NewTaskInput';



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


    // const [keyboardShown, setKeyboardShown] = useState(false);

    // useEffect(() => {
    //     const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
    //         setKeyboardShown(true);
    //     });
    //     const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
    //         setKeyboardShown(false);
    //     });

    //     return () => {
    //         keyboardDidShowListener.remove();
    //         keyboardDidHideListener.remove();
    //     };
    // }, []);


    const onTaskPressed = (index) => {
        setTasks((currentTasks) => {
            const updatedTasks = [...currentTasks];
            currentTasks[index].isCompleted = !currentTasks[index].isCompleted;
            console.log(currentTasks, updatedTasks)
            return updatedTasks
            //return updatedTasks: After toggling the completion status, the callback function returns the updatedTasks array. This tells the setTasks function to update the state with the modified array.
        }) // update the tasks state
        console.warn('You finished')

    }

    return (
        <View style={style.container}>
            <SafeAreaView>
                <View style={style.subContainer}>
                    <View style={style.searchBox}>
                        <SearchBar />
                    </View>
                    <Text style={style.todayTasks} >Today's tasks </Text>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        keyboardVerticalOffset={250}
                    >
                        <FlatList data={tasks}
                            contentContainerStyle={{ gap: 10, }}
                            renderItem={({ item, index }) => (

                                <Pressable onPress={() => onTaskPressed(index)} style={style.taskConatiner} >
                                    <View style={style.chekboxIcon}>
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
                                    </View>

                                    <Text> 08:00 AM  </Text>
                                    <Text style={[style.taskTitle, { textDecorationLine: item.isCompleted ? 'line-through' : 'none' }]} >{item.title} </Text>

                                    <View style={style.editIcon}>
                                        <MaterialIcons name="edit-note" size={26} color="#DFBD43" />
                                    </View>
                                    <View style={style.deleteIcon}>
                                        <MaterialIcons name="delete" size={22} color="#DFBD43" />
                                    </View>
                                </Pressable >
                            )}

                        />

                        <NewTaskInput onAdd={(newTodo) =>
                            setTasks((currentTasks) => [...currentTasks, newTodo])
                        }
                        />

                    </KeyboardAvoidingView>

                </View>

            </SafeAreaView>
        </View>




    )
}

export default Home;

