import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

function ButtonLoad(props) {
  return (
    <TouchableOpacity style={styles.container}>
            {props.children}    
    </TouchableOpacity>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center"
  }
});

export default ButtonLoad;