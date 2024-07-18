import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import line from '../../img/line.png'
import logo from '../../img/logo.png'
import icon_eye from '../../img/icon_eye.png'

const Login_thi_thu = (props) => {

    const { navigation } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')

    const Dang_Nhap = () => {

        //check null
        if (Email == "" || Email == null) {
            alert("Chưa nhập Username");
            return;
        }
        if (Pass == "" || Pass == null) {
            alert("Chưa nhập Pass");
            return;
        }
        //login thanh cong
        navigation.navigate('Home_thi_thu');

    }


    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <SafeAreaView>
            
                <Text style={[styles.title_welcome, styles.title]}>Welcome back to          Mega Mall</Text>
                <Text style={[styles.title_hello, styles.title]}>Silahkan masukan data untuk login</Text>

                <View style={styles.container}>
                    <Text style={{ marginLeft: 20}}>Email/ Phone</Text>
                    <TextInput style={styles.text_input}
                        placeholder='Masukan Alamat Email/ No Telepon Anda'
                        placeholderTextColor='grey'
                        onChangeText={(text) => setEmail(text)}>
                    </TextInput>
                    <View style={[styles.passwordContainer, {flexDirection: 'column'}]}>
                        <Text style={{alignSelf: 'flex-start', marginLeft: 20}}>Password</Text>
                        <TextInput
                            placeholder='Masukan Kata Sandi Akun'
                            placeholderTextColor='grey'
                            style={[styles.text_input]}
                            secureTextEntry={!showPassword}
                            onChangeText={(text) => setPass(text)}
                        />
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setShowPassword(!showPassword)}   >
                            <Image source={icon_eye} style={styles.iconImage} />
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                
                    {
                        (Email == "" || Email == null || Pass == "" || Pass == null) ?
                        <TouchableOpacity style={styles.button_grey} onPress={() => Dang_Nhap()}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                        :<TouchableOpacity style={styles.button} onPress={() => Dang_Nhap()}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                    }
                    

                    <View style={{ flexDirection: "row", justifyContent: 'space-around', width: "100%", marginTop: 250}}>
                        <Text style={{ fontFamily: 'serif', }}>Forgot Password</Text>
                        <Text style={{ fontFamily: 'serif', color: '#3669C9' }}>Sign Up</Text>
                    </View>

                </View>
            </SafeAreaView>
        </View>
    )
}

export default Login_thi_thu

const styles = StyleSheet.create({
    title_hello:{
        color: 'gray', 
        fontSize: 20,
        fontFamily: 'serif',
        fontWeight: '300',
        marginBottom: 30,
      },
      title_welcome: {
        color: 'black', 
        fontSize: 35, 
        fontFamily: 'serif',
        fontWeight: '500',
        marginTop: 50,
        marginBottom: 20
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
        backgroundColor: '#FAFAFA',
        height: 50,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
      },
      passwordContainer:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
      },
      eyeIcon: {
        bottom: 38,
        position: 'absolute',
        right: 38,
      },
       button: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: '#3669C9',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 30,
        fontFamily: 'serif',
      },
      button_grey: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: '#C4C5C4',
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