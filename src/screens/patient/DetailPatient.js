import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {
  InfoPatient,
  Temp,
  History,
  Content,
} from '../../components/infodevice/InfoDevice';
import { useNavigation } from '@react-navigation/core';
import {detailPatientStyle as styles} from '../../theme/detailPatient.style';


export default function DetailPatient() {
  const navigation = useNavigation();
  const url_spo2 = require('../../assets/images/heart.png');
  const url_heart = require('../../assets/images/heartbeat(2).png');
  const url_temp = require('../../assets/images/temp.png');
  const url_his = require('../../assets/images/ic_home_treatment_course.png');
  return (
    <ScrollView horizontal={false}>
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Nguyễn Văn Anh</Text>
        <Text style={styles.txt}>38 tuổi</Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('chartHeart')}>
            <InfoPatient
            url={url_heart}
            _value={'69%'}
            _name={'SPO2'}
            _time={'Đo lúc'}
            _date={'21:36 - 16/09/2021'}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('chartSpo2')}>
          <InfoPatient
            url={url_spo2}
            _value={'88 nhịp/ phút'}
            _name={'Nhịp tim'}
            _time={'Đo lúc'}
            _date={'21:36 - 16/09/2021'}
          />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('chartTemp')}>
        <Temp
          url={url_temp}
          _value={'35*C'}
          _name={'Nhiệt độ cơ thể'}
          _time={'Đo lúc'}
          _date={'21:36 - 16/09/2021'}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('history')}>
          <History url={url_his} _name={'Lịch sử điều trị'} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
