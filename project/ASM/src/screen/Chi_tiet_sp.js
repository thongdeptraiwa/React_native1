import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView, Pressable, TouchableOpacity, FlatList} from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Item_size from './item/Item_size';

const Chi_tiet_sp = (props) => {

  const {route,navigation} = props;
  const {params} = route;

  const [Data, setData] = useState([]);
  const [IdSize, setIdSize] = useState('')

  //
  useEffect(() => {
    axios.get("https://cro101-b166e76cc76a.herokuapp.com/products/"+params.id)
    .then(function (response) {
      if(response.data.status == true){
        setData(response.data.product);
      }
    })
    .catch(function (error) {
      console.log(error);
    });

    return () => {
      
    }
  }, [])

  ///gắn s vào dataItem.image
  var arr_img = params.image.split('');
  arr_img.splice(4, 0, 's');
  var img = arr_img.join('');
  console.log(img);
  
  

  return (
    
      <View style={{ width: '100%', height: '100%', backgroundColor: '#0C0F14', alignItems: 'center'}}>
  
        <View>
            <Image
              style={{width: 430, height: 580}}
              source={{uri: img}}
              resizeMode='contain'
                />
            {/* back */}
            <TouchableOpacity style={{ width: 50, height: 50, position: 'absolute', marginLeft: 10, marginTop: 50}} onPress={() => navigation.goBack()}>
              <Image
                  style={{width: 50, height: 50, marginTop: 5}}
                  source={require('../img/icon_back.png')}/>
            </TouchableOpacity>
            {/* tim */}
            <TouchableOpacity style={{ width: 50, height: 50, position: 'absolute',justifyContent: 'center' ,right: 0, marginTop: 50, marginRight: 10}}>
              <Image
                  style={{width: 42, height: 42, alignSelf: 'center'}}
                  source={require('../img/icon_tim.png')}/>
            </TouchableOpacity>
            {/* Name */}
            <View style={{ position: 'absolute', width: "100%" , height: 170 ,backgroundColor: 'rgba(0,0,0,0.7)', bottom: 0,borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 20, flexDirection: 'row' }}>
              <View style={{flex: 0.6}}>
                <Text style={[styles.txt,{fontSize: 20},{fontWeight: 'bold'},{height: 25}]}>{Data.name}</Text>
                <Text style={[styles.txt,{fontSize: 16}, {color: 'grey'}]}>With Steamed Milk</Text>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                  <Image
                    style={{width: 25, height: 25, marginTop: 8, marginLeft: 5}}
                    source={require('../img/icon_start.png')}
                    resizeMode='contain'/>
                  <Text style={[styles.txt, {fontSize: 18}]}>  4.4</Text>
                  <Text style={[styles.txt, {fontSize: 13}, {color: 'grey'}, {marginTop: 15}]}> ({Data.voting})</Text>
                </View>
              </View>
              <View style={{flex: 0.4}}>
                <View style={{flex: 0.5, flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 0.5,alignItems: 'center'}}>
                    <Image
                        style={{width: 60, height: 60}}
                        source={require('../img/chi_tiep_name_1.png')}
                        resizeMode='contain'/>
                  </View>
                  <View style={{flex: 0.5,alignItems: 'center'}}>
                    <Image
                        style={{width: 60, height: 60}}
                        source={require('../img/chi_tiep_name_2.png')}
                        resizeMode='contain'/>
                  </View>
                </View>
                <View style={{flex: 0.5,alignItems: 'center', marginTop: 5}}>
                  <Image
                      style={{width: 140, height: 50, marginTop: 10}}
                      source={require('../img/chi_tiep_name_3.png')}
                      resizeMode='contain'/>
                </View>
              </View>
            </View> 
        </View>
        {/* Description */}
        <View>
            <Text style={[{color: 'grey'},{fontSize: 17},{margin: 10}]}>Description</Text>
            <Text style={[styles.txt,{fontSize: 15},{margin: 10}]}>{Data.description}</Text>
        </View>
        {/* size */}
        <View style={{width: '100%'}}>
            <Text style={[{color: 'grey'},{fontSize: 17},{margin: 10}]}>Size</Text>
            <View style={{height: 60, alignItems: 'center'}}>
              <FlatList
                  data={DataSize}
                  renderItem={({item}) => <TouchableOpacity style={{ width: 100, margin: 15}} onPress={() => setIdSize(item.id)}>
                      <Item_size dataItem={item} id={IdSize}/>
                    </TouchableOpacity>}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  />
            </View>
        </View>
        {/* giá-btn thêm giỏ hàng */}
        <View style={{flexDirection: "row", justifyContent: 'space-around', marginTop: 10}}>
          <View style={{flexDirection: "column"}}>
            <View>
              <Text style={[{color: 'grey'},{fontSize: 17},{margin: 10},{textAlign: 'center'},{marginLeft: -20},{marginBottom: -5}]}>Price</Text>
            </View>
            <View style={{flexDirection: "row"}}>
              <Text style={[styles.txt,{marginLeft: 20},{fontSize: 27},{fontWeight: 'bold'},{color: '#D17842'}]}>$ </Text>
              <Text style={[styles.txt,{marginRight: 80},{fontSize: 27},{fontWeight: 'bold'}]}>{Data.price}</Text>
            </View>
          </View>
          <Pressable
            style={{backgroundColor: '#D17842', width: 240, height: 60, justifyContent: 'center', marginTop: 10, borderRadius: 20}}
            onPress={() => {
                navigation.navigate('Bottom_home');
            }}
            >
            <Text
                style={{color: 'white', textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 20}}>
                Add to Cart
            </Text>
          </Pressable>
        </View>

      </View>
  )
}

export default Chi_tiet_sp

const styles = StyleSheet.create({
    txt:{
        color: 'white',
        fontFamily: 'Poppins',
        marginTop: 7,
      }
})
const DataSize = [
  {
      id: 1,
      Name: "250gm",
  },
  {
      id: 2,
      Name: "500gm",
  },
  {
      id: 3,
      Name: "1000gm",
  }
]