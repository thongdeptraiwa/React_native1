import { BackHandler, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Chi_tiet_sp from './Chi_tiet_sp';
import Setting from './Setting';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Stack_home = () => {
    return(
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Chi_tiet_sp" component={Chi_tiet_sp} /> */}
    </Stack.Navigator>
    )
}
const Bottom_home = () => {
  return (
    <Tab.Navigator 
      initialRouteName='Stack_home' 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let src;

          if (route.name === 'Stack_home') {
            src = focused
              ? require('../img/icon_bottom_home_orange.png')
              : require('../img/icon_bottom_home_grey.png');
          } else if (route.name === 'list') {
            src = focused 
            ? require('../img/icon_bottom_list_orange.png')
            : require('../img/icon_bottom_list_grey.png');
          }else if (route.name === 'like') {
            src = focused 
            ? require('../img/icon_bottom_like_orange.png')
            : require('../img/icon_bottom_like_grey.png');
          }else if (route.name === 'notifi') {
            src = focused 
            ? require('../img/icon_bottom_notifi_orange.png')
            : require('../img/icon_bottom_notifi_grey.png');
          }
          
          return <Image source={src}/>;
        },
        headerShown: false, 
        tabBarActiveTintColor: '#D17842', 
        tabBarActiveBackgroundColor: "black", 
        tabBarInactiveBackgroundColor: "black"
      })}
      >
        <Tab.Screen name="Stack_home" component={Stack_home} options={{title: ''}} />
        <Tab.Screen name="list" component={Login} options={{title: ''}}/>
        <Tab.Screen name="like" component={Register} options={{title: ''}}/>
        <Tab.Screen name="notifi" component={Setting} options={{title: ''}}/>
    </Tab.Navigator>
  )
}

export default Bottom_home

const styles = StyleSheet.create({})