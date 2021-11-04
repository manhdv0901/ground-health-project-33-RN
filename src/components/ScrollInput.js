import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import InputLogin from './InputLogin';
import {scrollInputStyle as styles} from '../theme/scrollInput.style';
import CheckBox from '@react-native-community/checkbox';
import ButtonLogin from './ButtonLogin';
import {loginPatient, loginDoctor} from '../screens/axios/authentication';
import {useDispatch} from 'react-redux';
import {getIdPatient, getIdDoctor} from '../screens/redux/actions/idLogin';

// const navigation = useNavigation();
export default function ScrollInput() {
  const navigation = useNavigation();
  const [isCheck, setIsCheck] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!isCheck) {
      loginPatient({username: user, password: password})
        .then(res => {
          if (res == null) {
            Alert.alert('Tài khoản mật khẩu không đúng vui lòng thử lại !');
          } else {
            navigation.navigate('patient');
            dispatch(getIdPatient(res.id));
            // console.log('id: ', dispatch(getIdPatient()));
          }
        })
        .catch(err => {
          console.log('err patient -->', err);
        });
    } else {
      loginDoctor({username: user, password: password})
        .then(res => {
          console.log('data doctor --> ', res);
          if (res == null) {
            Alert.alert('Tài khoản mật khẩu không đúng vui lòng thử lại !');
          } else {
            navigation.navigate('doctor');
            dispatch(getIdDoctor(res.id));
          }
        })
        .catch(err => {
          console.log('err doctor --> ', err);
        });
    }
  };
  const handleLogin1 = () => {
    navigation.navigate(isCheck == true ? 'doctor' : 'patient');
  };

  return (
    <SafeAreaView style={styles.view}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        scrollEnabled={true}
        // nestedScrollEnabled={true}
      >
        <View style={styles.container}>
          <Text style={styles.txt}>Đăng nhập</Text>
          <InputLogin
          title={'Tài khoản:'}
            value={user}
            onChange={a => setUser(a)}
            placeholder="Mời nhập tài khoản"
            nameIcon="user-alt"
          />
          <InputLogin
          title={'Mật khẩu:'}
            value={password}
            secureTextEntry={true}
            onChange={a => setPassword(a)}
            placeholder="Mời nhập mật khẩu"
            nameIcon="lock"
          />
          <View style={styles.viewCheck}>
            <CheckBox
              style={styles.checked}
              disabled={false}
              value={isCheck}
              onValueChange={a => setIsCheck(a)}
            />
            <Text style={styles.txtCheck}>Đăng nhập bác sĩ</Text>
          </View>
          <ButtonLogin title={'Đăng nhập'} onPress={handleLogin} />
        </View>
        <View style={styles.container}>
          <Text style={styles.txt}>Đăng kí</Text>
          <InputLogin
            value={password}
            onChange={a => setPassword(a)}
            placeholder="Họ và tên"
            nameIcon="user-alt"
          />
          <InputLogin
            value={password}
            onChange={a => setPassword(a)}
            placeholder="Số điện thoại"
            nameIcon="phone"
          />
          <InputLogin
            value={password}
            onChange={a => setPassword(a)}
            placeholder="Ngày sinh"
            nameIcon="ticket-alt"
          />
          <InputLogin
            value={password}
            onChange={a => setPassword(a)}
            placeholder="Email"
            nameIcon="envelope-square"
          />
          <InputLogin
            value={password}
            onChange={a => setPassword(a)}
            placeholder="Mời nhập mật khẩu"
            nameIcon="lock"
          />
          <InputLogin
            value={password}
            onChange={a => setPassword(a)}
            placeholder="Nhập lại mật khẩu"
            nameIcon="lock"
          />
          <ButtonLogin title={'Đăng kí'} onPress={() => alert('Success')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
