import React from 'react';
import { Text, Image,View, StyleSheet } from 'react-native';

function ButtonLoadComponenent(props) {
  return (
      <View style={styles.container}>
            <Image source={require('../assets/pharmacie-logo.png')}
            style={styles.image}
            />
            <Text style={styles.name}>{props.text}</Text>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  },
  image: {
    width: 40,
    height: 40
  },
  name: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default ButtonLoadComponenent;