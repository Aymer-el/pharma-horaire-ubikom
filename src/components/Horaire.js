import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function HoraireComponent(props) {
  return (
      <View style={styles.container}>
            <Text style={styles.day}>{props.day}</Text>
            {props.hours.map((hour) => {
                return <Text style={styles.name}>{hour}</Text>
            })}
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
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

export default HoraireComponent;