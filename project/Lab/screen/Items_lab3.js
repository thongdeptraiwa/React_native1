import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Items_lab3 = (props) => {
    const {dataItem} = props;
    return (
        <View style={styles.container}>
            <Image source={{ uri: dataItem.Img }} style={styles.img} />          
            <View style= {styles.center}>
                <Text>
                    {dataItem.Name}
                </Text>
                <Text>
                    {dataItem.Job}
                </Text>
            </View>
            <Text style={styles.text}>
                 Call
            </Text>
        </View>
    )
}

export default Items_lab3

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 10,
        textAlign: 'center',
        alignItems : 'center',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    center:{
        alignItems: 'center'
    },
    text: {
        color: 'green',
        fontWeight: 'bold'
    },
    img: {
        borderRadius: 30,
        width: 50, 
        height: 50
    }
})