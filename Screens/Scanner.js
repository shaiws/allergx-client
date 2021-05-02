import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ProgressBar, Colors } from 'react-native-paper';

function Scanner({ route, navigation }) {
    const [isBarcodeRead, setBarcodeRead] = useState(false);
    const [percentages, setPercentages] = useState(0)

    async function onBarCodeRead(e) {
        if (!isBarcodeRead) {
            setPercentages(0)
            setBarcodeRead(true);
            try {
                const product = await fetch(`http://api.imri.ga/items/${e.data}`);
                setPercentages(percentages + 0.25)
                const prodName = await product.json();
                setPercentages(percentages + 0.25)
                const response = await fetch(`https://allergens-api.herokuapp.com/barcode?code=${e.data}`);
                setPercentages(percentages + 0.25)
                let allergens = await response.text()
                if (allergens != "Not Available") {
                    allergens = JSON.parse(allergens)
                    setPercentages(percentages + 0.25)
                }
                const favorite = await isFavorite(e.data);
                navigation.navigate("Product", { prodName: prodName.name, prodCode: e.data, prodAllergens: allergens.slice(0, allergens.length - 1), prodImage: allergens[allergens.length - 1], favorites: favorite })
            }
            catch (error) {
                console.log(error);
                setPercentages(0)
                alert("Check your internet connection");
            }
        }
    }
    return (
        <View style={styles.container}>
            <ProgressBar progress={percentages} color={Colors.green} />
            <RNCamera
                style={styles.preview}
                onBarCodeRead={onBarCodeRead}
                captureAudio={false}
            >
                <Text
                    style={styles.text}>
                    {"סריקת מוצר"}
                </Text>
            </RNCamera>
        </View >
    );

}
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
export default Scanner
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    preview: {
        flex: 3,
    },
    text: {
        textAlign: "center",
        flex: 1
    }
});
