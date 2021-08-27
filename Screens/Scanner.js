import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, SafeAreaView } from 'react-native';
import { RNCamera } from 'react-native-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAB } from 'react-native-paper';

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
                    navigation.navigate("Product", { prodName: prodJson[0]['name'], prodCode: e.data, prodAllergens: allergens, prodMayContain: maycontain, prodImage: prodJson[0]['image'] });
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
        <SafeAreaView style={{ flex: 1, backgroundColor: "lightblue" }}>

            <View style={styles.container}>
                <View style={styles.header} >
                    <Text>יש לסרוק את הברקוד המופיע על גבי המוצר</Text>
                </View>
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
        </SafeAreaView>
    );

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
    }, header: {
        height: 80,
        width: '100%',
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
});
