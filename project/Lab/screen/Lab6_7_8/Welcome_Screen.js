import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Welcome_Screen = (props) => {
    const {navigation} = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../img/background.png")} 
        style={styles.imageBackground}>
        <Text style={styles.title}>MAKE YOUR</Text>
        <Text style={[ styles.titleBold]}>HOME BEAUTIFUL</Text>
        <Text style={styles.subtitle}>
          The best simple place where you discover most wonderful furnitures and make your home beautiful
        </Text>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login_Screen')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Welcome_Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 50,
      },
      title: {
        paddingHorizontal: 10,
        fontSize: 32,
        color: 'gray',
        textAlign: 'left',
        fontWeight: '400',

      },
      titleBold: {
        paddingHorizontal: 10,
        fontSize: 38,
        color: '#333',
        textAlign: 'left',
        fontWeight: 'normal',
        fontWeight: 'bold',
      },
      subtitle: {
        lineHeight: 30,
        marginHorizontal: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '85%',
        fontSize: 16,
        color: 'gray',
        fontWeight: '300',
        textAlign: 'left',
        marginVertical: 20,
      },
      button: {
        backgroundColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 30,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },
})