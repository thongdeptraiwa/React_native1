import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ItemNV from './ItemNV'

const ViewTop = () => {
  return (
    <View>
      <Text>ViewTop</Text>
      <FlatList
            data={data}
            renderItem={({item}) => <ItemNV dataItem={item}/>}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
            />
    </View>
  )
}

export default ViewTop

const styles = StyleSheet.create({
    view: {
        with: 500,
        height: 200,
    }
})
const data = [
    {
        "id": 1,
        "name": "Nguyen Van A"
    },
    {
        "id": 2,
        "name": "Nguyen Van B"
    },
    {
        "id": 3,
        "name": "Nguyen Van C"
    },
    {
        "id": 4,
        "name": "Nguyen Van D"
    }
]
