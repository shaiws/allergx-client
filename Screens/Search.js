import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, View, Text, StatusBar, FlatList, Modal, Pressable, ActivityIndicator } from 'react-native';
import { Divider, Searchbar } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { BarIndicator } from 'react-native-indicators';

import MaterialCardWithImageAndTitle from '../Components/MaterialCardWithImageAndTitle'
import CheckBoxList from '../Components/CheckBoxList'

const Search = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [allergensList, setAllergensList] = useState([]);
  const [selectedFiltes, setSelectedFiltes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts();
  }, []);

  const searchFilterFunction = async (text) => {
    setLoading(true);
    if (text.length > 0)
      fetch(`https://allergens-api.herokuapp.com/item?name=${text}`)
        .then(response => response.json())
        .then(data => { setSearchResults(data); getAllergenesList(data) })
        .catch(function (e) {
          alert("אירעה שגיאה");
        });
    else
      getAllProducts();
    setSearch(text);
  };

  const getAllProducts = async () => {
    fetch(`https://allergens-api.herokuapp.com/getAllProducts`)
      .then(response => response.json())
      .then(data => { setSearchResults(data); getAllergenesList(data) })
      .catch(function (e) {
        alert("אירעה שגיאה");
      });
    setLoading(true);
  }

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

    setAllergensList(tempList.sort((a, b) => a.name.localeCompare(b.name)));
    setLoading(false);
  }
  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => getItem(item)}>
        <MaterialCardWithImageAndTitle
          style={styles.materialCardWithImageAndTitle}
          image={item.image}
          prodName={item.name}
          prodCode={item.barcode} />
      </TouchableOpacity>
    );
  };

  const getItem = async (item) => {
    try {
      let allInfo = [...item.allergens, ...item.additional_info];
      await navigation.navigate("Product", { prodName: item.name, prodCode: item.barcode, prodAllergens: allInfo, prodMayContain: item.maycontain, prodImage: item.image })
    }
    catch (error) {
      alert("אירעה שגיאה");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="lightblue" />
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
            onPress={() => {
              if (allergensList.length > 0)
                setModalVisible(true)
              else
                alert("לא קיימים אלרגנים בחיפש זה")
            }}
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
                {/* <CheckBoxList list={allergensList} /> */}
                <Text>בקרוב...</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.textStyle}>אישור</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

        </View>
        {
          !loading ? <FlatList
            data={searchResults}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
            renderItem={ItemView}
          /> :
            <View style={{
              position: 'absolute',
              top: 0, left: 0,
              right: 0, bottom: 0,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <BarIndicator animating={true} count={5} size={30} />
            </View>
        }

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
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
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
    bottom:20,
    backgroundColor: 'white'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
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
  buttonClose: {
    backgroundColor: "#2196F3",
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    margin: 5

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
