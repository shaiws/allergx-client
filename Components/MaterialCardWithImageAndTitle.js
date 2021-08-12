import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function MaterialCardWithImageAndTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <Image
          source={{ uri: props.image }}
          style={styles.cardItemImagePlace}
        ></Image>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>{props.prodName}</Text>
          <Text style={styles.subtitleStyle}>{props.prodCode}</Text>

        </View>

      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    flexWrap: 'nowrap',
    backgroundColor: '#FFF',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyContent: {
    padding: 16,
    flex: 1,
  },
  titleStyle: {
    writingDirection: 'rtl',
    fontSize: 24,
    flex: 1,
    color: 'black',
    paddingBottom: 12,
    alignSelf: 'flex-start',
  },
  subtitleStyle: {
    fontSize: 14,
    flex: 1,
    color: 'gray',
    lineHeight: 16,
    alignSelf: 'flex-start',
    writingDirection: 'rtl',

  },
  cardItemImagePlace: {
    padding: '10%',
    margin: 16,
    resizeMode: 'contain',

    //borderRadius: 20,
  },
});

export default MaterialCardWithImageAndTitle;