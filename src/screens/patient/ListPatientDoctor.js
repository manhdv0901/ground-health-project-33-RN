import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/core';
import {colors} from '../../theme/color';
import { patientStyles as styles } from '../../theme/patient.style';

export default function ListPatientDoctor() {
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text>hãy nói gì đu</Text> */}
      {/* <ItemPatients
        data={patients}
        renderItem={renderItemList}
        keyExtractor={({item, index}) => index}
      /> */}
      <TouchableOpacity onPress={() => navigation.navigate('detailPatientDoctor')}>
      <View style={styles.item}>
        <Icon
          style={styles.icon}
          name="user-alt"
          size={50}
          color={colors.BLACK}
        />
        <View style={styles.info}>
          <Text style={styles.txtName}>Nguyễn Văn Anh</Text>
          <Text style={styles.txtRoom}>Phòng 01</Text>
          <Text style={styles.txtAge}>Tuổi: 39 </Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}

