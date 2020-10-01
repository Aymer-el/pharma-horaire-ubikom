import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListPharmacies from "../components/ListPharmacies";

export default function ListPharmaciesScreen(props) {
    return (
      <View style={styles.container} >
          <ListPharmacies data={data} keyExtractor={data.name}></ListPharmacies>
      </View>
    );
  }



const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 2,
  },
  content: {
    flex: 9,
  },
  footer: {
    flex: 1
  },
  image: {
    width: 40,
    height: 40
  },
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
  