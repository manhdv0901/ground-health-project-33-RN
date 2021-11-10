import React, {useRef, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {ScrollView, TextInput, View, Text} from 'react-native';
import {inputLoginStyle as styles} from '../theme/inputLogin.style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../theme/color';
import normalize from 'react-native-normalize';

export default function InputLogin({
  title,
  value,
  onChange,
  placeholder,
  secureTextEntry,
  nameIcon,
  editable,
}) {
  const img_user = '../assets/images/user.png';
  return (
    <View>
      {/* {value ? null : (
        <Animatable.View
          animation="zoomIn"
          duration={500}
          // iterationCount = 'infinite'
          // direction="alternate"
          // useNativeDriver={true}
        >
          <Text style={styles.txtEror}>Don't empty info</Text>
        </Animatable.View>
      )} */}
      <Text style={styles.txtAbove}>{title}</Text>
      <View style={styles.container}>
        <TextInput
          editable={editable}
          style={styles.txtInput}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          inlineImageLeft={img_user}
        />
        <Icon
          style={styles.icon}
          name={nameIcon}
          size={normalize(25)}
          color={colors.BLACK}
        />
      </View>
    </View>
  );
}
