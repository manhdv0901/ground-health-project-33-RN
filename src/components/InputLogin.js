import React, {useRef, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {ScrollView, TextInput, View, Text} from 'react-native';
import {inputLoginStyle as styles} from '../theme/inputLogin.style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../theme/color';

export default function InputLogin({
  value,
  onChange,
  placeholder,
  secureTextEntry,
  nameIcon,
}) {
  const img_user = '../assets/images/user.png';
  return (
    <View >
      {value ? null : (
        <Animatable.View
          animation="zoomIn"
          duration={500}
          // iterationCount = 'infinite'
          // direction="alternate"
          // useNativeDriver={true}
        >
          <Text style={styles.txtEror}>Don't empty info</Text>
        </Animatable.View>
      )}

      <View style={styles.container}>
        <TextInput
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
          size={30}
          color={colors.BLACK}
        />
      </View>
    </View>
  );
}
