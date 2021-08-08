import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import ItemView from './ItemView';

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
        }}>{props.allergens.length > 4 ? 'אלרגנים: (ניתן לגלול)' : 'אלרגנים:'}</Text>
        <FlatList
          style={styles.list}
          numColumns={4}
          data={formatRow(props.allergens, 4, true)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <ItemView prod={item} key={index.toString()} />}
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
            }}>{props.maycontain.length > 4 ? 'עלול להכיל: (ניתן לגלול)' : 'עלול להכיל:'}</Text>
        <FlatList
          style={[styles.list]}
          numColumns={4}
          data={formatRow(props.maycontain, 4, false)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <ItemView prod={item} key={index.toString()} />}
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
    borderColor: '#abcdef',
    flexWrap: 'nowrap',
    backgroundColor: '#FFF',
    shadowColor: '#abcdef',
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
    backgroundColor: '#ccc',
    width: null,
    height: null,
    resizeMode: 'contain',
    flex: 2,
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
    color: '#000',
  },
  subtitleStyle: {
    fontSize: 14,
    opacity: 0.5,

    alignSelf: 'flex-start',
    writingDirection: 'rtl',
    flex: 1
  },
  actionButton: {
    padding: 5,
    height: 36,
    flex: 1
  },

  iconStyle: {
    fontSize: 24,
    color: '#000',
    opacity: 0.7,
    flex: 1
  },
  allergensContainer: {
    padding: 16,
    paddingTop: -16,
    alignSelf: 'stretch'
  },
  list: {
    flex: 1
  },
  warning: {
    flex: 2,
    padding: 5,
    alignSelf: 'flex-end'
  },

});

export default MaterialCard;