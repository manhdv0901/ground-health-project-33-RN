import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {colors} from '../../theme/color';
import {max_width} from '../../theme/headerLogin.style';
import {login} from '../redux/reducers/index';
import { findOneDoctor, findOnePatient } from '../axios/findPatient';

import normalize from 'react-native-normalize';
import { getIdDoctor, getIdPatient } from '../redux/actions/idLogin';
export default function Logout({}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const count = useSelector(a => a.login);

  const logout = () => {
      if( count == getIdDoctor){
          dispatch(getIdDoctor({}));
          navigation.navigate('login');
      }else if ( count == getIdPatient){
        dispatch(getIdPatient({}));
      }else{
          Alert.alert('Lỗi');
      }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate('login')}>
        <Text style={styles.txtTouch}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.WHITE},
  touch: {
    width: max_width * 0.9,
    height: normalize(50),
    backgroundColor: colors.BLUE_LIGHT,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: normalize(10),
    borderColor: colors.BLUE_LIGHT,
    borderWidth: 2,
    top: '90%',
    justifyContent: 'center',
  },
  txtTouch: {
    fontSize: normalize(18),
    color: colors.WHITE,
  },
});
