import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container :{ 
        flex:1,
        backgroundColor: '#FFFDF4F5'

    },
    subContainer:{ 
        marginTop:160,
        left:23,
        // gap:30
    },
    todayTasks:{ 
        fontSize:20,
        color: '#444444',
        lineHeight:23.7,
        fontWeight:"600"

    },

    taskConatiner :{ 
        padding:10,
        borderWidth:2,
        borderColor: '#D6D6D6',
        // borderColor: borderColor,
        borderStyle:'solid',
        // marginVertical:10,
        borderRadius:20,
        width:370,
        height:72,
        flexDirection:'row'
        

    },
    taskTitle :{ 
        fontSize:16,
        fontWeight:"400",
        fontFamily:'Roboto-Medium',
        color: '#00000080',
        lineHeight:18.96

        
    }
})
export default style;