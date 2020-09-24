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
        <ButtonLoad ></ButtonLoad>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
    flex: 3,
    backgroundColor: 'green'
  },
  footer: {
    flex: 2
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