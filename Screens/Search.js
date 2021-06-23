import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, View, FlatList } from 'react-native';
import { Divider, Searchbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCardWithImageAndTitle from '../Components/MaterialCardWithImageAndTitle'
import { FAB } from 'react-native-paper';


const Search = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const searchFilterFunction = async (text) => {
    // Check if searched text is not blank
    if (text) {
      // Update FilteredDataSource
      fetch(`https://allergens-api.herokuapp.com/item?name=${text}`)
        .then(response => response.json())
        .then(data => { setFilteredDataSource(data) })
        .catch(function () {
          alert("Check your internet connection");
        });
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with empty
      setFilteredDataSource([]);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => getItem(item)}>
        <MaterialCardWithImageAndTitle
          style={styles.materialCardWithImageAndTitle}
          image={item.image}
          prodName={item.name}
          // prodAllergens={item.allergens}
          prodCode={item.barcode} />
      </TouchableOpacity>
    );
  };

  const getItem = async (item) => {
    // Function for click on an item
    try {
      const favorite = await isFavorite(item.id);
      await navigation.navigate("Product", { prodName: item.name, prodCode: item.barcode, prodAllergens: item.allergens, prodImage: item.image, favorites: favorite })
    }
    catch (error) {
      alert("Check your internet connection");
    }
  };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favorites')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  }
  const isFavorite = async (barcode) => {
    const storage = await getData();
    if (storage) {
      const toReturn = storage[barcode] != undefined;
      return toReturn;
    }
    return false;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Searchbar

          style={{
            borderRadius: 80, margin: 10, flexDirection: 'row', justifyContent: 'center', direction: 'row',
          }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="חיפוש..."
          value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
          renderItem={ItemView}
        />
        <FAB
          style={styles.fab}
          icon="barcode"
          color="black"
          onPress={() => navigation.navigate("Scanner")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
    backgroundColor: 'white',
  },
  itemStyle: {
    flex: 1,
    padding: 10,
  },
  materialCardWithImageAndTitle: {
    margin: 10,
    //borderRadius: 50

  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'white'
  },
});

export default Search;
