import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput ,Button} from 'react-native'
import style from '../../Screens/Home/style'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useActionSheet } from '@expo/react-native-action-sheet';

const NewTaskInput = ({ onAdd }) => {
    const [newTask, setNewTask] = useState('')
    const { showActionSheetWithOptions } = useActionSheet();

    const handleAddTask = () => {
        if (!newTask) return; // Handle empty input
        onAdd({ title: newTask, isCompleted: false });
        setNewTask('');
        console.warn('Add Task:', newTask);
    };

    // Define ActionSheet options
    const options = ['Add Todo', 'Cancel'];
    const destructiveButtonIndex = options.length - 1; // Index of Cancel button


    const onPress = () => {
        showActionSheetWithOptions({
            options,
            cancelButtonIndex,
            destructiveButtonIndex
          }, (selectedIndex) => {
            switch (selectedIndex) {
              case 1:
                // Save
                break;
      
              case destructiveButtonIndex:
                // Delete
                break;
      
              case cancelButtonIndex:
                // Canceled
            }});
        }
      

    return (
    <View>
      <Button title="+" onPress={onPress} />
      <TextInput
        // autoFocus (optional)
        onChangeText={setNewTask}
        value={newTask}
        style={{ /* your styling here */ }}
        placeholder='Todo...'
        // Handle adding task on 'enter' press (optional)
        onSubmitEditing={() => handleAddTask()}
      />
    </View>
    
    )
}

export default NewTaskInput;




// return (
//     <View style={style.taskConatiner}>
//         <MaterialCommunityIcons
//             name="checkbox-blank"
//             size={26}
//             color='#FFE0B5'
//         />

//         <TextInput
//             // autoFocus
//             onChangeText={setNewTask}
//             value={newTask}
//             style={style.addTaskInput}
//             placeholder='Todo...'
//             onEndEditing={() => {

//                 if(!newTask) {
//                     return;
//                 }
//                 onAdd({ title: newTask, isCompleted: false })
//                 setNewTask('');
//                 console.warn('Add Task:', newTask)
//                 // setTasks((currentTasks) => [ ...currentTasks, { title: newTask , isCompleted:false}
//                 // return currentTasks


//             }}
//         />

//     </View>
// )



// const onPress = () => {
//     showActionSheetWithOptions({
//         options,
//         cancelButtonIndex,
//         destructiveButtonIndex,
//     }, (selectedIndex) => {
//         if (selectedIndex !== destructiveButtonIndex) { // Handle 'Add Todo' button
//             handleAddTask();
//         }
//     });
// };