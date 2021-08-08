import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAB } from 'react-native-paper';

import { ProgressBar, Colors } from 'react-native-paper';

function Scanner({ route, navigation }) {
    const [isBarcodeRead, setBarcodeRead] = useState(false);
    const [percentages, setPercentages] = useState(0)

    async function onBarCodeRead(e) {
        if (!isBarcodeRead) {
            setPercentages(0)
            setBarcodeRead(true);
            try {
                const product = await fetch(`https://allergens-api.herokuapp.com/barcode?code=${e.data}`);
                setPercentages(percentages + 0.25)
                const prodJson = await product.json();
                setPercentages(percentages + 0.25)
                if (prodJson != -1) {
                    const allergens = await prodJson[0]['allergens']
                    const maycontain = await prodJson[0]['maycontain']
                    setPercentages(percentages + 0.25)
                    const favorite = await isFavorite(e.data);
                    navigation.navigate("Product", { prodName: prodJson[0]['name'], prodCode: e.data, prodAllergens: allergens, prodMayContain: maycontain, prodImage: prodJson[0]['image'], favorites: favorite });
                    setBarcodeRead(false);
                    setPercentages(0);
                }
                else {
                    Alert.alert(
                        "המוצר אינו נמצא",
                        "המוצר לא נמצא במאגר המידע שלנו כרגע.\nאנחנו עובדים על זה.",
                        [
                            {
                                text: "אישור",
                                onPress: () => {
                                    setBarcodeRead(false);
                                    setPercentages(0);
                                },
                                style: "cancel"
                            }
                        ]
                    )
                }
            }
            catch (error) {
                setPercentages(0)
                alert("אירעה שגיאה");
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
            </RNCamera>
            <FAB
                style={styles.fab}
                icon="arrow-left"
                label="חזור"
                color="black"
                onPress={() => navigation.goBack(null)}
            />
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
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'white'
    },
});
