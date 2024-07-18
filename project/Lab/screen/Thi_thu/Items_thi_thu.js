import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Items_thi_thu = (props) => {
    const {dataItem} = props;
  return (
    <View style={styles.view}>
        <View>
          <Image
                style={{width: 150, height: 126, borderRadius: 20}}
                source={{uri: dataItem.image}}
                resizeMode='contain'/>
        </View>
        <Text style={[styles.txt,{fontSize: 14},{fontWeight: 'bold'}]}>{dataItem.ten}</Text>
        <Text style={[styles.txt,{fontSize: 14}, {color: 'red'}]}>{dataItem.gia}</Text>
        <View style={{flexDirection: "row", marginTop: 10, justifyContent: 'space-between'}}>

            <View style={{flexDirection: "row"}}>
                <Image
                    style={{width: 15, height: 15}}
                    source={require('../../img/star.png')}
                    resizeMode='contain'/>
                <Text style={[styles.txt]}>{dataItem.sao}</Text>
            </View>
            <Text style={[styles.txt,{fontSize: 10}, {marginTop: 5}]}>{dataItem.reviews}</Text>
            <Image
                style={{width: 15, height: 15}}
                source={{uri: 'https://i.sstatic.net/k59em.png'}}
                resizeMode='contain'/>

        </View>
      </View> 
  )
}

export default Items_thi_thu

const styles = StyleSheet.create({
    view:{
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        margin: 10,
        padding: 10,
        width: 170,
        height: 220
    },
    txt:{
      color: 'black',
      fontFamily: 'Poppins',
      
    }
})