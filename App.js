import React, { useState } from 'react';

import { Styles } from './styles';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid 
} from 'react-native';

import Header from './components/header/header';

const App = () => {

  const notifyMessage = (msg) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
      AlertIOS.alert(msg);
    }
  }

  const [data, setData ] = useState([
    {id: '1', img: require('./images/1.jpg'), title: "Dont stop me now", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]},
    {id: '2', img: require('./images/2.jpg'), title: "Ayy nibba", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]},
    {id: '3', img: require('./images/1.jpg'), title: "I wanna die", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]},
    {id: '4', img: require('./images/2.jpg'), title: "I wanna die", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]},
    {id: '5', img: require('./images/1.jpg'), title: "Dont stop me now", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]},
    {id: '6', img: require('./images/2.jpg'), title: "Ayy nibba", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]},
    {id: '7', img: require('./images/1.jpg'), title: "I wanna die", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]},
    {id: '8', img: require('./images/2.jpg'), title: "I wanna die", description: "Tonight, I'm gonna have myself...", days: ["Monday", "Wednesday"]}
  ]) ;

  return (
    <>
      <Header/>
      <View style={Styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({item})=> (
            <>
            <View style={Styles.containerFlex}>
              <View style={[Styles.box, Styles.itemContainer]}>
              <TouchableOpacity>
                <Text style={Styles.title}>{item.title}</Text>
                <Text style={Styles.desc}>{item.description}</Text>
                <Text style={Styles.time}>{item.days[0]} {item.days[1]}</Text>
              </TouchableOpacity>
              </View>
              <TouchableOpacity>
              <View style={Styles.itemContainer}>
                <View style={Styles.imageWrapper}>
                  <Image
                      source={item.img}
                      style={Styles.image}/>
                </View>
              </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.line}/>
            </>
          )}
        >
        </FlatList>
      </View>
      <TouchableOpacity>
        <View 
          style={Styles.addMoreContainer}
          onPress={() => {notifyMessage("FUCK")}}>
            <Text style={Styles.addMoreButton}>Add More Activities...</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default App;
