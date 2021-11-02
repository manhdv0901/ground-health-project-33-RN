import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from '../../theme/color';
import {max_width} from '../../theme/headerLogin.style';

export default function AddPatient({
  visible,
  isOpen,
  closed,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  url_img,
  title,
  btnApply,
  btnCancel,
  onPressFind,
}) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        isOpen={isOpen}
        onClosed={closed}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.txtHeader}>{title}</Text>
          </View>
          <View style={styles.view2}>
            <View style={styles.viewInput}>
              <TextInput
                style={styles.txtIn}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
              />
            </View>
            <View style={styles.viewTouch}>
              <TouchableOpacity style={styles.touch1} onPress={closed}>
                <Text style={styles.txt1}>{btnCancel}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressFind} style={styles.touch2}>
                <Text style={styles.txt2}>{btnApply}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.viewImg} onPress={isOpen}>
        <Image style={styles.imaAdd} source={url_img} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.g,
    // bottom:0,
  },
  modalView: {
    backgroundColor: colors.BLUE_LIGHT,
    width: max_width * 0.9,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: normalize(15),
    // alignItems: 'center',
    shadowColor: colors.BLUE_LIGHT,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  viewInput: {
    alignSelf: 'center',
    marginTop: normalize(20),
  },
  txtHeader: {
    fontSize: normalize(16),
    color: colors.WHITE,
  },
  txtIn: {
    marginTop: normalize(16),
    width: max_width * 0.8,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: normalize(30),
  },
  view2: {
    backgroundColor: colors.WHITE,
    width: max_width * 0.9,
    // alignItems:'center',
    marginBottom: normalize(20),
    borderBottomLeftRadius: normalize(15),
    borderBottomRightRadius: normalize(15),
  },
  viewTouch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalize(10),
    marginBottom: normalize(25),
    // alignSelf:'center'
  },
  txt1: {
    fontSize: normalize(16),
    //   fontWeight:'bold',
    color: colors.BLUE,
    textAlign: 'center',
    padding: 5,
  },
  txt2: {
    fontSize: normalize(16),
    // fontWeight:'bold',
    color: colors.WHITE,
    textAlign: 'center',
    padding: 5,
  },
  touch1: {
    borderWidth: 1,
    borderRadius: 5,
    width: max_width * 0.3,
    marginLeft: normalize(30),
  },
  touch2: {
    borderWidth: 1,
    borderRadius: 5,
    width: max_width * 0.3,
    backgroundColor: colors.BLUE,
    marginRight: normalize(30),
  },
  imaAdd: {
    width: normalize(60),
    height: normalize(60),
  },
  viewImg: {
    top: '30%',
    left: '35%',
    bottom: 0,
  },
});
