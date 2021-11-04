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
import {getNameDoctor, getNamePatient} from '../screens/redux/actions/nameUser';
import {setUserStorage, setUserDoctorStorage} from '../responsitory/LocalStorage';
// const navigation = useNavigation();
export default function ScrollInput() {
  const navigation = useNavigation();
  const [isCheck, setIsCheck] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!isCheck) {
      try {
        const resPatient = await loginPatient({
          username: user,
          password: password,
        });
        if (resPatient) {
          setUserStorage(resPatient);
          dispatch(getIdPatient(resPatient.id));
          dispatch(getNamePatient(resPatient.name));
          navigation.navigate('Patient');
        }else{
          Alert.alert('Cảnh báo! Vui lòng nhập đúng tài khoản mật khẩu');
        }
      } catch (err) {
        console.log('error login patient: ', err);
      }
    } else {
      try {
        const resDoctor = await loginDoctor({
          username: user,
          password: password,
        });
        if (resDoctor) {
          setUserDoctorStorage(resDoctor);
          dispatch(getIdDoctor(resDoctor.id));
          dispatch(getNameDoctor(resDoctor.name));
          navigation.navigate('Doctor');
        } else {
          Alert.alert('Cảnh báo! Vui lòng nhập đúng tài khoản mật khẩu');
        }
      } catch (err) {
        console.log('error login doctor: ', err);
      }
    }
  };
  // const loginEx = async () => {
  //   try {
  //     const res = await loginPatient({username: user, password: password});
  //     console.log(res);
  //     if (res) {
  //       setIdStorage(res.id);
  //       navigation.navigate('ListPatient');
  //     }
  //   } catch (error) {
  //     console.log('err', error);
  //   }
  // };

  return (
    <SafeAreaView style={styles.view}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        scrollEnabled={true}>
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

//   if (!isCheck) {
//     loginPatient({username: user, password: password})
//       .then(res => {
//         if (res == null) {
//           Alert.alert('Tài khoản mật khẩu không đúng vui lòng thử lại !');
//         } else {
//           navigation.navigate('patient');
//           dispatch(getIdPatient(res.id));
//           dispatch(getNamePatient(res.name));
//         }
//       })
//       .catch(err => {
//         console.log('err patient -->', err);
//       });
//   } else {
//     loginDoctor({username: user, password: password})
//       .then(res => {
//         console.log('data doctor --> ', res);
//         if (res == null) {
//           Alert.alert('Tài khoản mật khẩu không đúng vui lòng thử lại !');
//         } else {
//           navigation.navigate('doctor');
//           dispatch(getIdDoctor(res.id));
//           dispatch(getNameDoctor(res.name));
//         }
//       })
//       .catch(err => {
//         console.log('err doctor --> ', err);
//       });
//   }
// };
