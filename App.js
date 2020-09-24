import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardPharmacie from './src/components/CardPharmacie'
import ButtonLoad from './src/components/ButtonLoad'
import ListPharmacie from './src/components/ListPharmacie'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonLoad text={'Charger les pharmacies autour de soi'} source={require('./src/assets/pharmacie-logo.png')} style={styles.image}></ButtonLoad>
      </View>
      <View style={styles.content}>
        <ListPharmacie data={data}></ListPharmacie>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7e1d2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
  },
  content: {
    flex: 4,
  },
  footer: {
  }
});


const data = [{
  name: 'Pharmacie de Casablanca',
  address: 'rue de la belleville, Paris'
},
{
  name: 'Pharmacie de Grenoble',
  address: 'rue de la Champollion, Grenoble'
},
{
  name: 'Pharmacie de Vaulnaveys-le-haut',
  address: 'rue de l\'ours, Grenoble'
}
]