import React, {useEffect, useState} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import { useDispatch } from 'react-redux';
import { getNamePatient } from '../redux/actions/nameUser';
import InfoUser from '../../components/infoUser/InfoUser';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {findOnePatient} from '../axios/findPatient';
import {useSelector} from 'react-redux';
import {login} from '../redux/reducers/index';

export default function InfoPatient() {
  const url = require('../../assets/images/man.png');
  const [dataPatient, setDataPatient] = useState([]);

  //get data loginDoctor on redux
  const idPatient = useSelector(state => state.login);
  console.log('id patient find info: ', idPatient.id);

  // const dispatch = useDispatch();
  // console.log('id patient: ', idPatient.id);
  useEffect(() => {
    findOnePatient({id: idPatient.id})
      .then(res => {
        setDataPatient(res);
        // console.log('data one a patient: ', res);
        // dispatch(getNamePatient(res.name));
        // console.log('name patient: ', res.name);
      })
      .catch(err => {
        console.log('err data patient: ', err);
      });
  }, []);

  const txt = (content, value) =>{
 
      <Text>{content}:{value}</Text>
     
    }
  

  return (
    <View style={{flex: 1}}>
      <InfoUser
        url={url}
        name={dataPatient.name}
        titleAge={'Tuổi:'}
        age={dataPatient.age}
        titleId={'Mã số bệnh nhân:'}
        id={dataPatient.id}
        titlePhone={'Số điện thoại:'}
        phone={dataPatient.phone}
        titleUser={'Tên đăng nhập:'}
        valueUser={dataPatient.username}
        editableUser={false}
        iconUser={'user-alt'}
        titlePass={'Mật khẩu:'}
        valuePass={dataPatient.password}
        editablePass={false}
        iconPass={'eye'}
        titleDate={'Ngày sinh:'}
        valueDate={dataPatient.birth_day}
        editableUser={false}
        iconDate={'wallet'}
        titleDevice={'Thiết bị đang sử dụng:'}
        valueDevice={dataPatient.key_device}
        editableDevice={false}
        iconDevice={'first-aid'}
      />
    </View>
  );
}

