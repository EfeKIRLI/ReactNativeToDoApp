import React, { useRef, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import style from './style';
import ActionSheet from "react-native-actions-sheet";
import moment from 'moment';
import DatePicker from 'react-native-date-picker-by-week';





const Add = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('')
  const actionSheetRef = useRef(null);
  const formattedDate = moment().subtract(10, 'days').format('YYYY-MM-DD');
  // const formattedDate = new Date().toISOString().slice(0, 10); // Get YYYY-MM-DD



  const handleAddTask = () => {
    if (!newTask) return;
    onAdd({ date: formattedDate, title: newTask, isCompleted: false })
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
          <ActionSheet containerStyle={{ height: '40%' }} ref={actionSheetRef} >
            <Text style={{ fontSize: 20, fontWeight: '400', marginTop: 30, textAlign: 'left', left: 20 }}>    Todo</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }} >
              <TextInput
                style={style.addTodoInput}
                onChangeText={setNewTask}
                value={newTask}
                placeholder='Add a Todo...'
                placeholderTextColor='#11182744'
                onSubmitEditing={handleAddTask}
              />

            </View>
            <Text style={{ fontSize: 20, fontWeight: '400', marginTop: 10, textAlign: 'left', left: 20 }}>   Date  </Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
              <TextInput
                style={{ borderWidth: 1, width: '90%', borderRadius: 30, height: 50, paddingLeft: 20 }}
                // onChangeText={setNewTask}
                // value={newTask}
                // onSubmitEditing={handleAddTask}
                placeholder='Sat Aug 21 2024'
                placeholderTextColor='#11182744'
                keyboardType='numeric'
              />
            </View>
            <View>
              <TouchableOpacity onPress={handlePressClose} >
                <Text style={{ fontSize: 20, textAlign: 'center', top: 10 }} > Cancel </Text>
              </TouchableOpacity>
            </View>
          </ActionSheet>

        </View>
      </View>
    </View>


  )
}

export default Add;
