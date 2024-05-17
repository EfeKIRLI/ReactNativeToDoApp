import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFDF4F5',
        justifyContent:'center',
        alignItems:'center'

    },
    subContainer: {
        marginTop: 90,
        marginHorizontal:20
        // justifyContent:'center',
        // alignItems:'center'
        // gap:30
    },
    todayTasks: {
        fontSize: 20,
        color: '#444444',
        lineHeight: 23.7,
        fontWeight: "600"

    },

    taskConatiner: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: 370,
        height: 72,
        gap: 10,
        // padding: 10,
        paddingVertical:10,
        paddingHorizontal:10,
        borderWidth: 2,
        borderColor: '#D6D6D6',
        // borderColor: borderColor,
        borderStyle: 'solid',
        // marginVertical:10,
        borderRadius: 20,
        position:"relative",
        // backgroundColor:'blue'



    },
    taskTitle: {
        fontSize: 16,
        fontWeight: "400",
        fontFamily: 'Roboto-Medium',
        color: '#00000080',
        lineHeight: 18.96,
        // marginLeft:80,
        // textDecorationLine:'line-through',


    },

    chekboxIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        marginTop:5,
        // backgroundColor:'yellow'
    },
    deleteIcon:{
        position:"absolute",
        right:10,
        bottom:5,
    },
    editIcon: { 
        position:"absolute",
        right:5,
        top:5,
    },

    addTaskInput: { 
        
    },

    searchBox:{ 
        // marginHorizontal:25,
        marginTop:20,
        // left:2,
        width:370
    }
})
export default style;