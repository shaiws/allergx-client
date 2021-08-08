import React from 'react';
import { StyleSheet } from 'react-native';
import MaterialCard from '../Components/MaterialCard';


function Product({ route, navigation }) {
    const { prodName, prodCode, prodAllergens, prodMayContain, prodImage, favorites } = route.params;
    const product = {
        name: prodName,
        barcode: prodCode,
        image: prodImage,
        allergens: prodAllergens,
        maycontain: prodMayContain
    }

    return (
        <MaterialCard
            nav={navigation}
            name={prodName}
            code={prodCode}
            favorite={favorites}
            allergens={prodAllergens.sort()}
            maycontain={prodMayContain.sort()}
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