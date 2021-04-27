import React from 'react';
import { Text, View, Image } from 'react-native';

function Product({ route, navigation }) {
    const { prodName, prodCode, prodAllergens } = route.params;
    return (
        <View style={{ alignItems: "flex-end", flex: 1 }}>
            <Text>{prodName}</Text>
            <Text>{prodCode}</Text>
            <Text>{prodAllergens.toString()}</Text>
            <Image
                style={{ width: 40, height: 40 }}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
        </View>
    )
}

export default Product;
