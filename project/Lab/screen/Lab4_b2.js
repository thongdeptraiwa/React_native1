import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Lab4_b2 = () => {
  return (
    <View style={{width: '100%', height: "100%", backgroundColor: 'white', flexDirection: "row", justifyContent: 'space-between'}}>

        <View style={{width: 200, height: 400, backgroundColor:'purple'}}>
            <View style={{flex: 0.5, backgroundColor:'red', justifyContent: 'center', alignItems:'center'}}>
                <Text style={{color: 'white', fontSize: 50}}>2</Text>
            </View>
            <View style={{flex: 0.5, backgroundColor:'blue', justifyContent: 'center', alignItems:'center'}}>
                <Text style={{color: 'white', fontSize: 50}}>4</Text>
            </View>
        </View>

        <View style={{width: 200, height: 400, backgroundColor:'purple', alignSelf: 'flex-end'}}>
            <View style={{flex: 0.5, backgroundColor:'orange', justifyContent: 'center', alignItems:'center'}}>
                <Text style={{color: 'white', fontSize: 50}}>3</Text>
            </View>
            <View style={{flex: 0.5, backgroundColor:'red', justifyContent: 'center', alignItems:'center'}}>
                <Text style={{color: 'white', fontSize: 50}}>1</Text>
            </View>
        </View>

    </View>
  )
}

export default Lab4_b2

const styles = StyleSheet.create({})