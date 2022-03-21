import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';


const Item = ({item: {produit, fabricant}}) => {
  return <View style={{flexDirection:"row"}}>
    <Text style={{fontWeight: "bold"}}>Produit </Text>
    <Text> {produit}</Text>
    <Text style={{fontWeight: "bold", paddingHorizontal: 10}}>Fabricant</Text>
    <Text>{fabricant}</Text>
  </View>
}
export default function App() {
  const [items, setItems] = useState([]);

  const fetchMore = () => {
    // const url = "https://amazon-lionel.herokuapp.com?nb=500";
    const url = "https://amazon-lionel.herokuapp.com";
    
    fetch(`${url}`)
      .then(resp=> resp.json())
      .then(newItems => {
        setItems(items.concat(newItems))
      })
    
      console.log(items.length)
  }
  const Item = ({ fabricant, produit }) => (
    <View style={styles.container}>
      <Text >{fabricant} {produit}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item fabricant={item.fabricant} produit={item.produit} />
  );

  return (
    <View style={styles.container}>
        <Button title="PLUUUS" onPress={fetchMore}/>
        {/* <ScrollView style={styles.viewContainer}>
          {items.map( (item, index) => <Item item={item} key={index}/>)}
        </ScrollView> */}
        {items.length == 0 && <Text>Bonjour, cette aplication affiche des produits amazon quand vous presser le button</Text>}
        <FlatList style={styles.viewContainer} data={items} renderItem={renderItem} keyExtractor={item => item.id}>
        </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
});
