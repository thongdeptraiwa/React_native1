import { Image, 
        StyleSheet, 
        Text, 
        TextInput, 
        View,
        Pressable,
        StatusBar,
     } from 'react-native';
import React,{useContext, useState} from 'react';
import axios from 'axios';
import { AppContext } from '../../ultil/AppContext';

const Login = (props) => {

    const {navigation} = props;

    const [Username, setUsername] = useState();
    const [Pass, setPass] = useState();
    const {setEmail} = useContext(AppContext);
    const {setName} = useContext(AppContext);

    const dangnhap = () => {
        //check null
        if(Username == "" || Username == null){
            alert("Chưa nhập Username");
            return;
        }
        if(Pass == "" || Pass == null){
            alert("Chưa nhập Pass");
            return;
        }
        
        axios.post(`https://cro101-b166e76cc76a.herokuapp.com/users/login`,{email: Username, password: Pass})
        .then(function (response) {
            if(response.data.status == true) {
                console.log(response.data.status);
                navigation.navigate('Bottom_home');
                setEmail(Username);
                setName(response.data.user.name);
                setPass("");
            }
          })
          .catch(function (error) {
            console.log(error);
            alert("Đăng nhập không thành công");
            setPass("");
          });
    
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
            Login to Continue
        </Text>
        
            
        <TextInput 
            placeholder='Emall Address'
            placeholderTextColor='grey'
            style={{ margin: 10, width: 348,height: 48,fontSize: 14, borderWidth: 2, borderRadius: 8, borderColor: 'grey', color: 'white', padding: 10}}
            keyboardType='text'
            onChangeText={(text) => setUsername(text)}
        >{Username}</TextInput>
        <TextInput 
            placeholder='Password'
            placeholderTextColor='grey'
            style={{ margin: 10, width: 348,height: 48,fontSize: 14, borderWidth: 2, borderRadius: 8, borderColor: 'grey', color: 'white', padding: 10}}
            secureTextEntry={true}
            onChangeText={(text) => setPass(text)}
        >{Pass}</TextInput>  

        <Pressable
            style={{backgroundColor: '#D17842', width: 348, height: 57, justifyContent: 'center', marginTop: 20, borderRadius: 20}}
            onPress={() => {
               dangnhap();
            }}
            >
            <Text
                style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 14}}>
                Sign In
            </Text>
        </Pressable>
        
        <Pressable
            style={{backgroundColor: 'white', width: 348, height: 57, justifyContent: 'center', alignItems: 'center', marginTop: 10, borderRadius: 20, flexDirection: 'row'}}>
            
            <Image
                style={{width: 15, height: 15}}
                source={require('../img/icon_gg.png')}
            />
            <Text
                style={{marginLeft: 70, marginRight: 70,color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 14}}>
                Sign in with Google
            </Text>
        </Pressable>

        <Text
            style={{color: 'grey', fontSize: 12, margin: 30}}>
            Don’t have account? Click <Text style={{color: '#D17842'}} onPress={() => {navigation.navigate('Register');}}>Register</Text>
        </Text>
        <Text
            style={{color: 'grey', fontSize: 12}}>
            Forget Password? Click <Text style={{color: '#D17842'}}>Reset</Text>
        </Text>
        
    </View>
    
  )
}

export default Login

const styles = StyleSheet.create({})