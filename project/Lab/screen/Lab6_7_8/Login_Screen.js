import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import line from '../../img/line.png'
import logo from '../../img/logo.png'
import icon_eye from '../../img/icon_eye.png'
import axios from 'react-native-axios'

const Login_Screen = (props) => {

  const {navigation} = props;
  const [showPassword, setShowPassword] = useState(false);
  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')

  const Dang_Nhap = () => {

    //check null
    if(Email == "" || Email == null){
      alert("Chưa nhập Username");
      return;
    }
    if(Pass == "" || Pass == null){
        alert("Chưa nhập Pass");
        return;
    }

    axios.post('https://cro101-b166e76cc76a.herokuapp.com/users/login',{
      email : Email,
      password : Pass
    })
    .then(function (response){
      if(response.data.status == true) {
        console.log(response.data.status);
        navigation.navigate('Detail_Screen');
        setPass("");
      }
    })
    .catch(function (error){
      console.log(error);
      alert("Đăng nhập không thành công");
      setPass("");
    })
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <SafeAreaView>
        <View style={{flexDirection: 'row', marginTop: 35, marginBottom: 30, alignItems: 'center', justifyContent: 'space-evenly'}}>
          <Image source={line}></Image> 
          <Image source={logo}></Image> 
          <Image source={line}></Image> 
        </View>

        <Text style={[styles.title_hello, styles.title]}>Hello !</Text>
        <Text style={[styles.title_welcome, styles.title]}>WELCOME BACK</Text>

        <View style={styles.container}>
            <TextInput style={styles.text_input}
             placeholder='Email'
             placeholderTextColor='grey'
             onChangeText={(text)=> setEmail(text)}>
            </TextInput>
            <View style={styles.passwordContainer}>
                        <TextInput 
                            placeholder='Password'
                            placeholderTextColor='grey'
                            style={[styles.text_input]}
                            secureTextEntry={!showPassword}
                            onChangeText={(text)=> setPass(text)}
                        />
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setShowPassword(!showPassword)}   >
                            <Image source={icon_eye} style={styles.iconImage} />
                        </TouchableOpacity>
                    </View>

         
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
        
            <TouchableOpacity>
               <Text style={{fontFamily: 'serif',}}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=> Dang_Nhap()}>
                <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Register_Screen')}>
               <Text style={{marginTop: 25, fontSize: 20, fontWeight: '400', color: 'black',fontFamily: 'serif',}}>SIGN IN</Text>
           </TouchableOpacity>
          </View>
        </SafeAreaView>
    </View>
  )
}

export default Login_Screen

const styles = StyleSheet.create({
  title_hello:{
    color: 'gray', 
    fontSize: 30,
    fontFamily: 'serif',
    fontWeight: '300'
  },
  title_welcome: {
    color: 'black', 
    fontSize: 35, 
    fontFamily: 'serif',
    fontWeight: '500'
  },
  title: {
    paddingHorizontal: 33,
    fontFamily: 'serif',
  },
  container:{
    top: 30,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  text_input:{
    width: '85%',
    margin: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    fontSize: 20,
  },
  passwordContainer:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    bottom: 28,
    position: 'absolute',
    right: 28,
  },
   button: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 30,
    fontFamily: 'serif',
  },
  buttonText: {
    fontFamily: 'serif',
    color: '#fff',
    fontSize: 16,
  },


})