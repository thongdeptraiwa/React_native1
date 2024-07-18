import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import star from '../../img/star.png';

const Items = (props) => {

  const { dataItems } = props;

  return (
    <View style={styles.container}>
      <View style={styles.items}>

        <View style={styles.itemContent}>
          <Image source={{ uri: dataItems.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text>{dataItems.ten}</Text>
            <Text style={{fontWeight: '500', fontSize: 20}}>${dataItems.gia}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',paddingHorizontal: 10,}}>
          <View style={{flexDirection: 'row'}}>
            {
              dataItems.sao == 5 ?
              <View style={{flexDirection: 'row'}}>
                <Image source={star} style={styles.star} />
                <Image source={star} style={styles.star} />
                <Image source={star} style={styles.star} />
                <Image source={star} style={styles.star} />
                <Image source={star} style={styles.star} />
              </View>
              : dataItems.sao == 4 ?
              <View style={{flexDirection: 'row'}}>
                <Image source={star} style={styles.star} />
                <Image source={star} style={styles.star} />
                <Image source={star} style={styles.star} />
                <Image source={star} style={styles.star} />
              </View>
              : dataItems.sao == 3 ?
              <View style={{flexDirection: 'row'}}>
                <Image source={star} style={styles.star} />
                <Image source={star} style={styles.star} />
                <Image source={star} style={styles.star} />
              </View>
              : dataItems.sao == 2 ?
              <View style={{flexDirection: 'row'}}>
                <Image source={star} style={styles.star} />
                <Image source={star} style={styles.star} />
              </View>
              : dataItems.sao == 1 ?
              <View style={{flexDirection: 'row'}}>
                <Image source={star} style={styles.star} />
              </View>
              : null
            }
          </View>
          <Text style={{color: 'grey'}}>{dataItems.ngay_thang}</Text>
        </View>
        <Text style={styles.mota}>{dataItems.mota}</Text>

      </View>
    </View>
  );
}

export default Items;

const styles = StyleSheet.create({
  container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
  items: {
    width: '90%',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: 'black',
    width: 100,
    height: 100,
  },
  textContainer: {
    marginLeft: 10,
  },
  mota: {
    lineHeight: 25,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: 'serif'
  },
  star: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});
