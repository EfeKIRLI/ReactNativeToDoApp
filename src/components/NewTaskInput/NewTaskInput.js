import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import style from '../../Screens/Home/style'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const NewTaskInput = ({onAdd}) => {
    const [newTask, setNewTask] = useState('')

    return (
        <View style={style.taskConatiner}>
            <MaterialCommunityIcons
                name="checkbox-blank"
                size={26}
                color='#FFE0B5'
            />
            <TextInput
                // autoFocus
                onChangeText={setNewTask}
                value={newTask}
                style={style.addTaskInput}
                placeholder='Todo...'
                onEndEditing={() => {

                    if(!newTask) { 
                        return;
                    }
                    onAdd({ title: newTask, isCompleted: false })
                    setNewTask('');
                    console.warn('Add Task:', newTask)
                    // setTasks((currentTasks) => [ ...currentTasks, { title: newTask , isCompleted:false}
                    // return currentTasks


                }}
            />

        </View>
    )
}

export default NewTaskInput;