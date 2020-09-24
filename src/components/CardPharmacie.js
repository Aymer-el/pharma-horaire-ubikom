import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ButtonLoad from './ButtonLoad'

function PharmacieCardComponent(props) {
  return (
    <View style={{ flex: 1, marginBottom: 25}}>
      <Text style={styles.name}>Pharmacie : {props.name}</Text>
      <Text style={styles.address}>Pharmacie : {props.address}</Text>
      <ButtonLoad text={'plus d\'info'}></ButtonLoad>
    </View>
  ); 
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40
  },
  name: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
  adresse: {
    marginBottom: 7,
    fontSize: 15
  }
});

export default PharmacieCardComponent;