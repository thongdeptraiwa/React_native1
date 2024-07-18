import { StyleSheet, 
        Text, 
        View,
        SafeAreaView,
        TouchableOpacity,
        TextInput,
        Pressable,
        Button,
        TextInputBase,
    } from 'react-native'
import React, {useState} from 'react'

const May_tinh = () => {

    //may tinh
    const [KetQua, setKetQua] = useState('');

    const toan_hang = (Number) =>{
        var x = KetQua + Number;
        setKetQua(x);
    }
    const thuc_hien = () =>{
        setKetQua(eval(KetQua));
    }
    const xoa_all = () =>{
        setKetQua('');
    }
    


  return (
    <SafeAreaView>

      {/* <View style={styles.container}>
        <Text style={styles.text_cha}>
              
          Em vào đời bằng <Text style={{color: 'red'}}>vang đỏ</Text> anh vào đời bằng <Text style={{color: 'yellow'}}>nước trà</Text>
          {'\n'}
          {'\n'}
          Bằng cơn mưa thơm <Text style={{fontWeight: 'bold', fontSize: 20}}>mùi đất</Text> và <Text style={{fontSize: 10}}>bằng hoa dại mọc trước nhà</Text>
          {'\n'}
          {'\n'}
          <Text style={{color: 'brown'}}>
            Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
          </Text>
          
          {'\n'}
          {'\n'}
          Lý trí em là <Text style={{letterSpacing: 10,textDecorationLine: 'underline'}}>công cụ</Text> còn trái tim anh là <Text style={{letterSpacing: 10,textDecorationLine: 'underline'}}>động cơ</Text>
          {'\n'}
          {'\n'}
          <Text style={{textAlign: 'right'}}>
          Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
          </Text>
          {'\n'}
          {'\n'}
          <Text style={{color: 'orange', textAlign: 'center'}}>
          Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
          </Text>
          {'\n'}
          {'\n'}
          <Text style={{color: 'black', fontWeight: 'bold'}}>
          Em vào đời bằng <Text style={{color: 'white'}}>mây trắng</Text> em vào đời bằng <Text style={{color: 'yellow'}}>nắng xanh</Text>
          {'\n'}
          {'\n'}
          Em vào đời bằng <Text style={{color: 'yellow'}}>đại lộ</Text> và con đường đó giờ <Text style={{color: 'white'}}>vắng anh</Text>
          thong
          </Text>
            
        </Text>
      </View> */}

  
      {/* //may tinh */}
    <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center',marginTop: 50}}>
      Máy Tính
    </Text>
      {/* ket qua */}
    <Text 
      style={{height: 50, borderWidth: 2,fontSize: 25, fontWeight: 'bold',color: "red", textAlign:'center', justifyContent: 'center', padding: 10, letterSpacing: 10, marginTop: 50, marginLeft: 20, marginRight: 20}}>
        {KetQua}
    </Text>

    <View style={{alignItems: 'center', margin: 20}}>
      <View style={{flexDirection: 'row'}}>
          <Button title='7' onPress={() => toan_hang('7')}/>
          <Button title='8' onPress={() => toan_hang('8')}/>
          <Button title='9' onPress={() => toan_hang('9')}/>
          <Button title='+' onPress={() => toan_hang('+')}/>
      </View>
      <View style={{flexDirection: 'row'}}>
          <Button title='4' onPress={() => toan_hang('4')}/>
          <Button title='5' onPress={() => toan_hang('5')}/>
          <Button title='6' onPress={() => toan_hang('6')}/>
          <Button title='-' onPress={() => toan_hang('-')}/>
      </View>
      <View style={{flexDirection: 'row'}}>
          <Button title='1' onPress={() => toan_hang('1')}/>
          <Button title='2' onPress={() => toan_hang('2')}/>
          <Button title='3' onPress={() => toan_hang('3')}/>
          <Button title='*' onPress={() => toan_hang('*')}/>
      </View>
      <View style={{flexDirection: 'row'}}>
          <Button title='=' onPress={() => thuc_hien()}/>
          <Button title='0' onPress={() => toan_hang('0')}/>
          <Button title='C' onPress={() => xoa_all()}/>
          <Button title='/' onPress={() => toan_hang('/')}/>
      </View>
    </View>
    

    </SafeAreaView>
  )
}

export default May_tinh

const styles = StyleSheet.create({
    
})