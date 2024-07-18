import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Item_size = (props) => {
    const {dataItem, id} = props;  
  return (
    <View style={styles.view}>
        {
            id == dataItem.id ?
            <View style={styles.btn_chon}>
                <Text style={styles.txt_chon}>{dataItem.Name}</Text>
            </View>
            :<View style={styles.btn_ko_chon}>
                <Text style={styles.txt_ko_chon}>{dataItem.Name}</Text>
            </View>
        }
        
    </View>
    
  )
}

export default Item_size

const styles = StyleSheet.create({
    view:{
        justifyContent: "center",
    },
    btn_ko_chon: {
        backgroundColor: "#1E1E1E",
        width: 100,
        height: 40,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 10
        
    },
    txt_ko_chon: {
        textAlign: "center",
        color: 'grey', 
        fontSize: 16,
    },
    btn_chon: {
        backgroundColor: "#1E1E1E",
        width: 100,
        height: 40,
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#D17842',
        alignSelf: "center",
        
    },
    txt_chon: {
        textAlign: "center",
        color: '#D17842', 
        fontSize: 16,
    }
})