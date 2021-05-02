import React, { useState } from 'react';
import { I18nManager, SafeAreaView, TouchableOpacity, StyleSheet, View, FlatList } from 'react-native';
import { IconButton, Colors, Divider, Searchbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCardWithImageAndTitle from '../Components/MaterialCardWithImageAndTitle'
import { FAB } from 'react-native-paper';


const Search = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Update FilteredDataSource
      fetch(`http://api.imri.ga/items?name=${text}`)
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
          image='https://reactnative.dev/img/tiny_logo.png'
          prodName={item.name}
          prodCode={item.id} />
      </TouchableOpacity>
    );
  };

  const getItem = async (item) => {
    // Function for click on an item
    try {
      const response = await fetch(`http://cea2b36c994b.ngrok.io/barcode?code=${item.id}`);
      let allergens = await response.text()
      if (allergens != "Not Available")
        allergens = JSON.parse(allergens)
      console.log(allergens);
      const favorite = await isFavorite(item.id);
      await navigation.navigate("Product", { prodName: item.name, prodCode: item.id, prodAllergens: allergens.slice(0, allergens.length - 1), prodImage: allergens[allergens.length - 1], favorites: favorite })
    }
    catch (error) {
      console.log(error);
      alert("Check your internet connection");
    }
  };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favorites')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
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

          style={{ borderRadius: 80, margin: 10 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="חיפוש..."
          value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          //ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
        <FAB
          style={styles.fab}
          icon="barcode"
          color={Colors.grey300}
          onPress={() => navigation.navigate("Scanner")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemStyle: {
    flex: 1,
    padding: 10,
  },
  materialCardWithImageAndTitle: {
    margin: 10,

  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  },
});

export default Search;
