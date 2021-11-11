import React, {useEffect} from 'react';
import {View, BackHandler} from 'react-native';
import {useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';

import HeaderLogin from '../../components/HeaderLogin';
import ScrollInput from '../../components/ScrollInput';
import {colors} from '../../theme/color';
import LoadingModal from '../../components/loading/LoadingModal';
import {load} from '../redux/reducers/index';
import {useFocusEffect} from '@react-navigation/core';

export default function Login() {
  const {isLoad} = useSelector(state => state.load);
  let backAction = null;
  useFocusEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackHandle);
    return async () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackHandle);
    };
  });

  const onBackHandle = () => {
    if (backAction + 2000 > new Date().getTime()) {
      // let a = 0;
      BackHandler.exitApp();
      //   console.log('a', a);
    }
    backAction = new Date().getTime();
    Toast.show('Bấm thêm lần nữa để thoát !', Toast.SHORT);

    return true;
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.WHITE}}>
      <HeaderLogin />
      <ScrollInput />
      <LoadingModal visible={isLoad} />
    </View>
  );
}
