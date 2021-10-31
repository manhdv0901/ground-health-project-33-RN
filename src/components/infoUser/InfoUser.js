import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from '../../theme/color';
import InputLogin from '../InputLogin';

export default function InfoUser({
  navigation,
  url,
  name,
  mail,
  phone,
  address,
  valueName,
  valuePass,
  valueDate,
  valuePhone,
  onChangname,
  onChangPass,
  onChangDate,
  onChangPhone,
  placeholderName,
  placeholderPass,
  placeholderDate,
  placeholderPhone,
  iconName,
  iconPass,
  iconDate,
  iconPhone
}) {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image style={styles.img} source={url} />
        <View style={{marginLeft: normalize(15)}}>
          <Text style={styles.txtName}>{name}</Text>
          <Text style={styles.txt}>{mail} </Text>
          <Text style={styles.txt}>{phone} </Text>
          <Text style={styles.txt}>{address}</Text>
        </View>
      </View>
      <Text style={styles.txtInfo}>Cập nhật thông tin</Text>
      <InputLogin
        value={valueName}
        onChange={onChangname}
        placeholder={placeholderName}
        nameIcon={iconName}
      />
      <InputLogin
        value={valuePass}
        onChange={onChangPass}
        placeholder={placeholderPass}
        nameIcon={iconPass}
      />
       <InputLogin
        value={valuePhone}
        onChange={onChangPhone}
        placeholder={placeholderPhone}
        nameIcon={iconPhone}
      />
      <InputLogin
        value={valueDate}
        onChange={onChangDate}
        placeholder={placeholderDate}
        nameIcon={iconDate}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE_DOWN,
  },
  view1: {
    flexDirection: 'row',
  },
  img: {
    width: normalize(100),
    height: normalize(100),
    marginLeft: normalize(20),
    marginTop: normalize(20),
  },
  txtName: {
    fontWeight: 'bold',
    color: colors.BLACK,
    fontSize: normalize(25),
  },
  txt: {
    marginTop: normalize(10),
    fontWeight: 'bold',
  },
  txtInfo: {
    fontWeight: 'bold',
    fontSize: normalize(18),
    marginTop: normalize(20),
    marginLeft: normalize(20),
    color: colors.BLACK,
  },
});
