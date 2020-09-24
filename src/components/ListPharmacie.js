import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CardPharmacie from './CardPharmacie'

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({item}) => <CardPharmacie style={styles.item} {...item} key={item}></CardPharmacie>}
      />
    </View>
  );
}

export default FlatListBasics;
