import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useState} from 'react'

const Lab4_b4 = () => {

    const [tong_sl_nhan, setTong_sl_nhan] = useState(0);
    const [sl_nhan_xanh, setSl_nhan_xanh] = useState(0);
    const [sl_nhan_do, setSl_nhan_do] = useState(0);
    const [sl_nhan_tim, setSl_nhan_tim] = useState(0);
    

    const tinh = (mau) => {

        setTong_sl_nhan(tong_sl_nhan+1);

        if(mau == 1){
            
             setSl_nhan_xanh(sl_nhan_xanh+1);
            
        }else if(mau == 2){
            
             setSl_nhan_do(sl_nhan_do+1);
            
        }else{
            
             setSl_nhan_tim(sl_nhan_tim+1);
            
        }

        
    };



  return (
    <View style={{width: '100%', height: "100%", backgroundColor: 'white', paddingLeft: 8, paddingRight: 8, justifyContent: 'space-evenly'}}>
      
        <View style={{flex: 0.23, flexDirection: 'row', backgroundColor:'white'}}>
            <Image 
                style={{flex: 0.3}}
                source={{uri: 'https://afamilycdn.com/150157425591193600/2022/7/30/vie-channelphoto-nala2022wukong-14-1659151887492311862305.jpg'}}/>
            <View style={{flex: 0.7}}>
                <Text style={{color: 'green', fontSize: 25}}>ĐỘC THÂN: {tong_sl_nhan != 0 ? (sl_nhan_xanh/tong_sl_nhan*100).toFixed(2) : 0}%{'\n'}</Text>
                <Text style={{color: 'red', fontSize: 25}}>ĐÃ CÓ CHỦ: {tong_sl_nhan != 0 ? (sl_nhan_do/tong_sl_nhan*100).toFixed(2) : 0}%{'\n'}</Text>
                <Text style={{color: 'purple', fontSize: 25}}>LGBT: {tong_sl_nhan != 0 ? (sl_nhan_tim/tong_sl_nhan*100).toFixed(2) : 0}%{'\n'}</Text>
            </View>
        </View>

        <Pressable 
            style={{flex: 0.23, flexDirection: 'row', backgroundColor:'green', justifyContent: 'center', alignItems:'center'}}
            onPress={() => tinh(1)}>
            <Text style={{color: 'white', fontSize: 20}}>ĐỘC THÂN</Text>
        </Pressable>

        <Pressable 
            style={{flex: 0.23, flexDirection: 'row', backgroundColor:'red', justifyContent: 'center', alignItems:'center'}}
            onPress={() => tinh(2)}>
            <Text style={{color: 'white', fontSize: 20}}>ĐÃ CÓ CHỦ</Text>
        </Pressable>

        <Pressable 
            style={{flex: 0.23, flexDirection: 'row', backgroundColor:'purple', justifyContent: 'center', alignItems:'center'}}
            onPress={() => tinh(3)}>
            <Text style={{color: 'white', fontSize: 20}}>LGBT</Text>
        </Pressable>

    </View>
  )
}

export default Lab4_b4

const styles = StyleSheet.create({})