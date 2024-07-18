import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Stack_menu = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View style={styles.v_row}>
        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('May_tinh');
            }}
            >
            <Text>Máy tính</Text>
        </Pressable>
        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Lab3');
            }}
            >
            <Text>Lab 3</Text>
        </Pressable>
      </View>

      <View style={styles.v_row}>
        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Bottom_lab4');
            }}
            >
            <Text>Lab 4</Text>
        </Pressable>

        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Game_phep_tinh');
            }}
            >
            <Text>Game_phep_tinh</Text>
        </Pressable>
      </View>

      
        <View style={styles.v_row}>
            <Pressable 
                style={styles.btn}
                onPress={() => {
                    navigation.navigate('Welcome_Screen');
                }}
                >
                <Text>Lab 6-7-8</Text>
            </Pressable>

            <Pressable 
                style={styles.btn}
                onPress={() => {
                    navigation.navigate('Login_thi_thu');
                }}
                >
                <Text>Thi_thu</Text>
            </Pressable>
        </View>

        <View style={styles.v_row}>
            <Pressable 
                style={styles.btn}
                onPress={() => {
                    navigation.navigate('Dang_ki_thi');
                }}
                >
                <Text>Thi</Text>
            </Pressable>

            <Pressable 
                style={styles.btn}
                onPress={() => {
                    navigation.navigate('app');
                }}
                >
                <Text>Demo_react2</Text>
            </Pressable>
            
        </View>

    </View>
  )
}

export default Stack_menu

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    v_row:{
        flexDirection: 'row',
    },
    btn:{
        backgroundColor: 'green',
        width: 120,
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    }
})