import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from '../../theme/color';
import {max_width} from '../../theme/headerLogin.style';

export default function ChartDevices({url_img, title_time, time, content,txt_time}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.item}>
          <Image style={styles.imgChart} source={url_img} />
          <Text style={styles.txtChart}>{title_time} {content}</Text>
          <Text style={styles.txtChart}>{txt_time}{time}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE_DOWN,
    justifyContent:'center',
    alignItems:'center'
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
    marginTop: normalize(20),
    width: max_width * 0.95,
    padding: normalize(20),
    borderRadius: normalize(20),
  },
  imgChart: {
    width: normalize(30),
    height: normalize(30),
  },
  txtChart: {
    fontSize: normalize(16),
    marginLeft: normalize(10),
    marginTop: normalize(10),
    fontWeight: 'bold',
    color: colors.BLACK,
  },
});
