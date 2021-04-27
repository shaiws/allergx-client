// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, Image, StyleSheet, View, FlatList } from 'react-native';
// import { SearchBar } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import { Divider } from 'react-native-paper';


const Search = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);


  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
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
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource([]);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View style={{ alignItems: "flex-end", flex: 1 }}>
        <Text style={styles.itemStyle} onPress={() => getItem(item)}>
          {'שם המוצר: '}
          {item.name}
          {'\n'}
          {'ברקוד: '}
          {item.id}
        </Text>
        <Image
          style={{ width: 40, height: 40 }}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <Divider />
    );
  };


  const getItem = async (item) => {
    // Function for click on an item
    try {
      const response = await fetch(`http://192.168.1.230:5000/barcode?code=${item.id}`);
      let allergens = await response.text()
      if (allergens != "Not Available")
        allergens = JSON.parse(allergens)
      navigation.navigate("Product", { prodName: item.name, prodCode: item.id, prodAllergens: allergens })
    }
    catch (error) {
      alert("Check your internet connection");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
        <Searchbar
          round
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
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
    padding: 10,
  },
});

export default Search;
