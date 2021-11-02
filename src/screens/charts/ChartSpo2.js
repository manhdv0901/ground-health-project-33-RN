import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {findDevice} from '../axios/findDevice';
import {chartStyle as styles} from '../../theme/chart.style';
import {ScrollView} from 'react-native-gesture-handler';

export default function ChartSpo2({route}) {
  const url = require('../../assets/images/heartbeat(2).png');
  const url_listEmpty = require('../../assets/images/listEmpty.png');

  const [dataHeart, setDataHeart] = useState([]);
  const {device} = route.params;
  // console.log(device);
  useEffect(() => {
    findDevice({key_device: device})
      .then(res => {
        setDataHeart(res.spO2);
        // console.log('data device: ', res.spO2);
      })
      .catch(err => {
        console('err find device: ', err);
      });
  }, []);
  const renderItem = ({item, index}) => {
    return (
      //   <View style={styles.container}>
      <ScrollView>
        <View style={styles.item}>
          <Image style={styles.imgChart} source={url} />
          <Text style={styles.txtChart}>{item.value} %</Text>
          <Text style={styles.txtChart}>Thời gian: {item.real_time}</Text>
        </View>
      </ScrollView>
      //   </View>
    );
  };

  const listEmpty = () => {
    return (
      <View style={styles.container}>
        <Image style={styles.imgListEmpty} source={url_listEmpty} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txtTile}>Lịch sử đo gần nhất</Text>

      <FlatList
        data={dataHeart}
        renderItem={renderItem}
        ListEmptyComponent={listEmpty}
      />
    </View>
  );
}
