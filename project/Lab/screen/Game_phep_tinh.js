import { StyleSheet, Text, TextInput, View, Pressable, Switch, Alert } from 'react-native'
import React, {useState} from 'react'

const Game_phep_tinh = () => {

    // let rd1 = Math.floor((Math.random() * 10));
    // let rd2 = Math.floor((Math.random() * 10));
    // let rd3 = Math.floor((Math.random() * 10));
    // let rd_phep = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

    // const [so_rd1, setSo_rd1] = useState(rd1);
    // const [so_rd2, setSo_rd2] = useState(rd2);
    // const [so_rd3, setSo_rd3] = useState(rd3);
    // const [phep_rd, setPhep_rd] = useState(rd_phep);
    // const [kq, setKq] = useState("");
    // const [phep, setPhep] = useState("");

    // //console.log(rd_phep);

    // const tinh_phep = (bl) => {

    //     rd();

    //     var phep_tinh = so_rd1+phep_rd+so_rd2;
    //     var kq_phep = eval(phep_tinh);

    //     var kp_1="";

    //     if(kq_phep == so_rd3){
    //         kp_1 = 1;
    //     }else{
    //         kp_1 = 0;
    //     }

    //     //ss
    //     if(bl == kp_1){
    //         rd();
    //         setKq("");
    //     }else{
    //         setKq("Game Over!");
    //     }
        


    //     console.log(kp_1);

    // }

    // const rd = () => {
    //     let rd1 = Math.floor((Math.random() * 10));
    //     let rd2 = Math.floor((Math.random() * 10));
    //     let rd3 = Math.floor((Math.random() * 10));
    //     let rd_phep = Math.floor(Math.random() * (4 - 1 + 1)) + 1;


    //     if(rd_phep == 1){
    //         setPhep_rd("+");
    //         setPhep("cộng");
    //     }else if(rd_phep == 2){
    //         setPhep_rd("-");
    //         setPhep("trừa");
    //     }else if(rd_phep == 3){
    //         setPhep_rd("*");
    //         setPhep("nhân");
    //     }else{
    //         setPhep_rd("/");
    //         setPhep("chia");
    //     }

    //     setSo_rd1(rd1);
    //     setSo_rd2(rd2);
    //     setSo_rd3(rd3);
    // }
    



    const [isShow, setIsShow] = useState(false);

    const data_bai_toan = [
        {
            "s1": 1,
            "phep_tinh": "+",
            "s2": 2,
            "s3": 3
        },
        {
            "s1": 2,
            "phep_tinh": "-",
            "s2": 1,
            "s3": 1
        },
        {
            "s1": 3,
            "phep_tinh": "*",
            "s2": 3,
            "s3": 9
        },
        {
            "s1": 8,
            "phep_tinh": "/",
            "s2": 4,
            "s3": 2
        }
    ]    

    const [level, setLevel] = useState(0);   
    console.log(level); 

    // const [s1, setS1] = useState(data_bai_toan[level].s1);
    // const [phep_tinh, setPhep_tinh] = useState(data_bai_toan[level].phep_tinh);
    // const [s2, setS2] = useState(data_bai_toan[level].s2);
    // const [s3, setS3] = useState(data_bai_toan[level].s3);

    // let s1 = 1;
    // let phep_tinh = '+';
    // let s2 = 2;
    // let s3 = 3;

    //const [kq_lab5, setKq_lab5] = useState('');
    const rd = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    const [u_rd, setU_rd] = useState(rd);


    const lab5 = (text) => {

        if(text != ''){

            let kq; 

            switch(u_rd){
                case 1:{
                    //setS1(text);
                    kq = eval(text+data_bai_toan[level].phep_tinh+data_bai_toan[level].s2);
                    break;
                }
                case 2:{
                    //setPhep_tinh(text);
                    kq = eval(data_bai_toan[level].s1+text+data_bai_toan[level].s2);
                    break;
                }
                case 3:{
                    //setS2(text);
                    kq = eval(data_bai_toan[level].s1+data_bai_toan[level].phep_tinh+text);
                    break;
                }
                case 4:{
                    //setS3(text);
                    kq = text;
                    break;
                }
            }

            if(data_bai_toan[level].s3 == kq){
                // alert("Đúng");

                setLevel(level + 1);
                
                //random số khác số random cũ
                let rd_again;
                do{
                    rd_again = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
                }while(rd_again == u_rd);
                setU_rd(rd_again);

            }else{

                alert("Sai");
                
            }
        }

    }

    const win = () => {

        if(level == data_bai_toan.length){

            alert("Thắng");

            //reset
            setLevel(0);

            //ẩn game hiện btn bắt đầu
            setIsShow(!isShow)

        }

    }

    
  return (
    <View>
        { 
            isShow ?
            <View>
                <Text style={{textAlign: 'center', fontSize: 16, margin: 10}}>Màn: {level+1} <Text></Text> </Text>

                <View style={{alignItems: 'center'}}>
                    {/* <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
                        <Text>{rd1} </Text>
                        <Text>{phep_rd} </Text>
                        <Text>{rd2}</Text>
                    </View>

                    <Text>=</Text>

                    <Text>{rd3}</Text> */}
                    <Text>Random ẩn thông tin tại vị trí thứ: <Text>{u_rd}</Text></Text> 
                </View>

                <View>

                    { u_rd != 1 && level != data_bai_toan.length ?
                        <Text style={{borderWidth: 1, width: 50, height: 50, margin: 10, padding: 10}} >{data_bai_toan[level].s1}</Text>
                        :<TextInput style={{borderWidth: 1, width: 50, height: 50, margin: 10, padding: 10}}
                            onChangeText={(text) => lab5(text)}></TextInput>
                    }
                    { u_rd != 2 && level != data_bai_toan.length ?
                        <Text style={{borderWidth: 1, width: 50, height: 50, margin: 10, padding: 10}} >{data_bai_toan[level].phep_tinh}</Text>
                        :<TextInput style={{borderWidth: 1, width: 50, height: 50, margin: 10, padding: 10}}
                            onChangeText={(text) => lab5(text)}></TextInput>
                    }
                    { u_rd != 3 && level != data_bai_toan.length ?
                        <Text style={{borderWidth: 1, width: 50, height: 50, margin: 10, padding: 10}} >{data_bai_toan[level].s2}</Text>
                        :<TextInput style={{borderWidth: 1, width: 50, height: 50, margin: 10, padding: 10}}
                            onChangeText={(text) => lab5(text)}></TextInput>
                    }
                    <Text>        =</Text>
                    { u_rd != 4 && level != data_bai_toan.length ?
                        <Text style={{borderWidth: 1, width: 50, height: 50, margin: 10, padding: 10}} >{data_bai_toan[level].s3}</Text>
                        :<TextInput style={{borderWidth: 1, width: 50, height: 50, margin: 10, padding: 10}}
                            onChangeText={(text) => lab5(text)}></TextInput>
                    }
                    
                </View>

                <View>
                    <Text>Người dùng cần điền đúng giá trị vào vị trí trống</Text>
                    {/* <Text>{kq_lab5}</Text> */}
                </View>

                {/* <Pressable 
                    style={{backgroundColor: "blue", margin: 10, height: 20, borderRadius: 5}}
                    onPress={() => tinh_phep(1)}
                    >
                    <Text
                        style={{ textAlign:'center'}}
                        >Đúng</Text>
                </Pressable>
                <Pressable 
                    style={{backgroundColor: "grey", margin: 10, height: 20, borderRadius: 5}}
                    onPress={() => tinh_phep(0)}
                    >
                    <Text
                        style={{ textAlign:'center'}}
                        >Sai</Text>
                </Pressable>

                <Text style={{fontSize: 16, textAlign: 'center'}}>{kq}</Text> */}
            
            </View>
            : null
        }
        
        {
            isShow ?
            null
            :<Pressable 
                style={{backgroundColor: "green", marginTop: 100, marginLeft: 50, marginRight: 50, height: 50, borderRadius: 10, justifyContent: 'center'}}
                onPress={() => setIsShow(!isShow)}

                >
                <Text
                    style={{ textAlign:'center'}}
                    >Bắt đầu</Text>
            </Pressable>
        }
        {
            level == data_bai_toan.length ?
            win()
            : null
        }
                
    </View>

  )
}

export default Game_phep_tinh

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
    }
})