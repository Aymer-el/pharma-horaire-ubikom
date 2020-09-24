import React from 'react';
import { Text, Image,View, StyleSheet, TouchableOpacity } from 'react-native';

function ButtonLoad(props) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
            <Image source={require('../assets/pharmacie-logo.png')}
            style={styles.image}
            />
            <Text style={styles.name}>{props.text}</Text>
    </View>
    </TouchableOpacity>
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

export default ButtonLoad;