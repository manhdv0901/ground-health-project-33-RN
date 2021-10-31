import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from './color';
import {max_width} from './headerLogin.style';

export const notifiStyle = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.WHITE_DOWN,
  },
  item: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    marginLeft: normalize(20),
    marginTop: normalize(20),
    width: max_width * 0.9,
    padding: normalize(20),
    borderRadius: 20,
  },
  txtNoti: {
    fontSize: normalize(24),
    fontWeight: 'bold',
  },
  txtName: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    marginTop: normalize(5),
  },
  txt: {
    fontSize: normalize(15),
    marginTop: normalize(5),
  },
  imgNoti: {
    marginTop:normalize(18),
    width: normalize(50),
    height: normalize(50),
    marginLeft: normalize(20),
  },
  //details notification
  itemDetail: {
    backgroundColor: colors.WHITE,
    // flexDirection:'row',
    marginLeft: normalize(20),
    marginTop: normalize(20),
    width: max_width * 0.9,
    padding: normalize(20),
    borderRadius: 20,
  },
  txtNameDetail: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    marginTop: normalize(5),
    textAlign:'center',
  },
  room:{
    fontSize: normalize(16),
    fontWeight:'bold',
    marginTop:normalize(10),
  }
});
