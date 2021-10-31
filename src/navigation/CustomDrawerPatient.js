import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {colors} from '../theme/color';
import normalize from 'react-native-normalize';


export default function CustomDrawerPatient({...props}) {
  const url= require('../assets/images/profile_patient.png');
    return (    
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image source={url} style={styles.img}/>
        <Text style={styles.txt}> BN Nguyễn Văn Anh</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    // flex:1,
    backgroundColor: colors.WHITE_DOWN,
  },
  img: {
    marginTop: normalize(20),
    width: normalize(100),
    height: normalize(100),
    marginLeft: normalize(50),
  },
  txt: {
    padding: normalize(20),
    fontSize: normalize(20),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

