import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';

function MaterialCard(props) {
  console.log(props);
  const [favorite, setFavorite] = React.useState(props.favorite);
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={{ uri: props.image }}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.bodyContent}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <TouchableOpacity style={styles.actionButton1} onPress={async () => {
            try {
              const prod = {};
              prod[props.code] = { "prodName": props.name, "prodAllergens": props.allergens }
              const jsonValue = JSON.stringify(prod);
              await AsyncStorage.setItem('@favorites', jsonValue);
              console.log(JSON.parse(jsonValue));
              setFavorite(!favorite)
            } catch (e) {
              console.log(e);
              // saving error
            }
          }}>
            <Icon name={favorite ? "star" : "star-outline"} style={styles.iconStyle}></Icon>
          </TouchableOpacity>
          <Text style={styles.titleStyle}>{props.name}</Text>
        </View>
        <Text style={styles.subtitleStyle}>{props.code}</Text>
      </View>
      <View style={styles.actionBody}>


      </View>
      <View style={styles.body}>
        <Text style={{
          fontSize: 18,
          color: "#000",
          fontWeight: 'bold',
        }}
        >{"אלרגנים:"}</Text>
        <FlatList
          data={props.allergens}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
      </View>
    </View >
  );
}


const ItemView = ({ item }) => {
  return (
    <Text style={styles.bodyText}>
      {item}
    </Text>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    minHeight: 210,
    flex: 1
  },
  bodyContent: {
    flex: 1,
    padding: 16,
    paddingTop: 24,
    justifyContent: "center"
  },
  titleStyle: {
    flex: 1,
    fontSize: 24,
    color: "#000",
    paddingBottom: 12,
  },
  subtitleStyle: {
    alignSelf: 'flex-end',
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  actionButton1: {
    padding: 8,
    height: 36
  },
  actionText1: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  iconStyle: {
    fontSize: 24,
    color: "#000",
    opacity: 0.7
  },
  body: {
    flex: 1,
    padding: 16,
    paddingTop: 8
  },
  bodyText: {
    lineHeight: 20,
    fontSize: 14,
    color: "#424242"
  }
});

export default MaterialCard;
