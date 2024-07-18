import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import Items_thi from './Items_thi'

const Home_thi = () => {

  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 10}}>    
      <SafeAreaView>

      <View style={{flexDirection: "row", width: "100%", justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    style={{width: 45, height: 45, margin: 10}}
                    source={require('../../img/icon_back.png')}/>
            </TouchableOpacity>
            <Text style={styles.leader}>caterogy</Text>
            <TouchableOpacity>
                <Image
                    style={{width: 40, height: 40, margin: 10}}
                    source={require('../../img/search.png')}/>
            </TouchableOpacity>
        </View> 

        <View style={{ justifyContent: 'center', padding: 10}}>
            <FlatList
            data={data}
            numColumns={2}
            renderItem={({item}) => <Items_thi dataItem={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            Vertical
            >
            </FlatList>
        </View>
        

      </SafeAreaView>
    </View>
  )
}

export default Home_thi

const styles = StyleSheet.create({
    leader:{
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: -15,
        alignSelf: "center",
      }
})

const data = [
    {
      id: '1',
      ten: 'Strawberry Punch',
      gia: '$25',
      sao: '3.5',
      reviews : '86 Reviews',
      image: 'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-studio-front-m4DEoGWu.png'
    },
    {
        id: '2',
        ten: 'TMA-2 HD Wireless',
        gia: 'Rp. 2.400.000',
        sao: '4.5',
        reviews : '6 Reviews',
        image: 'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-studio-front-m4DEoGWu.png'
    },
    {
        id: '3',
        ten: 'TMA-3 HD Wireless',
        gia: 'Rp. 1.000.000',
        sao: '3',
        reviews : '87 Reviews',
        image: 'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-studio-front-m4DEoGWu.png'
    },
    {
        id: '4',
        ten: 'TMA-4 HD Wireless',
        gia: 'Rp. 10.500.000',
        sao: '2.5',
        reviews : '156 Reviews',
        image: 'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-studio-front-m4DEoGWu.png'
    },
    {
        id: '5',
        ten: 'TMA-5 HD Wireless',
        gia: 'Rp. 12.500.000',
        sao: '5',
        reviews : '3 Reviews',
        image: 'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-studio-front-m4DEoGWu.png'
    },
    {
        id: '6',
        ten: 'TMA-6 HD Wireless',
        gia: 'Rp. 3.500.000',
        sao: '4.2',
        reviews : '23 Reviews',
        image: 'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-studio-front-m4DEoGWu.png'
    },
    {
        id: '7',
        ten: 'TMA-5 HD Wireless',
        gia: 'Rp. 12.500.000',
        sao: '5',
        reviews : '3 Reviews',
        image: 'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-studio-front-m4DEoGWu.png'
    },
    {
        id: '8',
        ten: 'TMA-6 HD Wireless',
        gia: 'Rp. 3.500.000',
        sao: '4.2',
        reviews : '23 Reviews',
        image: 'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-studio-front-m4DEoGWu.png'
    }
  ]