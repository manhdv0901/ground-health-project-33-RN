import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, ScrollView} from 'react-native';
import moment from 'moment';
import {findDevice} from '../axios/findDevice';
import {chartStyle as styles} from '../../theme/chart.style';
import ChartDevices from '../../components/item/ChartDevices';
import PlaceholderEmpty from '../../components/icons/emptyFlatlist/PlaceHolderEmpty';

export default function ChartHeart({route}) {
  const url = require('../../assets/images/heart.png');
  const [dataHeart, setDataHeart] = useState([]);
  const {device} = route.params;
  // console.log(device);
  useEffect(() => {
    findDevice({key_device: device})
      .then(res => {
        setDataHeart(res.heart);
        // console.log('data device: ', res.heart);
      })
      .catch(err => {
        console('err find device: ', err);
      });
  }, [device]);

  const renderItem = ({item, index}) => {
    const time = item.real_time;
    const formatTime = moment(time).utc().format('DD/MM/YYYY');
    return (
      <ScrollView>
        <ChartDevices
          url_img={url}
          title_time={item.value}
          txt_time={'Thời gian: '}
          time={formatTime}
          content={'Nhịp/phút'}
        />
      </ScrollView>
    );
  };
  const listEmpty = () => {
    return <PlaceholderEmpty />;
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
