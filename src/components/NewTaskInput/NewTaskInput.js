import React from 'react'
import { useState ,useRef} from 'react';
import { View, Text, TextInput, Button, Pressable, Modal } from 'react-native'
// import style from '../../Screens/Home/style'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import style from './style';
import ActionSheet from 'react-native-actions-sheet';






const NewTaskInput = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('')
  const actionSheetRef = useRef(null);

  const [isModalVisible, setIsModalVisible] = useState(false); // State for Todo modal visibility


  const handleAddTask = () => {
    if (!newTask) return; // Handle empty input
    onAdd({ title: newTask, isCompleted: false });
    setNewTask('');
    console.warn('Add Task:', newTask);
  };

  // Define ActionSheet options
  const options = ['Add Todo', 'Cancel', 'title'];
  const destructiveButtonIndex = options.length - 1; // Index of Cancel button
  const cancelButtonIndex = options.length[1]; // Index of Cancel button
  const title = options.length[2]; // Index of Cancel button


  const onPress = () => {
    showActionSheetWithOptions({
      options,
      cancelButtonIndex,
      destructiveButtonIndex,
      title
    }, (selectedIndex) => {
      switch (selectedIndex) {
        case 0: // "Add Todo" selected
          setIsModalVisible(true); // Open Todo modal
          // Save 
          break;

        case destructiveButtonIndex:
          // Delete
          break;

        case cancelButtonIndex:
        // Canceled
      }
    });
  }

  const handleCloseModal = () => {
    setIsModalVisible(false); // Close Todo modal
  };
  const handleSaveTask = () => {
    handleAddTask(); // Call the add task function to create the todo
    handleCloseModal(); // Close the modal after saving
  };


  return (
    
    <View style={{ bottom:0, backgroundColor:'transparent', justifyContent:'center', alignItems:'center',marginHorizontal:2, width:365 }} >
      <View style={style.addButton}>
        <Pressable title="+" onPress={onPress} >
          <Text style={{ color: '#FFFFFF', fontSize: 40 ,fontWeight:'400'}} > + </Text>
        </Pressable>
      </View>
     

      {/* <TextInput
        // autoFocus (optional)
         onChangeText={setNewTask}
        value={newTask}
        style={{ }}
        placeholder='Todo...'
        onSubmitEditing={() => handleAddTask()}
        /> */}
      {/* // Handle adding task on 'enter' press (optional) */}


      {/* // Todo Modal  */}
     
        {/* <Modal animationType="slide" transparent={true} visible={isModalVisible}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ margin: 20, backgroundColor: 'white', padding: 20, borderRadius: 10 , width:300}}>
              <TextInput
                onChangeText={setNewTask}
                value={newTask}
                style={{ borderWidth: 1, padding: 10, borderRadius: 5  }}
                placeholder='Enter Todo...'
              />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Button title="Cancel" onPress={handleCloseModal} color="#ccc" />
                <Button title="Save" onPress={() => handleSaveTask()} />
              </View>
            </View>
          </View>
        </Modal> */}
      
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