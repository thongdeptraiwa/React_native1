import { StyleSheet, Text} from 'react-native'
import React from 'react'
import AppStyle from './AppStyle'

const CustomText = ({text,diem}) => {
  return (
    
    <Text>{text} {diem}</Text>
    
  )
}

export default CustomText

const styles = StyleSheet.create({})