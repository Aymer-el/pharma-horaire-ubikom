import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Horaire(props) {
  return (
      <View style={styles.container}>
            <Text style={styles.day}>{props.day}</Text>
            {props.hours.map((hour) => {
                return <Text style={styles.name} key={props.day+hour}>{hour}</Text>
            })}
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    alignItems: "center",
    minWidth: 100,
    maxWidth: 100,
    backgroundColor: 'white'
  },
  day: {
    fontWeight: 'bold'
  }
});

export default Horaire;