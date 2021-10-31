import {Dimensions, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from './color';
const max_width = Dimensions.get('screen').width;

export const inputLoginStyle = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginTop:normalize(30),
  },
  txtInput: {
    marginLeft:normalize(20),
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.BLACK,
    width: max_width * 0.85,
  },
  icon:{
    marginTop:normalize(10),
    marginLeft: normalize(-30),
  }, 
  txtEror: {
    color: colors.RED,
    fontSize: normalize(10),
    marginLeft: normalize(30),
    marginTop:normalize(55),
    position:'absolute'
  },
});
