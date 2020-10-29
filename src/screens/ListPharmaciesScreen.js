import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import ListPharmacies from "../components/ListPharmacies";

export default function ListPharmaciesScreen({route}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { latitude, longitude } = route.params;

  // http://192.168.1.80:3800
  useEffect(() => {
    fetch(`http://ubikomhellopharma.westeurope.azurecontainer.io:3800/closest-pharmacie?lat=${latitude}&long=${longitude}`)
      .then((response) => response.json())
      .then((json) => setData([json]))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
    return (
      <View style={styles.container} >
          <ListPharmacies data={data}></ListPharmacies>
      </View>
    );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 2,
  },
  content: {
    flex: 9,
  },
  footer: {
    flex: 1
  },
  image: {
    width: 40,
    height: 40
  },
});