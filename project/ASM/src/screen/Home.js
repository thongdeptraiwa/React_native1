import { StyleSheet, SafeAreaView, Text, View, StatusBar, FlatList, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useEffect, useState, useContext} from 'react'
import Item_sp from './item/Item_sp'
import Item_menu from './item/Item_menu'
import axios from 'axios';
import { AppContext } from '../../ultil/AppContext';

const Home = (props) => {

  const {navigation} = props;

  const {Email} = useContext(AppContext);
  const {Name} = useContext(AppContext);

  console.log(Email);
  console.log(Name);

  const [DataCate, setDataCate] = useState([{
    "_id": "",
    "name": "All"
  }])
  const [IdCate, setIdCate] = useState("")
  const [DataProduct, setDataProduct] = useState([])
  const [DataGraspus_graspus, setDataGraspus_graspus] = useState([])

  //mục danh
  useEffect(() => {
    axios.get("https://cro101-b166e76cc76a.herokuapp.com/categories")
    .then(function (response) {
      
      if(response.data.status == true){
        setDataCate(DataCate.concat(response.data.categories))
      }
    })
    .catch(function (error) {
      console.log(error);
      
    });
  
    return () => {
      
    }
  }, [])

  //all
  useEffect(() => {
    axios.get("https://cro101-b166e76cc76a.herokuapp.com/products",{
      params: {
        category: IdCate
      }
    })
    .then(function (response) {
      if(response.data.status == true){
        setDataProduct(response.data.products)
      }
    })
    .catch(function (error) {
      console.log(error);
      
    });
  
    return () => {
      
    }
  }, [IdCate])


  //first 
  useEffect(() => {
    axios.get("https://cro101-b166e76cc76a.herokuapp.com/products?category=65b07ddcfc13ae4836b4cb0f")
    .then(function (response) {
      if(response.data.status == true){
        setDataGraspus_graspus(response.data.products)
      }
    })
    .catch(function (error) {
      console.log(error);
      
    });
  
    return () => {
      
    }
  }, [])
  


  return (
    <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#0C0F14', alignItems: 'center'}}>
      <StatusBar barStyle='light-content'/>
      <ScrollView>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
          {/* icon_menu */}
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Image
                style={{width: 40, height: 40}}
                source={require('../img/img_btn_menu.png')}
            />
          </TouchableOpacity>
           {/* avt */}
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Image
                style={{width: 40, height: 40, borderRadius: 10}}
                source={require('../img/avt_home.png')}
            />
          </TouchableOpacity>
          
        </View>  

        <View style={{width: 200, height: 75, margin: 10}}>
          <Text style={{ color: "white", fontSize: 31, fontWeight: 'bold'}}>
            Find the best
            coffee for you
          </Text>
        </View>

        <View>
          {/* <FontAwesome5 name="rocket" size={30} color="#900" /> */}
          <TextInput 
              placeholder='Find Your Coffee...'
              placeholderTextColor='grey'
              style={{ alignSelf: 'center' ,margin: 10, width: 380,height: 45,fontSize: 14, borderRadius: 15, color: 'white', padding: 10, backgroundColor: '#1E1E1E'}}
              keyboardType='text'
          >
          </TextInput>
        </View>

        {/* List menu */}
        <View style={{backgroundColor: '#0C0F14', height: 60}}>
          <FlatList
                data={DataCate}
                renderItem={({item}) => <TouchableOpacity onPress={() => setIdCate(item._id)}>
                    <Item_menu dataItem={item} id={IdCate}/>
                   </TouchableOpacity>}
                keyExtractor={item => item._id}
                showsHorizontalScrollIndicator={false}
                horizontal
                />
        </View>

        {/* list_all_sp */}
        <View style={{backgroundColor: "#0C0F14", height: 260, margin: 10}}>
          <FlatList
                data={DataProduct}
                renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('Chi_tiet_sp', {id: item._id, image: item.image})}>
                  <Item_sp dataItem={item}/>
                </TouchableOpacity>}
                keyExtractor={item => item._id}
                showsHorizontalScrollIndicator={false}
                horizontal
                />
        </View>

        <View style={{backgroundColor: "#0C0F14", alignSelf: 'flex-start', margin: 10}}>
          <Text style={{color: "white", fontSize: 20, fontWeight: 'bold'}}>Graspus graspus</Text>
        </View>

        {/* list_sp */}
        <View style={{backgroundColor: "#0C0F14", height: 260, margin: 10}}>
          <FlatList
                data={DataGraspus_graspus}
                renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('Chi_tiet_sp', {id: item._id, image: item.image})}>
                  <Item_sp dataItem={item}/>
                </TouchableOpacity>}
                keyExtractor={item => item.ID_san_pham}
                showsHorizontalScrollIndicator={false}
                horizontal
                />
        </View>

      </ScrollView>   
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    view: {
        with: 500,
        height: 200,
    }
})
