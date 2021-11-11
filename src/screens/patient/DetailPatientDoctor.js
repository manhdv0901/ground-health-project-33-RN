import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import normalize from 'react-native-normalize';
import {useFocusEffect, useNavigation} from '@react-navigation/core';
import ButtonLogin from '../../components/ButtonLogin';
import {
  InfoPatient,
  Temp,
  History,
  Content,
} from '../../components/infodevice/InfoDevice';
import {detailPatientStyle as styles} from '../../theme/detailPatient.style';
import {findDevice} from '../axios/findDevice';
import moment from 'moment';

export default function DetailPatientDoctor({route}) {
  const [dataDevice, setDataDevice] = useState([]);
  const {key_device} = route.params;
  const navigation = useNavigation();
  const [txt, setTxt] = useState();
  const url_spo2 = require('../../assets/images/heart.png');
  const url_heart = require('../../assets/images/heartbeat(2).png');
  const url_temp = require('../../assets/images/temp.png');
  const url_his = require('../../assets/images/ic_home_treatment_course.png');
  console.log(key_device);
  useEffect(() => {
    findDevice({key_device: key_device})
      .then(res => {
        // const array = [...dataDevice, res];
        setDataDevice(res, dataDevice);
        console.log(res);
      })
      .catch(err => console.log('err find data device: ', err));
  },[]);

  // const time_spO2 = moment(dataDevice.spO2[0].real_time)
  //   .utc()
  //   .format('DD/MM/YYYY');
  // const time_heart = moment(dataDevice.heart[0].real_time)
  //   .utc()
  //   .format('DD/MM/YYYY');
  // const time_temp = moment(dataDevice.temp[0].real_time)
  //   .utc()
  //   .format('DD/MM/YYYY');
  return (
    <ScrollView horizontal={false}>
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Nguyễn Văn Anh</Text>
        <Text style={styles.txt}>38 tuổi</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: normalize(15),
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('charSpo2')}>
            <InfoPatient
              url={url_heart}
              // _value={dataDevice.spO2[0].value}
              _name={'SPO2'}
              _time={'Đo lúc'}
              // _date={time_spO2}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('charHeart')}>
            <InfoPatient
              url={url_spo2}
              // _value={dataDevice.heart[0].value}
              _name={'Nhịp tim'}
              _time={'Đo lúc'}
              // _date={time_heart}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('chartTemp')}>
          <Temp
            url={url_temp}
            // _value={dataDevice.temp[0].value}
            _name={'Nhiệt độ cơ thể'}
            _time={'Đo lúc'}
            // _date={time_temp}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('history')}>
          <History url={url_his} _name={'Lịch sử điều trị'} />
        </TouchableOpacity>
        <Content
          value={txt}
          placeholder={'Mời nhập liệu trình'}
          onChangeText={a => {
            setTxt(a);
          }}
        />
      </View>
      <ButtonLogin title={'Cập nhận liệu trình'} />
    </ScrollView>
  );
}
