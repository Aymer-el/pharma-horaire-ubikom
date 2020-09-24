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
              <Text style={styles.title}>{props.name}</Text>
              <Text style={styles.address}>{props.address}</Text>
            </View>
            <ButtonLoad text={'plus d\'info'} source={require('../assets/pharmacie-logo.png')} style={styles.image}></ButtonLoad>
        </View>
        <View style={styles.horaire}>
         {props.ouverture.map((dayWithHours, index) => {
            const [day] = Object.keys(dayWithHours)
            const hours = dayWithHours[day]
            return <Horaire day={day} hours={hours} key={props.nam + day + index}></Horaire>
         })}
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
    height: 400,
    flex: 1,
  },
  pharmacie: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 25
  },
  name: {
    width: '67%'
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
    borderBottomColor: 'white',
    marginTop: 15,
    borderBottomWidth: 1,
  }
});

export default CardPharmacie;