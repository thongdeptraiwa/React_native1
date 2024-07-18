import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const Item_menu = (props) => {

  const {dataItem, id} = props;  

  return (
    <View style={styles.view}>
      {
        id == dataItem._id ?
        <Text style={[styles.txt,{fontSize: 17},{fontWeight: 'bold'},{color: '#D17842'}]}>{dataItem.name}</Text>
        :<Text style={[styles.txt,{fontSize: 17},{fontWeight: 'bold'}]}>{dataItem.name}</Text>
      }
    </View>
  )
}

export default Item_menu

const styles = StyleSheet.create({
    view:{
        margin: 10,

    },
    txt:{
      color: 'white',
      fontFamily: 'Poppins',
      marginTop: 10,
    }
})