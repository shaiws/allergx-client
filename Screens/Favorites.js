import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { IconButton, Colors, Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCardWithImageAndTitle from '../Components/MaterialCardWithImageAndTitle'


const ItemView = ({ item }) => {
    return (
        <MaterialCardWithImageAndTitle
            style={styles.materialCardWithImageAndTitle}
            image='https://reactnative.dev/img/tiny_logo.png'
            prodName={item.prodName}
            prodAllergens={item.allergens} />
    );
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
        getData().then((data) => { data != null ? setFilteredDataSource((Array(data))) : [] });
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
