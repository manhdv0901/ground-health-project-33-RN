import React, {createRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/core';
import {colors} from '../../theme/color';
import {patientStyles as styles} from '../../theme/patient.style';
import AddPatient from '../../components/modal/AddPatient';
import {findPatient} from '../axios/findPatient';

export default function ListPatient() {
  const [isOpen, setIsOpen] = useState(false);
  const [delModal, setDelModal] = useState(false);
  const [txt, setTxt] = useState();
  const navigation = useNavigation();
  const url_img = require('../../assets/images/add.png');
  const [Apatient, setAPatient] = useState([]);

  const handleFind = () => {
    findPatient({id: txt})
      .then(res => {
        console.log('res: ', res);
        setAPatient(res);
        // patient(res);
        console.log('res patient: ', setAPatient(res));
      })
      .catch(err => {
        console.log('err: ', err);
      });
  };
  const emptyPatient =()=>{
    return(
       <View style={styles.info}>
        <Text style={styles.txtName}>Nguyễn Văn Anh</Text>
        <Text style={styles.txtRoom}>Phòng 01</Text>
        <Text style={styles.txtAge}>Tuổi: 39 </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={AddPatient}
        ListEmptyComponent={emptyPatient}
        renderItem={({item}) => {
          <TouchableOpacity
            onPress={() => navigation.navigate('detailPatient')}>
            <View style={styles.item}>
              <Icon
                style={styles.icon}
                name="user-alt"
                size={50}
                color={colors.BLACK}
              />
              <View style={styles.info}>
                <Text style={styles.txtName}>aa</Text>
                <Text style={styles.txtRoom}>bbb</Text>
                <View style={styles.viewDel}>
                  <Text style={styles.txtAge}>ccc</Text>
                  <TouchableOpacity
                    style={styles.touchDel}
                    onPress={() => alert('are you sure ?')}>
                    <Text style={styles.txtDel}>Xóa bệnh nhân </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>;
        }}
      />

      <AddPatient
        visible={isOpen}
        isOpen={() => setIsOpen(!isOpen)}
        closed={() => setIsOpen(false)}
        title={'Thêm bệnh nhân'}
        value={txt}
        onChangeText={t => setTxt(t)}
        placeholder={'Nhập vào thông tin trạng thái hiện tại'}
        placeholderTextColor={colors.GRAY}
        onPressFind={handleFind}
        btnApply={'Thêm'}
        btnCancel={'Hủy bỏ'}
        url_img={url_img}
      />
    </View>
  );
}
