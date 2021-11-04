import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import normalize from 'react-native-normalize'

export default function EmptyFlatlist() {
    const url_listEmpty = require('../../../assets/images/listEmpty.png');
    return (
    <View style={styles.info}>
      <Image style={styles.imgListEmpty} source={url_listEmpty} />
    </View>


    )
}
const styles = StyleSheet.create({
    imgListEmpty: {
    width:normalize(220),
    height:normalize(150),
    alignSelf:'center',
    justifyContent:'center',
  },
})
