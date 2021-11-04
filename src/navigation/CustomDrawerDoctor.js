import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { colors } from '../theme/color';
import normalize from 'react-native-normalize';
import { useSelector } from 'react-redux';
import {name} from '../screens/redux/reducers/index';

export default function CustomDrawerDoctor({...props}) {
  const nameDoctor = useSelector(state => state.name);
  useEffect(() => {
   return nameDoctor;
  }, []);
  // console.log('doctor name: ', nameDoctor.name);
  const url= require('../assets/images/profile_doctor.png');
    return (    
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image source={url} style={styles.img}/>
        <Text style={styles.txt}> BS: {nameDoctor.name}</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
    header:{
        // flex:1,
        backgroundColor: colors.WHITE_DOWN
    },
    img:{
        marginTop:normalize(20),
        width:normalize(100),
        height:normalize(100),
        marginLeft:normalize(50)
    },
    txt:{
        padding:normalize(20),
        fontSize:normalize(20),
        fontWeight:'bold',
        textAlign:'center',
    }
});
