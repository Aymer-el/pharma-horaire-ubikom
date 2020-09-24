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
      <Text style={styles.footer}>Open up App.js to start working on your app!</Text>
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
    flex: 2,
  },
  content: {
    flex: 9,
    width: '85%',
  },
  footer: {
    flex: 1
  }
});


const data = [{
  name: 'Pharmacie de Casablanca',
  address: 'rue de la belleville, Paris',
  ouverture: [
    {'lundi': ['8h à 12', '13h à 19h']},
    {'mardi': ['8h à 12', '13h à 19h']},
    {'mercredi': ['8h à 12', '13h à 19h']},
    {'jeudi': ['8h à 12', '13h à 19h']},
    {'vendredi': ['11h à 12', '13h à 19h']},
    {'samedi': ['8h à 12', '13h à 19h']},
    {'dimanche': ['11h à 12', '13h à 19h']}
  ],
  ouvertureDeGarde: [
    {'lundi': ['8h à 12', '13h à 19h']},
    {'dimanche': ['8h à 12', '13h à 19h']}
  ],
},{
  name: 'Pharmacie de Vaulnaveys-le-haut',
  address: 'rue de l\'ours, Grenoble',
  ouverture: [
    {'lundi': ['8h à 12', '13h à 19h']},
    {'mardi': ['8h à 12', '13h à 19h']},
    {'mercredi': ['11h à 12', '14h à 19h']},
    {'jeudi': ['8h à 12', '13h à 19h']},
    {'vendredi': ['8h à 12', '16h à 19h']},
    {'samedi': ['8h à 12', '18h à 19h']},
    {'dimanche': ['8h à 12', '13h à 19h']}
  ],
  ouvertureDeGarde: [
    {'lundi': ['8h à 12', '12h à 19h']},
    {'dimanche': ['9h à 12', '13h à 19h']}
  ],
},
{
  name: 'Pharmacie de Grenoble',
  address: 'rue de la Champollion, Grenoble',
  ouverture: [
    {'lundi': ['8h à 12', '13h à 19h']},
    {'mardi': ['8h à 12', '13h à 19h']},
    {'mercredi': ['8h à 12', '13h à 19h']},
    {'jeudi': ['8h à 12', '13h à 19h']},
    {'vendredi': ['8h à 12', '13h à 19h']},
    {'samedi': ['8h à 12', '13h à 19h']},
    {'dimanche': ['8h à 12', '13h à 19h']}
  ],
  ouvertureDeGarde: [
    {'lundi': ['8h à 12', '13h à 19h']},
    {'dimanche': ['8h à 12', '13h à 19h']}
  ],
}
]