import axios from 'axios';
import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import normalize from 'react-native-normalize';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {
  getUserStorage,
  getUserDoctorStorage,
} from '../../responsitory/LocalStorage';
import {colors} from '../../theme/color';
import {login, name} from '../redux/reducers/index';
import {getNameDoctor, getNamePatient} from '../redux/actions/nameUser';
import {getIdDoctor, getIdPatient} from '../redux/actions/idLogin';

export default function Splash() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const url = require('../../assets/images/doctor_backgroup.png');
  // hàm async storage sẽ trả về một object và mk sẽ lấy object đó để lưu nó lại trong redux là di chuyển redux đến các màn khác

  useEffect(() => {
    setData();
  }, []);
  const setData = async () => {
    try {
      const usePatient = await getUserStorage();
      const useDoctor = await getUserDoctorStorage();

      console.log('id patient login: ', usePatient);
      console.log('id doctor login: ', useDoctor);

      if (Object.keys(usePatient).length > 0) {
        dispatch(getIdPatient(usePatient.id));
        dispatch(getNamePatient(usePatient.name));
        navigation.navigate('Patient');
      }else if (Object.keys(useDoctor).length > 0) {
        dispatch(getIdDoctor(useDoctor.id));
        dispatch(getNameDoctor(useDoctor.name));
        navigation.navigate('Doctor');
      } else {
        dispatch(getIdDoctor({}));
        dispatch(getNameDoctor({}));
        navigation.navigate('Login');
      }
    } catch (err) {
      if (__DEV__) {
        console.log('error ', err);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={url} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: normalize(300),
    height: normalize(300),
  },
});
