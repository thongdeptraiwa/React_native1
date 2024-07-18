import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Items_thi = (props) => {
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
        
        <View style={{flexDirection: "row", marginTop: 10, justifyContent: 'space-between'}}>

            <View style={{flexDirection: "row"}}>
                <Text style={{backgroundColor: 'green'}}>Tradly</Text>
                <Text style={[styles.txt]}>Tradly</Text>
            </View>
            <Text style={[styles.txt,{fontSize: 10}, {marginTop: 5}]}>{dataItem.gia}</Text>
            
        </View>
      </View> 
  )
}

export default Items_thi

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