import { FlatList, Image, TouchableOpacity, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Items from './Items'

const Reviews_Screen = (props) => {

  const {navigation, route} = props;
  const {params} = route;
  
  return (
    <View style={{flex: 1}}>    
      <SafeAreaView>

      <View style={{flexDirection: "row", width: "100%", justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    style={{width: 45, height: 45, margin: 10}}
                    source={require('../../img/icon_back.png')}/>
            </TouchableOpacity>
            <Text style={styles.leader}>My reviews</Text>
            <TouchableOpacity>
                <Image
                    style={{width: 40, height: 40, margin: 10}}
                    source={require('../../img/search.png')}/>
            </TouchableOpacity>
        </View> 
        <FlatList
        data={params.data}
        renderItem={({item}) => <Items dataItems={item}/>}
        keyExtractor={(item) => item.id}>
        </FlatList>

      </SafeAreaView>
    </View>
  )
}

export default Reviews_Screen

const styles = StyleSheet.create({
  leader:{
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: -15,
    alignSelf: "center",
  }
})

