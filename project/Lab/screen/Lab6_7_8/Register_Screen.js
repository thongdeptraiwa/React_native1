import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import line from '../../img/line.png'
import logo from '../../img/logo.png'
import icon_eye from '../../img/icon_eye.png'
import axios from 'react-native-axios'

const Register_Screen = (props) => {

  const {navigation} = props;
  const [showPassword, setShowPassword] = useState(false);
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')
  const [RePass, setRePass] = useState('')

  const Dang_ki = () => {
    //check null
    if(Email == "" || Email == null){
      alert("Chưa nhập Email");
      return;
    }
    if(Name == "" || Name == null){
        alert("Chưa nhập Name");
        return;
    }
    if(Pass == "" || Pass == null){
        alert("Chưa nhập Password");
        return;
    }
    if(RePass == "" || RePass == null){
        alert("Chưa nhập Confirm Password");
        return;
    }
    if(Pass == RePass){
      axios.post('https://cro101-b166e76cc76a.herokuapp.com/users/register',{
          email : Email,
          password : Pass,
          name : Name
      })
      .then(function (response){
          if(response.data.status == true){
            console.log(response.data.status);
            alert("Đăng kí thành công");
            navigation.navigate('Login_Screen')
          }
      })
      .catch(function (error){
        console.log(error);
        alert("Email đã tồn tại");
      })
    }else{
      setRePass("");
      alert("Mật khẩu xác nhận không giống nhau");
    }
}
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <SafeAreaView>
        <View style={{flexDirection: 'row', marginTop: 35, marginBottom: 30, alignItems: 'center', justifyContent: 'space-evenly'}}>
          <Image source={line}></Image> 
          <Image source={logo}></Image> 
          <Image source={line}></Image> 
        </View>

        <Text style={[styles.title_hello, styles.title, {fontWeight: 'bold'}]}>WELCOME</Text>
        <Text style={[styles.title_welcome, styles.title]}></Text>

        <View style={styles.container}>

            <TextInput style={styles.text_input}
             placeholder='Name'
             placeholderTextColor='grey'
             onChangeText={(text)=> setName(text)}>
            </TextInput>
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
            <View style={styles.passwordContainer}>
                <TextInput 
                    placeholder='Confirm Password'
                    placeholderTextColor='grey'
                    style={[styles.text_input]}
                    secureTextEntry={!showPassword}
                    onChangeText={(text)=> setRePass(text)}
                />
                <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}   >
                    <Image source={icon_eye} style={styles.iconImage} />
                </TouchableOpacity>
            </View>
         
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        
            <TouchableOpacity style={styles.button} onPress={()=> Dang_ki()}>
                <Text style={styles.buttonText}>SIGN UP</Text>
           </TouchableOpacity>

           <View style={{marginTop: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.title_register}>Already have account? 
                        </Text>
                        <Pressable onPress={()=>navigation.navigate('Login_Screen')}>
                        <Text style={{color: 'black', fontWeight: 'bold',fontFamily: 'serif',}}> SIGN IN</Text>
                        </Pressable>
                    </View>
                   </View>
          </View>
        </SafeAreaView>
    </View>
  )
}

export default Register_Screen


const styles = StyleSheet.create({
  title_register: {
    fontFamily: 'serif',
  },
  title_hello:{
    fontFamily: 'serif',
    color: 'black', 
    fontSize: 35,
    fontWeight: '300'
  },
  title_welcome: {
    fontFamily: 'serif',
    color: 'black', 
    fontSize: 35, 
    fontWeight: '500'
  },
  title: {
    fontFamily: 'serif',
    paddingHorizontal: 33
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
    width: '70%',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontFamily: 'serif',
    color: '#fff',
    fontSize: 16,
  },


})