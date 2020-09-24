import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonLoad from './ButtonLoad'

function PharmacieCardComponent(props) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.card_top}>
            <ButtonLoad text={'plus d\'info'} source={require('../assets/pharmacie-logo.png')} style={styles.image}></ButtonLoad>
            <View style={styles.name}>
              <Text style={styles.title}>{props.name}</Text>
              <Text style={styles.address}>{props.address}</Text>
            </View>
        </View>
        <View>
            <Text >Horaire : De 8h à 9h</Text>
            <Text >Horaire de garde: Lundi 12 octobre De 8h à 9h</Text>
        </View>
      </View>
    </TouchableOpacity>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 25,
  },
  card_top: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 25
  },
  image: {
    width: '20%'
  },
  name: {
    width: '60%'
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#cd7c9e'
  },
  adresse: {
    marginBottom: 7,
    fontSize: 15
  },
  card_bottom: {

  }
});

export default PharmacieCardComponent;