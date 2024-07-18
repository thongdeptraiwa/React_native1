import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab4_b1 from './Lab4_b1';
import Lab4_b2 from './Lab4_b2';
import Lab4_b3 from './Lab4_b3';
import Lab4_b4 from './Lab4_b4';

const Tab = createBottomTabNavigator();


const Bottom_lab4 = () => {
  return (
    <Tab.Navigator 
        initialRouteName='b1' 
        screenOptions={{headerShown: false}}>
        <Tab.Screen name="b1" component={Lab4_b1} />
        <Tab.Screen name="b2" component={Lab4_b2} />
        <Tab.Screen name="b3" component={Lab4_b3} />
        <Tab.Screen name="b4" component={Lab4_b4} />
    </Tab.Navigator>
  )
}

export default Bottom_lab4

const styles = StyleSheet.create({})