import React, { useState } from 'react';
import { Styles } from './styles';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions
} from 'react-native';

const App = () => {

  const [data, setData ] = useState([
    {id: '1', img: require('../AwesomeProject/images/1.jpg'), title: "Dont stop me now", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]},
    {id: '2', img: require('../AwesomeProject/images/2.jpg'), title: "Ayy nibba", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]},
    {id: '3', img: require('../AwesomeProject/images/1.jpg'), title: "I wanna die", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]},
    {id: '4', img: require('../AwesomeProject/images/2.jpg'), title: "I wanna die", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]},
    {id: '5', img: require('../AwesomeProject/images/1.jpg'), title: "Dont stop me now", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]},
    {id: '6', img: require('../AwesomeProject/images/2.jpg'), title: "Ayy nibba", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]},
    {id: '7', img: require('../AwesomeProject/images/1.jpg'), title: "I wanna die", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]},
    {id: '8', img: require('../AwesomeProject/images/2.jpg'), title: "I wanna die", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]}
  ]) ;

  return (
    <>
      <View style={Styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({item})=> (
          <>
          <View style={Styles.containerFlex}>
            <View style={[Styles.box, Styles.itemContainer]}>
              <Text style={Styles.title}>{item.title}</Text>
              <Text style={Styles.desc}>{item.description}</Text>
              <Text style={Styles.time}>{item.days[0]} {item.days[1]}</Text>
            </View>
            <View style={Styles.itemContainer}>
              <Image
                  source={item.img}
                  style={Styles.image}/>
            </View>
          </View>
          <View style={Styles.line}/>
          </>
        )}
      >
      </FlatList>
      </View>
    </>
  );
};

export default App;
