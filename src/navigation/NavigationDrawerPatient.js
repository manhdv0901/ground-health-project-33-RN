import React from 'react';
import {
  createDrawerNavigator,
  DrawerHeaderProps,
  DrawerContent,
} from '@react-navigation/drawer';
import ListPatient from '../screens/patient/ListPatient';
import InfoPatient from '../screens/info/InfoPatient';
import Logout from '../screens/logout/Logout';
import IconAntDesign from '../components/icons/IconAntDesign';
import IconFontisto from '../components/icons/IconFontiso';
import IconFoundation from '../components/icons/IconFoundation';
import CustomDrawerPatient from './CustomDrawerPatient';
import {colors} from '../theme/color';
import normalize from 'react-native-normalize';
const Drawer = createDrawerNavigator();
export default function NavigationDrawerPatient() {
  return (
    <Drawer.Navigator
      screenOptions={{drawerItemStyle: {marginTop: normalize(15)}}}
      drawerContent={props => <CustomDrawerPatient {...props} />}
      initialRouteName="listPatient">
      <Drawer.Screen
        name="listPatient"
        component={ListPatient}
        options={{
          title: 'Nhóm bệnh nhân',
          drawerIcon: () => <IconFoundation name="blind" size={42} />,
        }}
      />
      <Drawer.Screen
        name="profile"
        component={InfoPatient}
        options={{
          title: 'Thông tin bệnh nhân',
          drawerIcon: () => <IconFontisto name="person" size={32} />,
        }}
      />
      <Drawer.Screen
        name="logout"
        component={Logout}
        options={{
          title: 'Đăng xuất',
          drawerIcon: () => <IconAntDesign name="logout" size={30} />,
        }}
      />
    </Drawer.Navigator>
  );
}
