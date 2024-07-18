import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screen/Login';
import Register from './src/screen/Register';
import Home from './src/screen/Home';
import Bottom_home from './src/screen/Bottom_home';
import Chi_tiet_sp from './src/screen/Chi_tiet_sp';
import { AppContextProvider } from './ultil/AppContext'; 
import Setting from './src/screen/Setting';
import Personal_Details from './src/screen/Personal_Details';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (

    <AppContextProvider>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Bottom_home" component={Bottom_home} />
          <Stack.Screen name="Chi_tiet_sp" component={Chi_tiet_sp} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="Personal_Details" component={Personal_Details} />
        </Stack.Navigator>
      </NavigationContainer> 

    </AppContextProvider>
    
  );
}

const styles = StyleSheet.create({
  
});

export default App;
