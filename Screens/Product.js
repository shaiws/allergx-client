import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import MaterialCard from '../Components/MaterialCard';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Product({ route, navigation }) {
    const { prodName, prodCode, prodAllergens, prodImage, favorites } = route.params;
    const product = {
        name: prodName,
        barcode: prodCode,
        image: prodImage,
        allergens: prodAllergens
    }
    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@favorites', jsonValue)
        } catch (e) {
            console.log(e);
        }
    }
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favorites')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <MaterialCard name={prodName} code={prodCode} favorite={favorites} allergens={(prodAllergens.sort())} image={prodImage} style={styles.materialCard} />
    )
}

export default Product;

const styles = StyleSheet.create({
    materialCard: {
        height: '90%',
        margin: 20
    }
});