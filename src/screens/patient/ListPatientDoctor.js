import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, BackHandler} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, useFocusEffect} from '@react-navigation/core';
import Toast from 'react-native-simple-toast';

import {findAllPatient} from '../axios/findPatient';
import {colors} from '../../theme/color';
import {patientStyles as styles} from '../../theme/patient.style';
import PlaceholderEmpty from '../../components/icons/emptyFlatlist/PlaceHolderEmpty';
import {findDevice} from '../axios/findDevice';

export default function ListPatientDoctor() {
  const [dataPatient, setDataPatient] = useState([]);
  const [dataDevice, setDataDevice] = useState([]);
  const navigation = useNavigation();
  let backAction = null;
  useEffect(() => {
    findAllPatient()
      .then(res => {
        setDataPatient(res);
        // console.log(res);
      })
      .catch(err => {
        console.log('err find all data patient: ', err);
      });
  }, []);
  useFocusEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackHandle);
    return async () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackHandle);
    };
  });

  const onBackHandle = () => {
    if (backAction + 2000 > new Date().getTime()) {
      // let a = 0;
      BackHandler.exitApp();
      //   console.log('a', a);
    }
    backAction = new Date().getTime();
    Toast.show('Bấm thêm lần nữa để thoát !', Toast.SHORT);

    return true;
  };
  const naviDetailPatientDoctor = () => {
    navigation.navigate('DetailPatientDoctor', {
      key_device: dataPatient.key_device,
    });
  };

  const RenderItem = ({item, index}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailPatientDoctor', {
              key_device: item.key_device,
            });
          }}>
          <View style={styles.item}>
            <Icon
              style={styles.icon}
              name="user-alt"
              size={30}
              color={colors.BLACK}
            />
            <View style={styles.info}>
              <Text style={styles.txtName}>Họ tên: {item.name}</Text>
              <Text style={styles.txtRoom}>Số phòng: {item.number_room}</Text>
              <Text style={styles.txtAge}>Tuổi: {item.age} </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const EmptyList = () => {
    return <PlaceholderEmpty />;
  };

  return (
    <View>
      <FlatList
        data={dataPatient}
        renderItem={RenderItem}
        keyExtractor={(item, index) => item.id}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
}
