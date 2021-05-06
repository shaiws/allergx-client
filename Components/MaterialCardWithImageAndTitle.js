import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

function MaterialCardWithImageAndTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>{props.prodName}</Text>
          <Text style={styles.subtitleStyle}>{props.prodCode}</Text>

        </View>
        <Image
          source={{ uri: props.image }}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    borderColor: '#CCC',
    flexWrap: 'nowrap',
    backgroundColor: '#FFF',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyContent: {
    // padding: 16,
    // paddingTop: 24,
    flex: 1,
  },
  titleStyle: {
    fontSize: 24,
    color: '#000',
    paddingBottom: 12,
    alignSelf: 'flex-end',
  },
  subtitleStyle: {
    fontSize: 14,
    color: '#000',
    lineHeight: 16,
    opacity: 0.5,
    alignSelf: 'flex-end',
  },
  cardItemImagePlace: {
    backgroundColor: '#ccc',
    height: 80,
    width: 80,
    margin: 16,
    borderRadius: 20,
  },
});

export default MaterialCardWithImageAndTitle;