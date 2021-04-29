import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { IconButton, Colors, Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ItemSeparatorView = () => {
    return (
        // Flat List Item Separator
        <Divider />
    );
};


const ItemView = ({ item }) => {
    console.log(item);
    return (
        // Flat List Item
        <View style={{ alignItems: "flex-end", flex: 1 }}>
            <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                {'שם המוצר: '}
                {item.name}
                {'\n'}
                {'ברקוד: '}
                {item.barcode}
                {'\n'}
                {'אלרגנים: '}
                {item.allergens}
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


const getItem = async (item) => {
    // Function for click on an item
    try {
        const response = await fetch(`http://296503a35747.ngrok.io/barcode?code=${item.id}`);
        let allergens = await response.text()
        if (allergens != "Not Available")
            allergens = JSON.parse(allergens)
        navigation.navigate("Product", { prodName: item.name, prodCode: item.barcode, prodAllergens: allergens })
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
        console.log(e);
        // error reading value
    }
}


function Favorites({ route, navigation }) {
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [loaded, setLoaded] = useState(false);
    if (!loaded) {
        console.log("Loading");
        getData().then((data) => { setFilteredDataSource((Array(data))); });
        setLoaded(true);
    }
    const clearAll = async () => {
        try {
            await AsyncStorage.clear()
            setFilteredDataSource([])
        } catch (e) {
            // clear error
        }

        console.log('Done.')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <IconButton
                    icon={"delete"}
                    onPress={() => clearAll()}
                />
                <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemStyle: {
        flex: 1,
        padding: 10,
    },
});
export default Favorites;
