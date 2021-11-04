import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, ScrollView} from 'react-native';
import {findDevice} from '../axios/findDevice';
import {chartStyle as styles} from '../../theme/chart.style';
import EmptyFlatlist from '../../components/icons/emptyFlatlist/EmptyFlatlist';
import ChartDevices from '../../components/item/ChartDevices';

export default function ChartTemp({route}) {
  const url = require('../../assets/images/temp.png');

  const [dataHeart, setDataHeart] = useState([]);
  const {device} = route.params;
  // console.log(device);
  useEffect(() => {
    findDevice({key_device: device})
      .then(res => {
        setDataHeart(res.temp);
        // console.log('data device: ', res.heart);
      })
      .catch(err => {
        console('err find device: ', err);
      });
  }, []);
  const renderItem = ({item, index}) => {
    return (
      <ScrollView>
        <ChartDevices url_img={url} title_time={item.value} content={' *C'} txt_time={'Thời gian: '} time={item.real_time}/>
      </ScrollView>
    );
  };
  const listEmpty = () => {
    return (
     <EmptyFlatlist/>
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
