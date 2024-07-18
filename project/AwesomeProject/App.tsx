/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TextInput
  
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Button } from './node_modules/react-native/types/index';


function App(): React.JSX.Element {

  //Lab1 
  const [topScorer, setTopScorer] = useState(null);
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  const players = [
    { name: 'Messi', goals: 30 }, 
    { undefined }, 
    { name: 'Neymar', goals: 22 }, 
    { goals: 2 },
    { name: 'Mbappé', goals: 25 }, 
    { name: 'Pele', goals: null },
  ];
  var players_filte = [];

  useEffect(() => {
    const findTopScorer = () => {
      let currentTopScorer = null;
      for (const player of players) {
        if (!currentTopScorer || player.goals > currentTopScorer.goals) {
          currentTopScorer = player;
        }
        if(player.name != null && player.goals !=null){
          players_filte.push(player);
        }
      }
      setTopScorer(currentTopScorer);
    };

    findTopScorer();
    setFilteredPlayers(players_filte);
  }, []); // Empty dependency array to run effect only once

  const renderItem_b1 = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ddd' }}>
      <Text>Name: {item.name}</Text>
      <Text>Goals: {item.goals}</Text>
    </View>
  );

  //Lab2 b1
  const class1 = [ {
    mssv: 'PS0000',
    name: 'Nguyen Van A',
    avgPoint: 8.9,
    avgTraningPoint: 7,
    status: 'pass',
  }, {
    mssv: 'PS0001',
    name: 'Nguyen Van B',
    avgPoint: 4.9, 
    avgTraningPoint: 8, 
    status: 'pass',
  } ];

  const class2 = [ {
    mssv: 'PS0002',
    name: 'Nguyen Van C', 
    avgPoint: 4.9, 
    avgTraningPoint: 9, 
    status: 'failed',
  }, {
    mssv: 'PS0003',
    name: 'Nguyen Van D',
    avgPoint: 9, 
    avgTraningPoint: 10, 
    status: 'pass',
  }, {
    mssv: 'PS0004',
    name: 'Nguyen Van E', 
    avgPoint: 10,
    avgTraningPoint: 2, 
    status: 'pass',
  }, ]

  //gom 2 arr
  const all_class = class1.concat(class2);
//   console.log(all_class.length);
//   //filter studen pass
//   loadInit = async () => {
//     await this.getData()
// }
  const all_student_pass = all_class.filter((student) => student.status == 'pass');
  //console.log(all_student_pass.length);

  //sort diem
  all_student_pass.sort(function(sv1, sv2) {
    return sv2.avgPoint - sv1.avgPoint;
  });
  //console.log(all_student_pass);

  //sort ren luyen
  // slice() tạo ra một bản sao mới của mảng gốc.
  const top_student_ren_luyen = all_student_pass.slice().sort(function(sv1, sv2) {
    return sv2.avgTraningPoint - sv1.avgTraningPoint;
  });
  //console.log(top_student_ren_luyen);

  //todolist
  const renderItem_lab2_b1 = ({item}) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ddd' }}>
      <Text>Mssv: {item.mssv}</Text>
      <Text>Name: {item.name}</Text>
      <Text>Điểm: {item.avgPoint}</Text>
      <Text>Điểm rèn luyện: {item.avgTraningPoint}</Text>
      <Text>Trạng thái: {item.status}</Text>
    </View>
  );
  
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>

        {/* Lab1 */}
        {/* <View style={{ flex: 1 }}>
          {topScorer && (
            <Text style={{ fontSize: 20, margin: 10 }}>Top Scorer: {topScorer.name}</Text>
          )}
          <FlatList
            data={filteredPlayers}
            renderItem={renderItem_b1}
            />
        </View> */}


        {/* Lab2 b1 */}
        {/* <View style={{ flex: 1 }}>

          <Text style={{ fontSize: 20, margin: 10 }}>
            Ong vàng: {all_student_pass[0].name}
          </Text>

          <Text style={{ fontSize: 20, margin: 10 }}>
            SV có điểm rèn luyện cao nhất: {top_student_ren_luyen[0].name}
          </Text>
          

          <FlatList
            data={all_class}
            renderItem={renderItem_lab2_b1}
            />

        </View> */}

          <View style={styles.container}>
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

            </Text>
            
            </Text>
          </View>
       
       <Text>a</Text>
       <Text style={{}}></Text>
    

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 20,
    
  },
  text_cha: {
    color: 'white',
    
  }
});

export default App;
