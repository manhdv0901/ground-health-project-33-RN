import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import { colors } from './color';
import { max_width } from './headerLogin.style';

export const chartStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE_DOWN,
  },

  txtTile: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    marginLeft: normalize(20),
    color: colors.BLACK,
    marginTop: normalize(10),
  },
  item: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    justifyContent:'space-between',
    marginLeft: normalize(20),
    marginTop: normalize(20),
    width: max_width * 0.9,
    padding: normalize(20),
    borderRadius: 20,
  },
  imgChart: {
    // marginTop:normalize(18),
    width: normalize(30),
    height: normalize(30),
    // marginLeft: normalize(),
  },
  txtChart: {
    fontSize: normalize(14),
    marginLeft: normalize(10),
    marginTop: normalize(10),
    fontWeight:'bold',
    color:colors.BLACK,
  },
  imgListEmpty:{
    width:normalize(220),
    height:normalize(150),
    alignSelf:'center',
    justifyContent:'center',
  },
});
