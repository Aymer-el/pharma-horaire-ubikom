import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import ButtonLoad from '../components/ButtonLoad';
import ButtonPulse from '../components/ButtonPulse'
import Geolocation from '@react-native-community/geolocation';
 
function HomeScreen({navigation}) {
  const [position, setPosition] = useState({});
  Geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords
      setPosition({latitude, longitude});
    },
    error => Alert.alert('Error', JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={() => navigation.navigate('Les pharmacies', position)}>
        <ButtonPulse></ButtonPulse>
        <Image style={styles.image} source={require('../assets/pharmacie-logo.png')}></Image>
      </TouchableOpacity>
      <ButtonLoad >
        <Image source={require('../assets/localisationIcon.png')} style={styles.image}></Image>
        <Text style={styles.text}>Load GeoLocalisation</Text>
      </ButtonLoad>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40
  },
  text: {
    height: 30,
    marginBottom: 10,
    fontWeight: 'bold'
  }
});

export default HomeScreen;
