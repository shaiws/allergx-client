import React from 'react';
import { StyleSheet } from 'react-native';
import MaterialCard from '../Components/MaterialCard';


function Product({ route, navigation }) {
    const { prodName, prodCode, prodAllergens, prodImage, favorites } = route.params;
    const product = {
        name: prodName,
        barcode: prodCode,
        image: prodImage,
        allergens: prodAllergens
    }

    return (
        <MaterialCard
            nav={navigation}
            name={prodName}
            code={prodCode}
            favorite={favorites}
            allergens={(prodAllergens.sort())}
            image={prodImage}
            style={styles.materialCard}
        />
    )
}

export default Product;

const styles = StyleSheet.create({
    materialCard: {
        height: '90%',
        margin: 20,

    }
});