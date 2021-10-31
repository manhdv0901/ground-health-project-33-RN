import React from 'react'
import { View, Text } from 'react-native'
import ChartDevices from '../../components/item/ChartDevices'

export default function ChartHeart() {
    const url =require('../../assets/images/heartbeat(2).png');
    return (
        <ChartDevices url_img={url} title_time={'120 nhịp/phút'} time={'21:36 23/10/2021'}/>
    )
}
