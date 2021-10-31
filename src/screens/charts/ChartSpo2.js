import React from 'react'
import { View, Text } from 'react-native'
import ChartDevices from '../../components/item/ChartDevices';

export default function ChartSpo2() {
    const url = require('../../assets/images/heart.png');
return (
  <ChartDevices
    url_img={url}
    title_time={'SPo2: 94%'}
    time={'21:36 23/10/2021'}
  />
);

}
