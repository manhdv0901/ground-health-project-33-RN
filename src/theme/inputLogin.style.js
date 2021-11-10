import {Dimensions, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from './color';
const max_width = Dimensions.get('screen').width;

export const inputLoginStyle = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:normalize(5),
    borderWidth:2,
    borderRadius: 8,
    alignItems:'center',
    marginHorizontal: normalize(30),
  },
  txtAbove:{
    marginTop: normalize(20),
   marginBottom: normalize(8),
    marginLeft: normalize(20),
     fontSize: normalize(15),
    color: colors.BLACK,
  },
  txtInput: {
    flex:1,
    borderColor: colors.BLACK,
    color: colors.BLACK,
    fontSize: normalize(18),
    marginTop: normalize(5),
  },
  icon:{
    // marginTop:normalize(10),
    // marginLeft: normalize(-40),
    marginRight: normalize(10),
  }, 
  txtEror: {
    color: colors.RED,
    fontSize: normalize(10),
    marginLeft: normalize(30),
    marginTop:normalize(55),
    position:'absolute'
  },
});
