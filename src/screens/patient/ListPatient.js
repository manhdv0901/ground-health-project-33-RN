import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/core';
import {colors} from '../../theme/color';
import {patientStyles as styles} from '../../theme/patient.style';
import AddPatient from '../../components/modal/AddPatient';
import {findPatient} from '../axios/findPatient';
import normalize from 'react-native-normalize';
import {login} from '../redux/reducers/index';
import { useSelector } from 'react-redux';

export default function ListPatient() {
  const [isOpen, setIsOpen] = useState(false);
  const [txt, setTxt] = useState([]);
  const navigation = useNavigation();
  const url_img = require('../../assets/images/add.png');
  const [dataPatient, setDataPatient] = useState([]);
  const [dataDevice, setDataDevice] = useState([]);
  const url_listEmpty = require('../../assets/images/listEmpty.png');
  console.log('id', txt );
  const handleFind = () => {
    findPatient({id: txt})
      .then(res => {
        // const conArray = Object.values(res.patient);
        // const arrayPatient = array.push(res.patient);
        // console.log('New array: ', arrayPatient);
        // setListFindPatient(array);
         console.log('Data patient: ', res);
        const array = [...dataPatient, res.patient];
        setDataPatient(array);
        console.log('Data patient array: ', array);

        setDataDevice(res.device);
        // console.log('key device: ', res.device);
      })
      .catch(err => {
        console.log('err find patient: ', err);
      });
  };
  const emptyPatient = () => {
    return (
      <View style={styles.info}>
        <Image style={styles.imgListEmpty} source={url_listEmpty} />
      </View>
    );
  };
  const naviDetailPatient = ({item}) => {
    navigation.navigate('detailPatient', {
      data_heart: dataDevice.heart[0].value,
      heart_time: dataDevice.heart[0].real_time,
      data_spO2: dataDevice.spO2[0].value,
      spO2_time: dataDevice.spO2[0].real_time,
      data_temp: dataDevice.temp[0].value,
      temp_time: dataDevice.temp[0].real_time,
      key_device: dataDevice.key_device,
    });
  };
  const renderItemPatient = ({item}) => {
    return (
      <TouchableOpacity onPress={() => naviDetailPatient({item})}>
        <View style={styles.item}>
          <Icon
            style={styles.icon}
            name="user-alt"
            size={normalize(40)}
            color={colors.BLACK}
          />
          <View style={styles.info}>
            <Text style={styles.txtName}>Họ và tên: {item.name}</Text>
            <Text style={styles.txtRoom}>Số phòng: {item.number_room}</Text>
            <View style={styles.viewDel}>
              <Text style={styles.txtAge}>Tuổi: {item.age}</Text>
              <TouchableOpacity
                style={styles.touchDel}
                onPress={() => alert('are you sure ?')}>
                <Text style={styles.txtDel}>Xóa bệnh nhân </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const keyExtractor2 = (item, index) => item.id;

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={dataPatient}
        // keyExtractor={keyExtractor2}
        renderItem={renderItemPatient}
        ListEmptyComponent={emptyPatient}
      />
      <TouchableOpacity style={styles.viewImg} onPress={openModal}>
        <Image style={styles.imaAdd} source={url_img} />
      </TouchableOpacity>

      <AddPatient
        isOpen={isOpen}
        closed={() => setIsOpen(false)}
        onClosed={closeModal} 
        title={'Thêm bệnh nhân'}
        value={txt}
        onChangeText={t => setTxt(t)}
        placeholder={'Tìm kiếm bệnh nhân'}
        placeholderTextColor={colors.GRAY}
        onPressFind={handleFind}
        btnApply={'Thêm'}
        btnCancel={'Hủy bỏ'}
        url_img={url_img}
        onRequestClose={closeModal}
      />
    </View>
  );
}
