import {  Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const Dang_ki_thi = (props) => {

  const {navigation} = props;
  const [First_name, setFirst_name] = useState('')
  const [Last_name, setLast_name] = useState('')
  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')
  const [RePass, setRePass] = useState('')

  const Dang_ki = () => {
    //check null
    if(First_name == "" || First_name == null){
      alert("Chưa nhập First name");
      return;
    }
    if(Last_name == "" || Last_name == null){
      alert("Chưa nhập Last name");
      return;
    }
    if(Email == "" || Email == null){
      alert("Chưa nhập Email");
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
    if(Pass == RePass ){

      if(Pass.length >8 ){
       
        //thanh cong
        alert("Đăng kí thành công");
        navigation.navigate('Home_thi');

      }else{
        alert("Password phải hơn 8 kí tự");
      }
      
    }else{
      
      alert("Mật khẩu xác nhận không giống nhau");
    }
}
  return (
    <View style={{backgroundColor: 'white', flex: 1, justifyContent: "center", padding: 10, backgroundColor: '#33907C'}}>
      <SafeAreaView>
        

        <Text style={[styles.title_1]}>Welcome to tradly</Text>
        <Text style={[styles.title_2]}>Signup to your account</Text>

        <View>

            <TextInput style={styles.text_input}
             placeholder='First Name'
             placeholderTextColor='white'
             onChangeText={(text)=> setFirst_name(text)}>
            </TextInput>

            <TextInput style={styles.text_input}
             placeholder='Last Name'
             placeholderTextColor='white'
             onChangeText={(text)=> setLast_name(text)}>
            </TextInput>

            <TextInput style={styles.text_input}
             placeholder='Email ID/Phone Number'
             placeholderTextColor='white'
             onChangeText={(text)=> setEmail(text)}>
            </TextInput>

            <TextInput style={styles.text_input}
             placeholder='Password'
             placeholderTextColor='white'
             onChangeText={(text)=> setPass(text)}>
            </TextInput>

            <TextInput style={styles.text_input}
             placeholder='Re-enter Password'
             placeholderTextColor='white'
             onChangeText={(text)=> setRePass(text)}>
            </TextInput>
            
         
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        
            <TouchableOpacity style={styles.button} onPress={()=> Dang_ki()}>
                <Text style={styles.buttonText}>Create</Text>
           </TouchableOpacity>

           <View style={{marginTop: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: 'white'}}>Have an account ? 
                        </Text>
                        <Pressable onPress={()=>navigation.navigate('Login_Screen')}>
                        <Text style={{color: 'white', fontWeight: 'bold',}}> Sign in</Text>
                        </Pressable>
                    </View>
                   </View>
          </View>
        </SafeAreaView>
    </View>
  )
}

export default Dang_ki_thi


const styles = StyleSheet.create({
  
  title_1:{
    textAlign: "center",
    color: 'black', 
    fontSize: 35,
    fontWeight: '400',
    margin: 50,
    marginTop: -50,
    color: 'white',
  },
  title_2: {
    textAlign: "center",
    color: 'black', 
    fontSize: 20, 
    color: 'white',
    marginBottom: 20
  },
  
  text_input:{
    width: '85%',
    margin: 10,
    borderColor: "white",
    borderWidth: 1,
    fontSize: 20,
    height: 50,
    borderRadius: 20,
    padding: 15,
    color: 'white',
    alignSelf: "center",
  },
  passwordContainer:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  
   button: {
    width: '70%',
    alignItems: 'center',
    backgroundColor: '#ffff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 20
  },
  buttonText: {
    fontFamily: 'serif',
    color: '#33907C',
    fontSize: 16,
  
  },


})