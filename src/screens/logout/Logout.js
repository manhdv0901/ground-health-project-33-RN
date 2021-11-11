import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {colors} from '../../theme/color';
import {max_width} from '../../theme/headerLogin.style';
import normalize from 'react-native-normalize';
import {
  cleanUserStorage,
  setUserDoctorStorage,
  setUserStorage,
} from '../../responsitory/LocalStorage';
import {getIdDoctor, getIdPatient} from '../redux/actions/idLogin';
export default function Logout() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logout = () => {
    cleanUserStorage();
    dispatch(getIdPatient({}));
    // dispatch(getNamePatient({}));
    setUserDoctorStorage({});
    setUserStorage({});
    dispatch(getIdDoctor({}));
    // dispatch(getNameDoctor({}));
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touch} onPress={logout}>
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
