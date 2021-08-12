import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, View, Text, StatusBar, FlatList, Modal, Pressable, ActivityIndicator } from 'react-native';
import { Divider, Searchbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCardWithImageAndTitle from '../Components/MaterialCardWithImageAndTitle'
import { FAB } from 'react-native-paper';
import CheckboxList from 'rn-checkbox-list';



const Search = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [allergensList, setAllergensList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const searchFilterFunction = async (text) => {
    // Check if searched text is not blank
    if (text && text.length >= 3) {
      // Update FilteredDataSource
      fetch(`https://allergens-api.herokuapp.com/item?name=${text}`)
        .then(response => response.json())
        .then(data => { setFilteredDataSource(data); getAllergenesList(data) })
        .catch(function () {
          alert("אירעה שגיאה");
        });
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with empty
      setFilteredDataSource([]);
      setSearch(text);
    }
  };
  const getAllergenesList = async (data) => {
    let tempList = [];
    let counter = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].allergens.length > 0)
        for (let j = 0; j < data[i].allergens.length; j++)
          if (!tempList.find(obj => obj.name === data[i].allergens[j])) {
            tempList.push({ "id": counter, "name": data[i].allergens[j] });
            counter++;
          }
      if (data[i].maycontain.length > 0)
        for (let j = 0; j < data[i].maycontain.length; j++)
          if (!tempList.find(obj => obj.name === data[i].maycontain[j])) {
            tempList.push({ "id": counter, "name": data[i].maycontain[j] });
            counter++;
          }
    }
    console.log(tempList.sort((a, b) => a.name.localeCompare(b.name)));
    setAllergensList(tempList.sort((a, b) => a.name.localeCompare(b.name)));
  }
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
      await navigation.navigate("Product", { prodName: item.name, prodCode: item.barcode, prodAllergens: item.allergens, prodMayContain: item.maycontain, prodImage: item.image, favorites: favorite })
    }
    catch (error) {
      alert("אירעה שגיאה");
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
      <StatusBar barStyle="light-content" hidden={true} backgroundColor="lightblue" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Searchbar
            style={{
              width: '60%', borderRadius: 80, margin: 10, flexDirection: 'row', justifyContent: 'center'
            }}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction('')}
            placeholder="חיפוש מוצר..."
            value={search}
          />
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>סינון</Text>
          </Pressable>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <CheckboxList
                  headerName="סינון"
                  theme="red"
                  listItems={allergensList}
                  onChange={({ ids, items }) => console.log('My updated list :: ', ids)}
                  listItemStyle={{ borderBottomColor: '#eee', borderBottomWidth: 1 }}
                  checkboxProp={{ boxType: 'square' }} // iOS (supported from v0.3.0)
                  onLoading={() => <ActivityIndicator />}
                />
              </View>
            </View>
          </Modal>

        </View>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
          renderItem={ItemView}
        />

        <FAB
          style={styles.fab}
          icon="barcode"
          label="סריקת מוצר"
          color="black"
          onPress={() => navigation.navigate("Scanner")}
        />

      </View >
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '0%',
    backgroundColor: 'white',

  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10
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
    bottom: 0,
    backgroundColor: 'white'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    //marginTop: 22
  },
  modalView: {
    flex: 1,
    margin: 35,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 80,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 80,
    padding: 10,
    width: '20%',
    elevation: 2,
    shadowColor: "gray",
  },
  buttonOpen: {
    backgroundColor: "white",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Search;
