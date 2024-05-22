import { StyleSheet } from "react-native";

const style = StyleSheet.create({ 
    addTodoAction :{ 
        color: 'white', 
        fontSize: 50 ,
        fontWeight:'400',
        // justifyContent:'center',
        // alignItems:'center'
        // marginVertical:10
    },

    addTodoActionContainer:{ 
        backgroundColor:'#DFBD43',
        width:70,
        height:70,
        borderRadius:50,
        alignItems:'center',
        // marginVertical:1,
        // marginHorizontal:20,
        // justifyContent:'center',
        // alignItems:'center'
        

    },

    addTodoInput:{ 
        borderWidth:1,
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        // marginHorizontal:10,
        height:50,
        borderRadius:30,
        // left:10,
        textAlign:'left',
        // margin:10
        paddingLeft:20,
        
        
        

    }
})

export default style