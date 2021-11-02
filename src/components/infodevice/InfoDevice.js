import { placeholder } from '@babel/types';
import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {detailPatientStyle as styles} from '../../theme/detailPatient.style';

export function InfoPatient({navigaiton, url, _value, _name, _time, _date}) {
  return (
    <View style={styles.container}>
      <View style={styles.viewCom}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.img} source={url} />
          <Text style={styles.txtValue}>{_value}</Text>
        </View>
        <Text style={styles.txtName}>{_name}</Text>
        <Text style={styles.txt}>{_time}</Text>
        <Text style={styles.txt}>{_date}</Text>
      </View>
    </View>
  );
}

export function Temp({url, _value, _time, _name, _date}) {
  return (
    <View style={styles.container}>
      <View style={styles.view2}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image style={styles.img2} source={url} />
            <Text style={styles.txtName}>{_name}</Text>
          </View>
          <View>
            <Text style={styles.txtValue}>{_value}</Text>
            <Text style={styles.txt}>{_time}</Text>
            <Text style={styles.txt}>{_date}</Text>
          </View>
        </View>
        {/* <View style={{flexDirection: 'row'}} /> */}
      </View>
    </View>
  );
}
export function History({url, _name}) {
  return (
       <View style={styles.container}>
      <View style={styles.viewHis}>
        <Image style={styles.imgHis} source={url} />
        <Text style={styles.txtName}>{_name}</Text>
      </View>
      </View>
  );
}

export function Content({value, placeholder,onChangeText}) {
  return (
        <View style={styles.container}>
      <View style={styles.viewIn}>
        <TextInput value={value} placeholder={placeholder} onChangeText={onChangeText}/>
      </View>
      </View>
  );
}
