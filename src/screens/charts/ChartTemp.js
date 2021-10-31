import React from 'react'
import { View, Text } from 'react-native'
import ChartDevices from '../../components/item/ChartDevices';

export default function ChartTemp() {
  const url = require('../../assets/images/temp.png');
return (
  <ChartDevices
    url_img={url}
    title_time={'Nhiệt độ: 37'}
    time={'21:36 23/10/2021'}
  />
);

}
