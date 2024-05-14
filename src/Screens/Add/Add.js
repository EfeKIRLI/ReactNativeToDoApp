import React, { useRef ,useState} from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import style from './style';
import ActionSheet from "react-native-actions-sheet";




const Add = ({onAdd}) => {
  const [newTask, setNewTask] = useState('')
  const actionSheetRef = useRef(null);

  const handleAddTask = () => { 
    if (!newTask) return;
    onAdd({title: newTask, isCompleted:false})
    setNewTask('')
    console.log('New task is added', newTask)
    console.warn('New task is added', newTask)
    
  }
  

  const handlePress = () => { 
    actionSheetRef.current?.show();
  }

  const handlePressClose = () => { 
    actionSheetRef.current?.hide();

  }

  return (
    <View>
      <View> 
      <View style={style.addTodoActionContainer} >   
      <TouchableOpacity onPress={handlePress} >
        <Text style={style.addTodoAction} > + </Text>
      </TouchableOpacity>
      
      <ActionSheet ref={actionSheetRef} > 
      <Text> Add Todo </Text>
       <TextInput 
       onChangeText={setNewTask}
       value={newTask}
       placeholder= 'Add a Todo...'
       onSubmitEditing={handleAddTask}
       />
      
      <TouchableOpacity onPress={handlePressClose} > 
        <Text> Cancel </Text>
      </TouchableOpacity>
      </ActionSheet>
      </View>
      </View>
    </View>


  )
}

export default Add;
