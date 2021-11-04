import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {
  InfoPatient,
  Temp,
  History,
  Content,
} from '../../components/infodevice/InfoDevice';
import {useNavigation} from '@react-navigation/core';
import { detailPatientStyle as styles } from '../../theme/detailPatient.style';

export default function DetailPatient({route}) {
  const navigation = useNavigation();
  const url_spo2 = require('../../assets/images/heart.png');
  const url_heart = require('../../assets/images/heartbeat(2).png');
  const url_temp = require('../../assets/images/temp.png');
  const url_his = require('../../assets/images/ic_home_treatment_course.png');
  const {data_heart} = route.params;
  const {heart_time} = route.params;
  const {data_spO2} = route.params;
  const {spO2_time} = route.params;
  const {data_temp} = route.params;
  const {temp_time} = route.params;
  const {name} = route.params;
  const {age} = route.params;
  const {key_device} = route.params;
  // console.log(name, age, key_device);

  const naviChart = ({item}) => {
    navigation.navigate('chartHeart');
  };
  return (
    <ScrollView horizontal={false}>
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Lịch sử đo gần nhất: </Text>
        <Text style={styles.txt}> Thông tin: </Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('chartSpo2', {
                device: key_device,
              })
            }>
            <InfoPatient
              url={url_heart}
              _value={data_spO2}
              _name={'% SPO2'}
              _time={'Đo lúc'}
              _date={spO2_time}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              (() => navigation.navigate('chartHeart',{
                device: key_device,
              })
              )
            }>
            <InfoPatient
              url={url_spo2}
              _value={data_heart}
              _name={'Nhịp tim/ phút'}
              _time={'Đo lúc'}
              _date={heart_time}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={
            (() => navigation.navigate('chartTemp',{
              device: key_device,
            })
            )
          }>
          <Temp
            url={url_temp}
            _value={data_temp}
            _name={'Nhiệt độ cơ thể *C'}
            _time={'Đo lúc'}
            _date={temp_time}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('history')}>
          <History url={url_his} _name={'Lịch sử điều trị'} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
