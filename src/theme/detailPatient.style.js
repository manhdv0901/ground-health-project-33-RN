import { StyleSheet } from "react-native";
import {max_width} from './headerLogin.style';
import normalize from "react-native-normalize";
import { colors } from "./color";

export const detailPatientStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.WHITE_DOWN,
        marginLeft:normalize(10),
    },
    txtTitle:{
        fontSize:normalize(20),
        fontWeight:'bold',
        marginTop:normalize(20),
        marginLeft:normalize(10),

    },
    txt:{
        fontSize:normalize(15),
        marginLeft:normalize(10),
        marginTop: normalize(10),
    },
    viewCom:{
        marginTop:normalize(10),
        padding:normalize(15),
        width:max_width * 0.43,
        backgroundColor:colors.WHITE,
        borderWidth:2,
        borderColor:colors.WHITE,
        borderRadius:15,
        
    },
    icon:{
    width: normalize(40),
    height: normalize(50),
    // marginLeft: normalize(50),
    marginTop: 20,
    },
    img:{
        width:normalize(45),
        height:normalize(45),
    },
    view2:{
        marginTop:normalize(20),
        width:max_width * 0.92,
        borderRadius:20,
        backgroundColor: colors.WHITE,
        padding:normalize(20),
    },
    txtName:{
        fontSize:normalize(18),
        fontWeight:'bold',
    },
    img2:{
        alignSelf:'center',
        justifyContent:'center',
        width:normalize(50),
        height:normalize(70),
    },
    viewHis:{
        // height:normalize(30),
        flexDirection:'row',
        backgroundColor:colors.WHITE,
        width: max_width * 0.92,
        borderRadius:20,
         padding:normalize(10), 
         marginTop:normalize(25),
        //  marginLeft:normalize(10),
    },
    imgHis:{
        width:normalize(30),
        height:normalize(40),
        marginRight:normalize(30),
        marginLeft:normalize(10),
    },
    viewIn:{
        // height:normalize(30),
        // flexDirection:'row',
        backgroundColor:colors.WHITE,
        width: max_width * 0.92,
        borderRadius:20,
         padding:normalize(10), 
         marginTop:normalize(25),
        //  marginLeft:normalize(10),
    },

})