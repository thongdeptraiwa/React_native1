import { Image, 
        StyleSheet, 
        Text, 
        TextInput, 
        View,
        KeyboardAvoidingView,
        SafeAreaView,
        Pressable,
        StatusBar,
     } from 'react-native'
import React,{useState} from 'react'
import axios from 'axios';


const Register = (props) => {

const {navigation} = props;


const [Email, setEmail] = useState();
const [Name, setName] = useState();
const [Pass, setPass] = useState();
const [Pass2, setPass2] = useState();


const dangki = () => {
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
    if(Pass2 == "" || Pass2 == null){
        alert("Chưa nhập Re-type password");
        return;
    }

    if(Pass == Pass2){
        axios.post(`https://cro101-b166e76cc76a.herokuapp.com/users/register`,{email: Email, password: Pass, name: Name})
        .then(function (response) {
            if(response.data.status == true){
                //console.log(response.data.status);
                alert("Đăng kí thành công");
                navigation.navigate('Login');
            }    
        })
        .catch(function (error) {
            console.log(error);
            alert("Email đã tồn tại");
        });
    }else{
        setPass2("");
        alert("Mật khẩu xác nhận không giống nhau");
    }
}

  return (

    <View style={{ width: '100%', height: '100%', backgroundColor: '#0C0F14', alignItems: 'center'}}>
        <StatusBar barStyle='light-content'/>

        <Image
            style={{width: 142, height: 142, marginTop: 50, marginLeft: 140, marginRight: 150}}
            source={require('../img/icon.png')}
        />
        <Text style={{textAlign: 'center', fontSize: 16, color: 'white',fontWeight: 'bold', margin: 20}}>
            Welcome to Lungo !!
        </Text>
        <Text style={{textAlign: 'center', fontSize: 12, color: 'grey', marginBottom: 50}}>
            Register to Continue
        </Text>
        

        <TextInput 
            placeholder='Name'
            placeholderTextColor='grey'
            style={{ margin: 10, width: 348,height: 48,fontSize: 14, borderWidth: 2, borderRadius: 8, borderColor: 'grey', color: 'white', padding: 10}}
            keyboardType='text'
            onChangeText={(text) => setName(text)}
        ></TextInput>    
        <TextInput 
            placeholder='Emall'
            placeholderTextColor='grey'
            style={{ margin: 10, width: 348,height: 48,fontSize: 14, borderWidth: 2, borderRadius: 8, borderColor: 'grey', color: 'white', padding: 10}}
            keyboardType='text'
            onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput 
            placeholder='Password'
            placeholderTextColor='grey'
            style={{ margin: 10, width: 348,height: 48,fontSize: 14, borderWidth: 2, borderRadius: 8, borderColor: 'grey', color: 'white', padding: 10}}
            secureTextEntry={true}
            onChangeText={(text) => setPass(text)}
        ></TextInput>  
        <TextInput 
            placeholder='Re-type password'
            placeholderTextColor='grey'
            style={{ margin: 10, width: 348,height: 48,fontSize: 14, borderWidth: 2, borderRadius: 8, borderColor: 'grey', color: 'white', padding: 10}}
            secureTextEntry={true}
            onChangeText={(text) => setPass2(text)}
        ></TextInput>  

        <Pressable
            style={{backgroundColor: '#D17842', width: 348, height: 57, justifyContent: 'center', marginTop: 20, borderRadius: 20}}
            onPress={() => {
                dangki()
            }}
            >
            <Text
                style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 14}}>
                Register
            </Text>
        </Pressable>
        

        <Text
            style={{color: 'grey', fontSize: 12, margin: 30}}>    
            You have an account? Click <Text style={{color: '#D17842'}}>Sign in</Text>
        </Text>
        
        
    </View>
    
  )
}

export default Register

const styles = StyleSheet.create({})