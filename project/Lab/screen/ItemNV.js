import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemNV = (props) => {

    const {dataItem} = props;

  return (
    <View style={styles.view}>
      <Text>ID: {dataItem.id}</Text>
      <Text>Name: {dataItem.name}</Text>
    </View>
  )
}

export default ItemNV

const styles = StyleSheet.create({
    view:{
        borderWidth: 1,
        borderColor: "red",
        margin: 10,
        padding: 10,
        width: 100,
    }
})