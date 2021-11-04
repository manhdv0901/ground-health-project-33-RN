import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import { colors } from './color';
import { max_height } from './headerLogin.style';

export const patientStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.RED,
    // height: max_height * 0.8 ,
  },
  item: {
    marginTop: normalize(20),
    width: '90%',
    backgroundColor: '#eeee',
    flexDirection: 'row',
    marginLeft: normalize(20),
    borderWidth: normalize(2),
    borderRadius: 10,
  },
  icon: {
    width: normalize(40),
    height: normalize(50),
    marginLeft: normalize(20),
    marginTop: normalize(20),
  },
  txtName: {
    fontSize: normalize(22),
    fontWeight: 'bold',
  },
  info: {
    padding: normalize(10),
    marginLeft: normalize(10),
  },
  txtRoom: {
    fontSize: normalize(18),
    marginLeft: normalize(5),
  },
  txtAge: {
    fontSize: normalize(14),
    marginLeft: normalize(5),
  },
  viewDel:{
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  touchDel:{
    
    marginLeft:normalize(15),
    borderRadius:15
  },
  txtDel:{
    fontSize: normalize(15),
    
    color:colors.RED
  },
  imgListEmpty:{
    width:normalize(220),
    height:normalize(150),
    justifyContent:'center',
    alignSelf:'center',
  },
    viewTouch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalize(10),
    marginBottom: normalize(25),
  },
   viewImg: {
     marginBottom:normalize(30),
    left: '80%',
  },
  imaAdd: {
    width: normalize(60),
    height: normalize(60),
  },

});
