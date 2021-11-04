import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from '../../theme/color';
import InputLogin from '../InputLogin';

export default function InfoUser({
  url,
  titleId,
  titleAge,
  titlePhone,
  titleUser,
  titlePass,
  titleDate,
  titleDevice,
  name,
  id,
  age,
  phone,
  valueUser,
  valuePass,
  valueDate,
  valueDevice,
  iconUser,
  iconPass,
  iconDate,
  iconDevice,
  editableUser,
  editablePass,
  editableDate,
  editableDevice,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image style={styles.img} source={url} />
        <View style={{marginLeft: normalize(15)}}>
          <Text style={styles.txtName}>{name}</Text>
          <View style={styles.view1}>
            <Text style={styles.txt}>{titleId} </Text>
            <Text style={styles.txt}>{id} </Text>
          </View>
          <View style={styles.view1}>
            <Text style={styles.txt}>{titleAge} </Text>
            <Text style={styles.txt}>{age} </Text>
          </View>
          <View style={styles.view1}>
            <Text style={styles.txt}> {titlePhone} </Text>
            <Text style={styles.txt}> {phone} </Text>
          </View>
        </View>
      </View>
      <Text style={styles.txtInfo}>Thông tin chi tiết</Text>
      <InputLogin
        title={titleUser}
        editable={editableUser}
        value={valueUser}
        nameIcon={iconUser}
      />
      <InputLogin
        title={titlePass}
        editable={editablePass}
        value={valuePass}
        nameIcon={iconPass}
      />
      <InputLogin
        title={titleDate}
        editable={editableDate}
        value={valueDate}
        nameIcon={iconDate}
      />
      <InputLogin
        title={titleDevice}
        editable={editableDevice}
        value={valueDevice}
        nameIcon={iconDevice}
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
    marginTop: normalize(7),
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  txtInfo: {
    fontWeight: 'bold',
    fontSize: normalize(18),
    marginTop: normalize(20),
    marginLeft: normalize(20),
    color: colors.BLACK,
  },
});
