import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Items_lab3 from './Items_lab3'
const Lab3 = () => {
  return (
    <View style={{backgroundColor: 'red'}}>
        <FlatList
            data={dataNV}
            renderItem={({item}) =>  <Items_lab3 dataItem={item}/>}
            key={item => item.id}
        />
    </View>
  )
}

export default Lab3

const dataNV = [
    {
        "id": 1,
        "Name": "Nguyen Van A",
        "Job": "Developer",
        "Img": "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg"
    },
    {
        "id": 2,
        "Name": "Nguyen Van B",
        "Job": "Dentist",
        "Img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid="
    },
    {
        "id": 3,
        "Name": "Nguyen Van C",
        "Job": "Maketing",
        "Img": "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg"
    },
    {
        "id": 4,
        "Name": "Nguyen Van D",
        "Job": "Manager",
        "Img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeR68OgZGUSnc0p7Wdynklhu67TTRfpsBmuL5muvD3g&s"
    },
    {
        "id": 5,
        "Name": "Nguyen Van E",
        "Job": "Developer",
        "Img": "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg"
    },
    {
        "id": 6,
        "Name": "Nguyen Van F",
        "Job": "Maketing",
        "Img": "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg"
    },
    {
        "id": 7,
        "Name": "Nguyen Van G",
        "Job": "Maketing",
        "Img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid="
    },
    {
        "id": 8,
        "Name": "Nguyen Van H",
        "Job": "Developer",
        "Img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeR68OgZGUSnc0p7Wdynklhu67TTRfpsBmuL5muvD3g&s"
    },
]
