import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Lab4_b1 = () => {
  return (
    <View style={{width: '100%', height: "100%", backgroundColor: 'red'}}>
      <View style={{flex: 0.25, flexDirection: 'row', backgroundColor:'black'}}>
        <View style={{flex: 0.5, backgroundColor:'yellow'}}>
        </View>
        <View style={{flex: 0.5, backgroundColor:'black'}}>
        <View style={{flex: 0.5, backgroundColor:'orange', flexDirection: 'row'}}>
          <View style={{flex: 0.5, backgroundColor:'green'}}>
          </View>
        </View>
        <View style={{flex: 0.5, backgroundColor:'purple', flexDirection: 'row'}}>
          <View style={{flex: 0.5, backgroundColor:'blue'}}>
          </View>
        </View>
      </View>
    </View>

      <View style={{flex: 0.25, flexDirection: 'row', backgroundColor:'pink'}}>
        
      </View>

      <View style={{flex: 0.25, flexDirection: 'row', backgroundColor:'black'}}>
        <View style={{flex: 0.5, backgroundColor:'black'}}>
          <View style={{flex: 0.5, backgroundColor:'purple', flexDirection: 'row'}}>
          </View>
          <View style={{flex: 0.5, backgroundColor:'orange', flexDirection: 'row'}}>
          </View>
        </View>
        <View style={{flex: 0.5, backgroundColor:'black', flexDirection: 'row'}}>
          <View style={{flex: 0.5, backgroundColor:'blue', flexDirection: 'row'}}>
          </View>
          <View style={{flex: 0.5, backgroundColor:'red', flexDirection: 'row'}}>
          </View>
        </View>
      </View>

      <View style={{flex: 0.25, flexDirection: 'row', backgroundColor:'yellow'}}>
        <View style={{flex: 0.25, backgroundColor:'black', flexDirection: 'column'}}>
          <View style={{flex: 0.5, backgroundColor:'#79EBCF'}}>
          </View>
          <View style={{flex: 0.5, backgroundColor:'#67CE67'}}>
          </View>
        </View>
        <View style={{flex: 0.5, backgroundColor:'black', flexDirection: 'column'}}>
          <View style={{flex: 0.5, backgroundColor:'#67CE67'}}>
          </View>
          <View style={{flex: 0.5, backgroundColor:'purple'}}>
          </View>
        </View>
        <View style={{flex: 0.25, backgroundColor:'black', flexDirection: 'column'}}>
        <View style={{flex: 0.5, backgroundColor:'#79EBCF'}}>
          </View>
          <View style={{flex: 0.5, backgroundColor:'#67CE67'}}>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Lab4_b1

const styles = StyleSheet.create({})