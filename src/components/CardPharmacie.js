import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonLoad from './ButtonLoad'
import Horaire from './Horaire';

function CardPharmacie(props) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.pharmacie}>
            <View style={styles.name}>
              <Text style={styles.title}>{props.Nom}</Text>
              <Text style={styles.address}>Quartier: {props.Quartier}</Text>
              <Text style={styles.address}>{props.Adresse}</Text>
              <Text style={styles.address}>{props.Tel}</Text>
            </View>
        <ButtonLoad text={'plus d\'info'} source={require('../assets/pharmacie-logo.png')} style={styles.image}></ButtonLoad>
        </View>
        <View style={styles.pharmacie}>
          <Horaire garde={'Garde de Jour'} isGarde={props.GNuit}></Horaire>
          <Horaire garde={'Garde de Nuit'} isGarde={props.GJour}></Horaire>
          <Horaire garde={'Garde 24h/24h'} isGarde={props.G24h24h}></Horaire>
        </View>
        <View
          style={styles.separationLine}
        />
      </View>
    </TouchableOpacity>
  ); 
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    flex: 1,
  },
  pharmacie: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 25
  },
  name: {
    width: '80%'
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#cd7c9e'
  },
  horaire: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  separationLine: {
    borderBottomColor: '#cd7c9e',
    marginTop: 15,
    borderBottomWidth: 1,
  }
});

export default CardPharmacie;

/* <View style={styles.horaire}>
         {props.ouverture.map((dayWithHours, index) => {
            const [day] = Object.keys(dayWithHours)
            const hours = dayWithHours[day]
            return <Horaire day={day} hours={hours} key={props.nam + day + index}></Horaire>
         })}
        </View>*/