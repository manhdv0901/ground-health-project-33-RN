import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {notifiStyle as styles} from '../../theme/notifi.style';

export default function Notification() {
  const navigation = useNavigation();
  const url_img = require('../../assets/images/noti.png');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('detailNoti')}>
        <View style={styles.item}>
          <View>
            <Text style={styles.txtNoti}>Nhiệt độ cơ thể tăng cao</Text>
            <Text style={styles.txtName}>Nguyễn Văn Anh</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.txt}>Phòng 01 </Text>
              <Text style={styles.txt}>Tuổi: 39 </Text>
              <Text style={styles.txt}>Sốt rét </Text>
            </View>
          </View>
          <Image style={styles.imgNoti} source={url_img} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
