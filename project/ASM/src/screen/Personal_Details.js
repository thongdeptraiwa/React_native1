import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native'
import React,{useContext, useState} from 'react'
import { AppContext } from '../../ultil/AppContext';
import axios from 'axios';

const Personal_Details = (props) => {

    const {navigation} = props;

    const {Email} = useContext(AppContext);
    const {Name} = useContext(AppContext);
    const {setName} = useContext(AppContext);

    const [Name_setting, setName_setting] = useState(Name);
    const [Pass, setPass] = useState();
    const [Pass2, setPass2] = useState();

    const save = () => {
        //check null
        if(Pass == "" || Pass == null){
            alert("Chưa nhập Password");
            return;
        }
        if(Pass2 == "" || Pass2 == null){
            alert("Chưa nhập Re-type password");
            return;
        }
        if(Name_setting == "" || Name_setting == null){
            alert("Chưa nhập Name");
            return;
        }

        if(Pass == Pass2){
            axios.post(`https://cro101-b166e76cc76a.herokuapp.com/users/update-profile`,
                {email: Email, password: Pass, name: Name_setting})
            .then(function (response) {
                if(response.data.status == true){
                    //console.log(response.data.status);
                    alert("Cập nhập thành công");
                    setName(Name_setting);
                    navigation.navigate("Login");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }else{
            setPass2("");
            alert("Mật khẩu xác nhận không giống nhau");
        }
    }

  return (
    <View style={{ flex: 1, backgroundColor: '#0C0F14', alignItems: "center" }}>
        <StatusBar barStyle='light-content'/>
        <View style={{flexDirection: "row", marginTop: 60, width: "100%"}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    style={{width: 50, height: 50, margin: 10}}
                    source={require('../img/icon_back.png')}/>
            </TouchableOpacity>
            <Text style={styles.leader}>Setting</Text>
        </View>
        <Image
                style={{width: 160, height: 160, margin: 20}}
                source={require('../img/avt_home.png')}
            />

        <TextInput 
            placeholder='Name'
            placeholderTextColor='grey'
            style={{ margin: 10, marginTop: 40, width: 348,height: 48,fontSize: 14, borderWidth: 2, borderRadius: 8, borderColor: 'grey', color: 'white', padding: 10}}
            keyboardType='text'
            onChangeText={(text) => setName_setting(text)}
        >{Name_setting}</TextInput>    
        <TextInput 
            placeholder='Emall'
            placeholderTextColor='grey'
            style={{ margin: 10, width: 348,height: 48,fontSize: 14, borderWidth: 2, borderRadius: 8, borderColor: 'grey', color: 'white', padding: 10}}
            keyboardType='text'
            editable={false} 
            selectTextOnFocus={false}
        >{Email}</TextInput>
        <TextInput 
            placeholder='Password'
            placeholderTextColor='grey'
            style={{ margin: 10, width: 348,height: 48,fontSize: 14, borderWidth: 2, borderRadius: 8, borderColor: 'grey', color: 'white', padding: 10}}
            secureTextEntry={true}
            onChangeText={(text) => setPass(text)}
        >{Pass}</TextInput>  
        <TextInput 
            placeholder='Re-type password'
            placeholderTextColor='grey'
            style={{ margin: 10, width: 348,height: 48,fontSize: 14, borderWidth: 2, borderRadius: 8, borderColor: 'grey', color: 'white', padding: 10}}
            secureTextEntry={true}
            onChangeText={(text) => setPass2(text)}
        >{Pass2}</TextInput>  

        <TouchableOpacity
            style={{backgroundColor: '#D17842', width: 348, height: 57, justifyContent: 'center', marginTop: 40, borderRadius: 20}}
            onPress={() => {
                save()
            }}
            >
            <Text
                style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>
                Save
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Personal_Details

const styles = StyleSheet.create({
    leader:{
        color: 'white',
        fontSize: 30,
        marginLeft: 100,
        marginTop: -10,
        alignSelf: "center",
    }
})