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

  const data = [
    {
      "LINKS": "https://lematin.ma/pharmacie/casablanca/ain-chock/al-kindi.html",
      "Nom": "Pharmacie AL KINDI",
      "Tel": " 0522.50.72.57",
      "Adresse": "LOTISSEMENT HAFDIA, RUE 1 N° 48 - LES CRETES - AIN CHOCK (AVENUE 2 MARS - FACE LAMCALLA)",
      "Quartier": "Aïn Chock",
      "Ville": "Casablanca",
      "DSemain": "2020-09-21",
      "GNuit": true,
      "GJour": true,
      "G24h24h": true,
      "Fsemaine": "2020-09-27"
    },
    {
     "LINKS": "https://lematin.ma/pharmacie/casablanca/ain-chock/dakhla.html",
     "Nom": "Pharmacie DAKHLA",
     "Tel": " 0522.50.10.82",
     "Adresse": "HAY EL INARA I AV. DAKHLA N°91",
     "Quartier": "Aïn Chock",
     "Ville": "Casablanca",
     "DSemain": "2020-09-21",
     "GNuit": true,
      "GJour": false,
      "G24h24h": false,
     "Fsemaine": "2020-09-27"
    },
    {
     "LINKS": "https://lematin.ma/pharmacie/casablanca/ain-chock/yasmina.html",
     "Nom": "Pharmacie YASMINA",
     "Tel": " 0522.21.95.37",
     "Adresse": "RUE 232 N°69 HAY MOULAY ABDELLAH - (YASMINA) - AIN CHOCK",
     "Quartier": "Aïn Chock",
     "Ville": "Casablanca",
     "DSemain": "2020-09-21",
     "GNuit": false,
      "GJour": true,
      "G24h24h": false,
     "Fsemaine": "2020-09-27"
    },
   ]
  