import {
  Text, View,
  TextInput, TouchableOpacity,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import AppStyle from './AppStyle'
import CustomButton from './CustomButton'
import CustomText from './CustomText'

const app = () => {
  const [diem, setDiem] = useState(0);
  const [caoNhat, setCaoNhat] = useState(0);
  const [soThuNhat, setSoThuNhat] = useState(0);
  const [soThuHai, setSoThuHai] = useState(0);
  const [ketQua1, setKetQua1] = useState(0);
  const [ketQua2, setKetQua2] = useState(0);
  const [ketQua3, setKetQua3] = useState(0);

  useEffect(() => {
    rd()
  }, []);

  const rd = () => {
    let _soThuNhat = Math.floor(Math.random() * 10);
      let _soThuHai = Math.floor(Math.random() * 10);
      setSoThuNhat(_soThuNhat);
      setSoThuHai(_soThuHai);
      // random vị trí hiện kết quả đúng
      const viTri = Math.floor(Math.random() * 3);
      if (viTri == 0) {
          setKetQua1(_soThuNhat + _soThuHai);
          setKetQua2(Math.floor(Math.random() * 20));
          setKetQua3(Math.floor(Math.random() * 20));
      }
      else if(viTri == 1) {
          setKetQua1(Math.floor(Math.random() * 20));
          setKetQua2(_soThuNhat + _soThuHai);
          setKetQua3(Math.floor(Math.random() * 20));
      }
      else {
          setKetQua1(Math.floor(Math.random() * 20));
          setKetQua2(Math.floor(Math.random() * 20));
          setKetQua3(_soThuNhat + _soThuHai);
      }  
  }
  const onPress = (value) => {
      if (value == (soThuHai + soThuNhat)) {
          setDiem(diem + 1);
          if (diem > caoNhat) {
              setCaoNhat(diem);
          }            
      }
      rd()
  }

  return (
      <View style={AppStyle.container}>
          
          <CustomText diem={diem} text={"Điểm"}/>

          <Text style={AppStyle.text}>Điểm cao nhất: {caoNhat}</Text>
          <Text style={AppStyle.text}>{soThuNhat} + {soThuHai} = ?</Text>
          <CustomButton title={ketQua1}
              onPress={() => onPress(ketQua1)} />
          <CustomButton title={ketQua2}
              onPress={() => onPress(ketQua2)} />
          <CustomButton title={ketQua3}
              onPress={() => onPress(ketQua3)} />
      </View>
  )
}

export default app