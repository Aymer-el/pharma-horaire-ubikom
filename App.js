import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import PharmaciesScreen from './src/screens/ListPharmaciesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={HomeScreen} />
        <Stack.Screen name="Les pharmacies" component={PharmaciesScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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