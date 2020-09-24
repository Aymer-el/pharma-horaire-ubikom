import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CardPharmacie from './CardPharmacie'

const styles = StyleSheet.create({
  container: {
   paddingRight: 10
  }
});

const ListPharmacie = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({item, index}) => {
          return <CardPharmacie {...item} keyExtractor={item.name}></CardPharmacie>
        }
      }
      />
    </View>
  );
}

export default ListPharmacie;
