import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {
  InfoPatient,
  Temp,
  History,
  Content,
} from '../../components/infodevice/InfoDevice';
import {useNavigation} from '@react-navigation/core';
import {detailPatientStyle as styles} from '../../theme/detailPatient.style';
import normalize from 'react-native-normalize';
import moment from 'moment';
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
  const {key_device} = route.params;

  const time_spO2 = moment(spO2_time).utc().format('DD/MM/YYYY');
  const time_heart = moment(heart_time).utc().format('DD/MM/YYYY');
  const time_temp = moment(temp_time).utc().format('DD/MM/YYYY');

  return (
    <ScrollView horizontal={false}>
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Lịch sử đo gần nhất: </Text>
        <Text style={styles.txt}> Thông tin: </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: normalize(20),
          }}>
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
              _date={time_spO2}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('chartHeart', {
                device: key_device,
              })
            }>
            <InfoPatient
              url={url_spo2}
              _value={data_heart}
              _name={'Nhịp tim/ phút'}
              _time={'Đo lúc'}
              _date={time_heart}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('chartTemp', {
              device: key_device,
            })
          }>
          <Temp
            url={url_temp}
            _value={data_temp}
            _name={'Nhiệt độ cơ thể *C'}
            _time={'Đo lúc'}
            _date={time_temp}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('history')}>
          <History url={url_his} _name={'Lịch sử điều trị'} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
