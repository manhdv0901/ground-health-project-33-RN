import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from '../../theme/color';
import { max_width } from '../../theme/headerLogin.style';

export default function ChartDevices({url_img,title_time,time}) {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTile}>Lịch sử đo gần nhất</Text>
      <View style={styles.item}>
      <Image style={styles.imgChart} source={url_img} />
          <Text style={styles.txtChart}>{title_time}</Text>
          <Text style={styles.txtChart}>{time}</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
    marginLeft: normalize(20),
    marginTop: normalize(20),
    width: max_width * 0.9,
    padding: normalize(20),
    borderRadius: 20,
  },
  imgChart: {
    // marginTop:normalize(18),
    width: normalize(50),
    height: normalize(50),
    // marginLeft: normalize(),
  },
  txtChart:{
      fontSize:normalize(16),
      marginLeft: normalize(20),
      marginTop:normalize(10),
  }
});
