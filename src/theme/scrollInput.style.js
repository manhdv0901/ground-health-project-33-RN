import { StyleSheet } from "react-native";
import { max_width } from "./headerLogin.style";
import { colors } from "./color";
import normalize from "react-native-normalize";
export const scrollInputStyle = StyleSheet.create({
    view:{
        
            backgroundColor: colors.BLUE,
    },
    scroll:{
        backgroundColor:colors.WHITE,
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
    },
    container:{
        width:max_width,
        // flex:1,
    },
    txt:{
        fontSize:normalize(22),
        color: colors.BLACK,
        fontWeight:'bold',
        justifyContent:'center',
        textAlign:'center'
    },
     checked:{
    width:normalize(40),
    height:normalize(40),
    marginLeft:normalize(180),
  },
  viewCheck:{
      marginTop:normalize(20),
      flexDirection:'row',
  },
  txtCheck:{
      fontWeight:'bold',
      fontSize: normalize(16),
      marginTop: normalize(10),
  },
  gender:{
      flexDirection:'row',
  }
})