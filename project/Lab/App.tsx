import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  DeviceEventEmitter,
} from 'react-native';
import Game_phep_tinh from './screen/Game_phep_tinh';
import May_tinh from './screen/May_tinh';
import ViewTop from './screen/ViewTop';
import Lab3 from './screen/Lab3';
import Lab4 from './screen/Lab4_b1';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stack_menu from './screen/Stack_menu';
import Lab4_b1 from './screen/Lab4_b1';
import Bottom_lab4 from './screen/Bottom_lab4';
import Welcome_Screen from './screen/Lab6_7_8/Welcome_Screen';
import Register_Screen from './screen/Lab6_7_8/Register_Screen';
import Login_Screen from './screen/Lab6_7_8/Login_Screen';
import Detail_Screen from './screen/Lab6_7_8/Detail_Screen';
import Reviews_Screen from './screen/Lab6_7_8/Reviews_Screen';
import Login_thi_thu from './screen/Thi_thu/Login_thi_thu';
import Home_thi_thu from './screen/Thi_thu/Home_thi_thu';
import Dang_ki_thi from './screen/Thi/Dang_ki_thi';
import Home_thi from './screen/Thi/Home_thi';
import app from './screen/react2/app';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Stack_menu'  screenOptions={{headerShown: true}}>
        <Stack.Screen name="Stack_menu" component={Stack_menu} options={{ title: 'Menu' }}/>
        <Stack.Screen name="May_tinh" component={May_tinh} />
        <Stack.Screen name="Game_phep_tinh" component={Game_phep_tinh} />
        <Stack.Screen name="Lab3" component={Lab3} />
        <Stack.Screen name="Bottom_lab4" component={Bottom_lab4} options={{ title: 'lab4' }}/>
        <Stack.Screen name="Welcome_Screen" component={Welcome_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register_Screen" component={Register_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login_Screen" component={Login_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail_Screen" component={Detail_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="Reviews_Screen" component={Reviews_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login_thi_thu" component={Login_thi_thu} options={{ headerShown: false }}/>
        <Stack.Screen name="Home_thi_thu" component={Home_thi_thu} options={{ headerShown: false }}/>
        <Stack.Screen name="Dang_ki_thi" component={Dang_ki_thi} options={{ headerShown: false }}/>
        <Stack.Screen name="Home_thi" component={Home_thi} options={{ headerShown: false }}/>
        <Stack.Screen name="app" component={app} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer> 

  );
}

const styles = StyleSheet.create({
  
});

export default App;
