import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './src/screens/splash/Splash';
import Login from './src/screens/login/Login';
import NavigationDrawer from './src/navigation/NavigationDrawer';
import NavigationDrawerPatient from './src/navigation/NavigationDrawerPatient';
import DetailPatient from './src/screens/patient/DetailPatient';
import ChartHeart from './src/screens/charts/ChartHeart';
import ChartSpo2 from './src/screens/charts/ChartSpo2';
import ChartTemp from './src/screens/charts/ChartTemp';
import DetailPatientDoctor from './src/screens/patient/DetailPatientDoctor';
import {History} from './src/components/infodevice/InfoDevice';
import DetailNotifi from './src/screens/notification/DetailNotifi';
import Logout from './src/screens/logout/Logout';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="doctor" component={NavigationDrawer} />
        <Stack.Screen name="patient" component={NavigationDrawerPatient} />
        <Stack.Screen name="detailPatient" component={DetailPatient} />
        <Stack.Screen
          name="detailPatientDoctor"
          component={DetailPatientDoctor}
        />
        <Stack.Screen name="chartHeart" component={ChartHeart} />
        <Stack.Screen name="chartSpo2" component={ChartSpo2} />
        <Stack.Screen name="chartTemp" component={ChartTemp} />
        <Stack.Screen name="history" component={History} />
        <Stack.Screen name="detailNoti" component={DetailNotifi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
