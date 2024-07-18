import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Item_setting from './item/Item_setting';
import Dialog from "react-native-dialog";

const Setting = (props) => {

    const { navigation } = props;
    const [visible, setVisible] = useState(false);

    const showDialog = () => {
        setVisible(true);
    };

    const handle_huy = () => {
        setVisible(false);
    };

    const handle_dong_y = () => {
        setVisible(false);
        navigation.navigate("Login");
    };

    const chuc_nang = (id) => {
        if (id == 2) {
            navigation.navigate("Personal_Details");
        } else if (id == 7) {
            showDialog();
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#0C0F14', alignItems: "center" }}>
            <StatusBar barStyle='light-content' />
            <View style={{ flexDirection: "row", marginTop: 60, width: "100%" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        style={{ width: 50, height: 50, margin: 10 }}
                        source={require('../img/icon_back.png')} />
                </TouchableOpacity>
                <Text style={styles.leader}>Setting</Text>
            </View>

            <View>
                <FlatList
                    data={Data_Setting}
                    renderItem={({ item }) => <TouchableOpacity onPress={() => chuc_nang(item.id)}>
                        <Item_setting dataItem={item} id={item.id} />
                    </TouchableOpacity>}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                />
                <Dialog.Container visible={visible}>
                    <Dialog.Title>Thông báo</Dialog.Title>
                    <Dialog.Description>
                        Bạn có chắc chắn thoát ?
                    </Dialog.Description>
                    <Dialog.Button label="Huỷ" onPress={handle_huy} />
                    <Dialog.Button label="Đồng ý" onPress={handle_dong_y} />
                </Dialog.Container>
            </View>

        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    leader: {
        color: 'white',
        fontSize: 30,
        marginLeft: 100,
        marginTop: -10,
        alignSelf: "center",
    }
})
const Data_Setting = [
    {
        id: 1,
        img: require("../img/icon_History.png"),
        Name: "History",
    },
    {
        id: 2,
        img: require("../img/icon_Personal_Details.png"),
        Name: "Personal Details",
    },
    {
        id: 3,
        img: require("../img/icon_Address.png"),
        Name: "Address",
    },
    {
        id: 4,
        img: require("../img/icon_Payment_Method.png"),
        Name: "Payment Method",
    },
    {
        id: 5,
        img: require("../img/icon_about.png"),
        Name: "About",
    },
    {
        id: 6,
        img: require("../img/icon_help.png"),
        Name: "Help",
    },
    {
        id: 7,
        img: require("../img/ic_twotone-log-out.png"),
        Name: "Log out",
    }
]