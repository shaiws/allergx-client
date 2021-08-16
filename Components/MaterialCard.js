import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import AllergensView from './AllergensView';

formatRow = (data, numColumns, isAllergens) => {
  if (data.length == 0 && isAllergens) {
    data.push("לא ידוע על אלרגנים למוצר זה. יש לבדוק על גבי האריזה");
  }
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push(null);
    numberOfElementsLastRow++;
  }
  return data;
}

function MaterialCard(props) {
  const isVisable = props.maycontain.length == 0;

  return (
    <View style={[styles.container, props.style]}>
      <Image source={{ uri: props.image }} style={styles.cardItemImagePlace} />
      <View style={styles.bodyContent}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.titleStyle}>{props.name}</Text>
        </View>
        <Text style={styles.subtitleStyle}>{props.code}</Text>
      </View>
      <View style={[styles.allergensContainer, { flex: 2 }]}>
        <Text style={{
          fontSize: 18,
          color: "#000",
          fontWeight: 'bold',
          alignSelf: 'flex-start',
          writingDirection: 'rtl',
        }}>{`אלרגנים: (${props.allergens.length})`}</Text>
        <FlatList
          style={styles.list}
          numColumns={4}
          data={formatRow(props.allergens, 4, true)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <AllergensView prod={item} key={index.toString()} />}
        />
      </View>
      {!isVisable && <View style={[styles.allergensContainer, { flex: 2 }]}>
        <Text
          style={{
            fontSize: 18,
            color: "#000",
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            writingDirection: 'rtl',
          }}>{`עלול להכיל: (${props.maycontain.length})`}</Text>
        <FlatList
          style={[styles.list]}
          numColumns={4}
          data={formatRow(props.maycontain, 4, false)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <AllergensView prod={item} key={index.toString()} />}
        />
      </View>}
      <ScrollView style={styles.warning}>
        <Text style={{ writingDirection: 'rtl' }}>
          {'הנתונים המדויקים מופיעים על גבי המוצר. אין להסתמך על הפירוט המופיע באפליקציה. יתכנו טעויות או אי התאמות. יש לקרוא את המופיע על גבי אריזת המוצר לפני השימוש.'}
        </Text>
      </ScrollView>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    borderColor: 'lightblue',
    flexWrap: 'nowrap',
    backgroundColor: 'white',
    shadowColor: 'lightblue',
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: 'hidden',
  },
  cardItemImagePlace: {
    backgroundColor: 'white',
    padding: '5%',
    margin: 5,
    resizeMode: 'contain',
    flex: 1,
  },
  bodyContent: {
    flex: 1,
    padding: 16,
    maxHeight: 70,
    paddingTop: -16,
    paddingBottom: -16,
  },
  titleStyle: {
    flex: 10,
    alignSelf: 'flex-start',
    writingDirection: 'rtl',
    fontSize: 20,
    color: 'black',
  },
  subtitleStyle: {
    fontSize: 14,
    opacity: 0.5,
    alignSelf: 'flex-start',
    writingDirection: 'rtl',
    flex: 1
  },
  allergensContainer: {
    padding: 16,
    paddingTop: -16,
    alignSelf: 'stretch'
  },
  list: {
    flex: 3
  },
  warning: {
    flex: 1,
    padding: 0,
    margin: 5,
    height: 80,
    width: '100%',
    alignSelf: 'flex-start',
    bottom: 0
  }
});

export default MaterialCard;