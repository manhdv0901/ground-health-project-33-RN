import { Dimensions, StyleSheet } from "react-native";
import { colors } from "./color";
export const max_width = Dimensions.get('screen').width;
export const max_height = Dimensions.get('screen').height;

export const InputLoginStyle = StyleSheet.create({
    container:{
       width:max_width,
       height: max_height * 0.2,
       backgroundColor:colors.BLUE,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        backgroundColor: colors.BLUE,
    },
    txt:{
        fontSize:24,
        fontFamily:'tahoma',
        color: colors.WHITE,
        fontWeight:"bold",
    }
})