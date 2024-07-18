import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Lab4_b3 = () => {
  return (
    <View style={{width: '100%', height: "100%", backgroundColor: 'white', justifyContent: "center", alignItems: "center"}}>

        <View style={{width: 380, height: 500, backgroundColor: 'white'}}>

            <View style={{flex: 0.33, backgroundColor: 'white', flexDirection: "row", justifyContent: 'space-between'}}>
                <View style={{width: 165, height: 165, backgroundColor:'yellow', justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{color: 'white', fontSize: 50}}>1</Text>
                </View>
                <View style={{width: 165, height: 165, backgroundColor:'purple', justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{color: 'white', fontSize: 50}}>2</Text>
                </View>
            </View>
            <View style={{flex: 0.33, backgroundColor: 'white', alignItems: 'center'}}>
                <View style={{width: 165, height: 165, backgroundColor:'orange', justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{color: 'white', fontSize: 50}}>5</Text>
                </View>
            </View>
            <View style={{flex: 0.33, backgroundColor: 'white', flexDirection: "row", justifyContent: 'space-between'}}>
                <View style={{width: 165, height: 165, backgroundColor:'green', justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{color: 'white', fontSize: 50}}>4</Text>
                </View>
                <View style={{width: 165, height: 165, backgroundColor:'red', justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{color: 'white', fontSize: 50}}>4</Text>
                </View>
            </View>

        </View>
            
    </View>
  )
}

export default Lab4_b3

const styles = StyleSheet.create({})