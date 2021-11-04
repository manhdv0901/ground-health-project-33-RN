import React from 'react';
import {Container, Content} from 'native-base';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ThemeConsumer, ThemeContext} from 'styled-components/native';
import Notification from '../screens/notification/Notification';
import ListPatientDoctor from '../screens/patient/ListPatientDoctor';
import InfoDoctor from '../screens/info/InfoDoctor';
import Logout from '../screens/logout/Logout';
import IconFontisto from '../components/icons/IconFontiso';
import IconFoundation from '../components/icons/IconFoundation';
import Ionicons from '../components/icons/Ionicons';
import IconAntDesign from '../components/icons/IconAntDesign';
import CustomDrawerDoctor from './CustomDrawerDoctor';
import normalize from 'react-native-normalize';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{drawerItemStyle: {marginTop: normalize(15)}}}
      drawerContent={props => <CustomDrawerDoctor {...props} />}>
      <Drawer.Screen
        name="listPatient"
        component={ListPatientDoctor}
        options={{
          title: 'Danh sách bệnh nhân',
          drawerIcon: () => <IconFoundation name="blind" size={42} />,
        }}
      />
      <Drawer.Screen
        name="profile"
        component={InfoDoctor}
        options={{
          title: 'Thông tin cá nhân',
          drawerIcon: () => <IconFontisto name="doctor" size={32} />,
        }}
      />
      <Drawer.Screen
        name="notification"
        component={Notification}
        options={{
          title: 'Thông báo khẩn cấp',
          drawerIcon: () => <Ionicons name="notifications" size={30} />,
        }}
      />
      <Drawer.Screen
        name="logout"
        component={Logout}
        options={{
          title: 'Cài đặt',
          drawerIcon: () => <IconAntDesign name="logout" size={30} />,
        }}
      />
    </Drawer.Navigator>
  );
}
