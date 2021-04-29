import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
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
                const response = await fetch(`http://296503a35747.ngrok.io/barcode?code=${e.data}`);
                setPercentages(percentages + 0.25)
                let allergens = await response.text()
                if (allergens != "Not Available") {
                    allergens = JSON.parse(allergens)
                    setPercentages(percentages + 0.25)
                }
                navigation.navigate("Product", { prodName: prodName.name, prodCode: e.data, prodAllergens: allergens })
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
