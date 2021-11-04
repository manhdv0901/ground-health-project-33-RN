import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {login} from '../redux/reducers/index';
import InfoUser from '../../components/infoUser/InfoUser';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {findOneDoctor} from '../axios/findPatient';


export default function InfoDoctor() {
  const url = require('../../assets/images/man.png');
  const [dataDoctor, setDataDoctor] = useState([]);
  //get data loginDoctor on redux
  const idDoctor = useSelector(state => state.login);

  useEffect(() => {
    findOneDoctor({id: idDoctor.id})
      .then(res => {
        setDataDoctor(res);
      })
      .catch(err => {
        console.log('err data doctor: ', err);
      });
  }, []);
  return (
    <View style={{flex: 1}}>
      <InfoUser
        url={url}
        name={dataDoctor.name}
        titleId={'Mã số bác sĩ:'}
        id={dataDoctor.id}
        valueUser={dataDoctor.username}
        editableUser={false}
        iconUser={'user-alt'}
        valuePass={dataDoctor.password}
        editablePass={false}
        iconPass={'eye'}
        valueDate={dataDoctor.gender}
        editableDate={false}
        iconDate={'wallet'}
        valueDevice={dataDoctor._id}
        editableDate={false}
        iconDevice={'wallet'}
      />
    </View>
  );
}
