import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';



function Scanner({ route, navigation }) {
    const [isBarcodeRead, setBarcodeRead] = useState(false);

    async function onBarCodeRead(e) {
        if (!isBarcodeRead) {
            setBarcodeRead(true);
            console.log("Scanner");
            try {
                console.log(`http://api.imri.ga/items/${e.data}`);
                const product = await fetch(`http://api.imri.ga/items/${e.data}`);
                const prodName = await product.json();
                console.log(prodName.name);
                const response = await fetch(`http://192.168.1.230:5000/barcode?code=${e.data}`);
                let allergens = await response.text()
                if (allergens != "Not Available")
                    allergens = JSON.parse(allergens)
                navigation.navigate("Product", { prodName: prodName.name, prodCode: e.data, prodAllergens: allergens })
                // alert(`שם המוצר: ${prodName.name}\nברקוד: ${e.data}.\nאלרגנים: ${allergens}`);
            }
            catch (error) {
                console.log(error);
                alert("Check your internet connection");
            }
        }
    }
    return (
        <View style={styles.container}>
            <RNCamera
                style={styles.preview}
                onBarCodeRead={onBarCodeRead}
                captureAudio={false}
            >
                <Text
                    style={styles.text}>
                    סריקת מוצר
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
