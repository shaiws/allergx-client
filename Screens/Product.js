import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialCard from '../Components/MaterialCard';


function Product({ route, navigation }) {
    const { prodName, prodCode, prodAllergens, prodMayContain, prodImage } = route.params;
    const product = {
        name: prodName,
        barcode: prodCode,
        image: prodImage,
        allergens: prodAllergens,
        maycontain: prodMayContain
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
            <MaterialCard
                nav={navigation}
                name={prodName}
                code={prodCode}
                allergens={prodAllergens.sort()}
                maycontain={prodMayContain.sort()}
                image={prodImage}
                style={styles.materialCard}
            />
        </View>
    )
}

export default Product;

const styles = StyleSheet.create({
    materialCard: {
        height: '90%',
        margin: 20,

    }
});