import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import productImage from '../../img/product.png'
import star from '../../img/star.png';
import save from '../../img/save.png';

const Detail_Screen = (props) => {

  const {navigation} = props

  const data = [
    {
      id: '1',
      ten: 'Coffee Table',
      gia: '50.00',
      sao: 3,
      ngay_thang : '20/03/2020',
      mota: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/lab6_7_8%2Fcoffee%20table.jpg?alt=media&token=6719d78b-63bd-4dbb-9b9e-8ded4661e660'
    },
    {
      id: '2',
      ten: 'Coffee Table',
      gia: '50.00',
      sao: 2,
      ngay_thang : '20/03/2020',
      mota: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/lab6_7_8%2Fcoffee%20table.jpg?alt=media&token=6719d78b-63bd-4dbb-9b9e-8ded4661e660'
    },
    {
      id: '3',
      ten: 'Coffee Table',
      gia: '50.00',
      sao: 4,
      ngay_thang : '20/03/2020',
      mota: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/lab6_7_8%2Fcoffee%20table.jpg?alt=media&token=6719d78b-63bd-4dbb-9b9e-8ded4661e660'
    },
    {
      id: '4',
      ten: 'Coffee Table',
      gia: '50.00',
      sao: 2,
      ngay_thang : '20/03/2020',
      mota: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/lab6_7_8%2Fcoffee%20table.jpg?alt=media&token=6719d78b-63bd-4dbb-9b9e-8ded4661e660'
    }
  ]

  const [soluong, setSoluong] = useState(1);
  const [TB_sao, setTB_sao] = useState();

  const tang = () => {
    setSoluong(soluong + 1);
  };

  const giam = () => {
    if (soluong > 1) {
      setSoluong(soluong - 1);
    }
  };

  //mục danh
  useEffect(() => {
    
    var tong_sao=0;
    for (var i=0; i<data.length; i++){
      tong_sao=tong_sao+parseInt(data[i].sao);
    }
    setTB_sao(tong_sao/data.length);
    //console.log(tong_sao);
  
    return () => {
      
    }
  }, [data])

  return (
    <View style={styles.container}>
      <Image source={productImage} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Minimal Stand</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.price}>$ 50</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={styles.button2} onPress={tang}>
              <Text style={[styles.buttonText,{color: 'black'}]}>+</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>
              {
                soluong > 9 ?
                null
                : 0
              }
              {soluong}
            </Text>
            <TouchableOpacity style={styles.button2} onPress={giam}>
              <Text style={[styles.buttonText,{color: 'black'}]}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <Image source={star} style={styles.star} />
          <Text style={{marginLeft: 5, color: 'black', fontWeight: 'bold', fontSize: 20 }}>{TB_sao}</Text>
          <Pressable onPress={()=> navigation.navigate('Reviews_Screen', {data: data})}>
          <Text style={{marginLeft: 5, color: 'grey' }}>(50 reviews)</Text></Pressable>
        </View>
        <Text style={styles.description}>
          Minimal Stand is made of natural wood. The design is very simple and minimal. This is truly one of the best pieces of furniture in any family home. With 3 different colors, you can easily select the best match for your home.
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Pressable style={styles.save} onPress={() => {}}>
         <Image source={save} style={styles.star} />
        </Pressable>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Detail_Screen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    alignSelf: 'flex-end', 
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  name: {
    fontFamily: 'serif',
    fontSize: 30,
    marginBottom: 10,
    marginTop: 20,
  },
  description: {
    fontFamily: 'serif',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    color: 'grey'
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  quantity: {
    fontSize: 20,
    margin: 20,
  },
  button: {
    width: '70%',
    height : 60,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center",   
    margin: 10,
  },
  button2: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#DAD8D8',
  },
  buttonText: {
    fontFamily: 'serif',
    color: '#fff',
    fontSize: 20,
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  save:{
    backgroundColor: '#DAD8D8',
    width : '15%',
    height : 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
    borderRadius: 5
  }
});

