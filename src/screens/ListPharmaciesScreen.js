import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import ListPharmacies from "../components/ListPharmacies";

export default function ListPharmaciesScreen(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.80:3800/pharmacies')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
    console.log(data)
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