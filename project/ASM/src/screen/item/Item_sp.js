import { StyleSheet, Text, View, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'

const Item_sp = (props) => {

  const {dataItem} = props;

  ///gắn s vào dataItem.image
  var arr_img = dataItem.image.split('');
  arr_img.splice(4, 0, 's');
  var img = arr_img.join('');
  //console.log(img);

  return (
    
      <View style={styles.view}>
        <View>
          <Image
                style={{width: 150, height: 126, borderRadius: 20}}
                source={{uri: img}}
                resizeMode='contain'/>
          <View style={{ height: 30,flexDirection: 'row', top: 0,backgroundColor: 'rgba(0,0,0,0.7)', position: 'absolute', right: 0, borderBottomLeftRadius: 25,}}>
            <Image
                style={{width: 15, height: 15, marginTop: 5, marginLeft: 5}}
                source={require('../../img/icon_start.png')}
                resizeMode='contain'/>
            <Text style={[styles.txt]}> 4.4</Text>
          </View>
        </View>
        <Text style={[styles.txt,{fontSize: 17},{fontWeight: 'bold'}, {height: 30}]}>{dataItem.name}</Text>
        <Text style={[styles.txt,{fontSize: 14},{height: 30}]}>With Steamed Milk</Text>
        <View style={{flexDirection: "row", marginTop: 10}}>
        <Text style={[styles.txt,{marginLeft: 20},{fontSize: 18},{fontWeight: 'bold'},{color: '#D17842'}]}>$ </Text>
        <Text style={[styles.txt,{marginRight: 40},{fontSize: 18},{fontWeight: 'bold'}]}>{dataItem.price}</Text>
        <Pressable
            style={{backgroundColor: '#D17842', width: 28, height: 28, justifyContent: 'center', borderRadius: 5, marginTop: 5}}>
            <Text
                style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>
                +
            </Text>
        </Pressable>
        </View>
      </View> 
    
  )
}

export default Item_sp

const styles = StyleSheet.create({
    view:{
        backgroundColor: "#1E1E1E",
        borderRadius: 20,
        margin: 10,
        padding: 10,
        width: 170,
        height: 245
    },
    txt:{
      color: 'white',
      fontFamily: 'Poppins',
      marginTop: 5,
    }

})