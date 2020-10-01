import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Horaire(props) {
  console.log(props)
  const isGarde = props.isGarde ? <Text style={styles.isGarde}> OUI </Text>: <Text> NON </Text>
  return (
      <View style={styles.container}>
        <Text style={styles.isGarde}>{props.garde}</Text>
        <View style={styles.isGarde}>
          {isGarde}
        </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignItems: "center",
    backgroundColor:'green',
    paddingTop: 15,
    height: 75

  },
  isGarde: {
    backgroundColor:'green',
    color: 'white',
    paddingTop: 5
  }
});

export default Horaire;