import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import InputLogin from '../../components/InputLogin';
import InfoUser from '../../components/infoUser/InfoUser';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonLogin from '../../components/ButtonLogin';


export default function InfoPatient({navigation}) {
    const url = require('../../assets/images/man.png');
    return (
         <View style={{flex:1}}>
        <ScrollView>
            <InfoUser url={url} name={"Nguyễn Văn Anh"} mail={'Doanmanh0901@gmail.com'} phone={'0123456789'} address={'Hà Nội'}
                placeholderName={'Họ và tên'} placeholderPass={'Mật khẩu'} placeholderPhone={'Số điện thoại'} placeholderDate={'Ngày sinh'}
                iconName={'user-alt'} iconPass={'lock'} iconPhone={'phone'} iconDate={'ticket-alt'}
            />
           <ButtonLogin title="cập nhật thông tin"/>
           </ScrollView>
        </View>
    )
}
