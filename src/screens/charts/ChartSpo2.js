import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import moment from 'moment';
import {findDevice} from '../axios/findDevice';
import {chartStyle as styles} from '../../theme/chart.style';
import {ScrollView} from 'react-native-gesture-handler';
import EmptyFlatlist from '../../components/icons/emptyFlatlist/EmptyFlatlist';
import ChartDevices from '../../components/item/ChartDevices';

export default function ChartSpo2({route}) {
  const url = require('../../assets/images/heartbeat(2).png');

  const [dataHeart, setDataHeart] = useState([]);
  const {device} = route.params;
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
    const time = item.real_time;
    const formatTime = moment(time).utc().format('DD/MM/YYYY');
    return (
      <ScrollView>
        <ChartDevices
          url_img={url}
          title_time={item.value}
          txt_time={'Thời gian: '}
          txt_time={'Thời gian: '}
          time={formatTime}
          content={'%'}
        />
      </ScrollView>
    );
  };

  const listEmpty = () => {
    return <EmptyFlatlist />;
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
