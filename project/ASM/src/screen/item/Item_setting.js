import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Item_setting = (props) => {
    const {dataItem} = props;
  return (
    <View style={styles.container}>
        <Image 
            source={dataItem.img} 
            style={styles.img} 
            resizeMode='contain'/>          
        <Text style={styles.text}>
            {dataItem.Name}
        </Text>
        <Image
            style={{width: 40, height: 40, marginTop: 15, marginRight: 10}}
            source={require('../../img/icon_>.png')}
            resizeMode='contain'/>
    </View>
  )
}

export default Item_setting

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 10,
        textAlign: 'center',
        alignItems : 'center',
        width: "100%",
    },
    center:{
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 24,
        marginLeft: -60,
        width: 200
    },
    img: {
        width: 30, 
        height: 30,
        borderRadius: 15,
        backgroundColor: "#33241D",
    }
})