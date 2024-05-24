import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Pressable, TextInput, ScrollView, KeyboardAvoidingView, Platform, Keyboard, SectionList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import style from './style'
import { FlatList } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SearchBar from '../../components/SearchBar/SearchBar';
import NewTaskInput from '../../components/NewTaskInput/NewTaskInput';
import ActionSheet from 'react-native-actions-sheet';
import Add from '../Add/Add';
import DatePicker from "react-native-date-picker-by-week";
import DayTasks from "./DayTasks.json"




// const initialTasks =
// {
//     "2024-05-21": [
//         {
//             "title": "Save the Tasks",
//             "isCompleted": true,
//         },
//         {
//             "title": "Save the Tasks",
//             "isCompleted": true,
//         }

//     ],
//     "2024-05-22": [
//         {
//             "title": "Save the Tasks By writing ",
//             "isCompleted": false,
//         },
//         {
//             "title": "Save the Tasks By writing ",
//             "isCompleted": false,
//         },

//     ],
//     "2024-05-23": [
//         {
//             "title": "add a new task ",
//             "isCompleted": false,
//         },
//         {
//             "title": "add a new task ",
//             "isCompleted": false,
//         },
//     ],
//     "2024-05-24": [
//         {
//             "title": "change a new task ",
//             "isCompleted": false,
//         },
//         {
//             "title": "Separate in 3 tabs as: List - Add - Settings ",
//             "isCompleted": false,
//         }
//     ]
// }




// [
//     {
//         title: 'Save the Tasks',
//         isCompleted: true,
//         dueDate: new Date('2024-05-21')
//     },
//     {
//         title: 'Save the Tasks By writing ',
//         isCompleted: false,
//         dueDate: new Date('2024-05-22')
//     },
//     {
//         title: 'add a new task ',
//         isCompleted: false,
//         dueDate: new Date('2024-05-23')
//     },
//     {
//         title: 'change a new task ',
//         isCompleted: false,
//         dueDate: new Date('2024-05-24')
//     },
//     {
//         title: 'sperate in 3 tabs as: List - Add - Settings ',
//         isCompleted: false,
//         dueDate: new Date('2024-05-24')
//     },

// ]




const Home = () => {
    const [tasks, setTasks] = useState(DayTasks)
    const [date, setDate] = useState(new Date());
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [showPicker, setShowPicker] = useState(false)



    // const handleDateChange = (newDate) => { 
    //     setDate(newDate)
    //           // Compare task dueDate (year, month, day) with selected date (year, month, day)
    //     const filtered = tasks.filter((todo) => { 
    //         return ( 
    //             todo.dueDate.getFullYear() === newDate.getFullYear() && 
    //             todo.dueDate.getMonth() === newDate.getMonth() && 
    //             todo.dueDate.getDate() === newDate.getDate() 

    //         )
    //     })
    //     setFilteredDate(filtered) // update filteredTasks
    //     console.log("sdfkjbdkjsfdsfasd")

    // };

    // useEffect(() => { 
    //         // Update filtered tasks when tasks or date changes
    //     setFilteredDate(tasks.filter((todo) => { 
    //         return (
    //             todo.dueDate.getFullYear() === date.getFullYear() &&
    //             todo.dueDate.getMonth() === date.getMonth() &&
    //             todo.dueDate.getDate() === date.getDate()
    //           );
    //     }))
    //     console.log("The date has changed")

    // }, [tasks,date])   // Dependency array for useEffect


    // useEffect(() => {
    //     const filterTasks = () => {
    //       const filtered = tasks.filter((todo) => {
    //         // Extract year, month, and day from both task dueDate and selected date
    //         const todoYear = todo.dueDate?.getFullYear();
    //         const todoMonth = todo.dueDate?.getMonth();
    //         const todoDay = todo.dueDate?.getDate();
    //         const selectedYear = date.getFullYear();
    //         const selectedMonth = date.getMonth();
    //         const selectedDay = date.getDate();

    //         // Ensure dueDate exists and compare year, month, and day for filtering
    //         return todoYear !== undefined && todoYear === selectedYear && todoMonth === selectedMonth && todoDay === selectedDay;
    //       });
    //       setFilteredTasks(filtered);
    //     };

    //     // Filter tasks whenever tasks or date changes
    //     filterTasks();
    //   }, [tasks, date]);




    const actionSheetRef = useRef(null);



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


    const onTaskPressed = ([index]) => {
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
                    <View>
                        {/* <SectionList
                            sections={DayTasks}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item }) => (
                                <View style={styles.item}>
                                    <Text>{item}</Text>
                                </View>
                            )}
                            renderSectionHeader={({ section: { title } }) => (
                                <Text style={styles.header}>{title}</Text>
                            )}
                        /> */}
                        <DatePicker

                            date={date}
                            setDate={setDate}
                            key={date.toString()}
                            // onPress={handleDateChange}
                            currDateDay={"#000000"}
                            currDayDate={"#000000"}
                            remainingDays={"#adadad"}
                            remainingDates={"#a8a8a8"}
                            selectedDateBackground={"#400D51"}
                            selectedDay={"#400D51"}
                            selectedDate={"#FFE9A0"}

                        />
                        
                    </View>
                    <View style={style.searchBox}>
                        <SearchBar />
                    </View>
                    <Text style={style.todayTasks} >Today's tasks </Text>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        keyboardVerticalOffset={250}
                    >
                        <FlatList
                            data={DayTasks[date.toISOString().split('T')[0]]}
                            // data={DayTasks}
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
                        <View style={{ backgroundColor: 'transparent', justifyContent: 'flex-end', alignItems: 'center', height:100 }} >
                            <Add onAdd={(newTodos) => setTasks((currentTodos) => [...currentTodos, newTodos])

 } />
                        </View>

                        {/* <NewTaskInput onAdd={(newTodo) =>
                            setTasks((currentTasks) => [...currentTasks, newTodo])
                        }
                        /> */}

                    </KeyboardAvoidingView>

                </View>



            </SafeAreaView>
        </View>




    )
}

export default Home;

