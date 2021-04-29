import React from 'react';
import { Text, View, Image } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Product({ route, navigation }) {
    const { prodName, prodCode, prodAllergens } = route.params;
    const product = {
        name: prodName,
        barcode: prodCode,
        allergens: prodAllergens
    }
    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@favorites', jsonValue)
            getData().then((data) => { alert(JSON.stringify(data)); })
        } catch (e) {
            console.log(e);
            // saving error
        }
    }
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favorites')
            console.log(JSON.parse(jsonValue));
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log(e);
            // error reading value
        }
    }

    const isFavorite = () => {
        return true;
    }
    return (
        <View style={{ alignItems: "flex-end", flex: 1 }}>
            <Text>{prodName}</Text>
            <Text>{prodCode}</Text>
            <Text>{prodAllergens.toString()}</Text>
            <IconButton
                icon={isFavorite(prodCode) % 2 == 0 ? "star-outline" : "star"}
                color={Colors.red500}
                onPress={() => storeData(product)}
            />
            <Image
                onPress={() => alert(getData())}
                style={{ width: 40, height: 40 }}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
        </View>
    )
}

export default Product;
