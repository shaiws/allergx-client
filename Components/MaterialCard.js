import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemView from './ItemView';

deleteData = (data) => {

  for (let i = 0; i < data.length; i++) {
    if (data[i] == 'ללא צבעי מאכל' || data[i] == 'ללא צבעי מאכל מלאכותי' || data[i] == 'צבעי מאכל טבעיים' || data[i] == 'מוצר דייאט' || data[i] ==
      'עשיר בחלבונים' || data[i] == 'ללא חומרים משמרים' || data[i] == 'ללא תוספת קמח' || data[i] == 'ללא קזאין' || data[i] == 'ללא מונוסודיום גלוטמט' ||
      data[i] == 'ללא קרמל' || data[i] == 'ללא מרכיבים מהחי' || data[i] == 'לייט' || data[i] == 'מכיל סיבים תזונתיים' || data[i] == 'חומרים טבעיים בלבד' ||
      data[i] == 'חקלאות ישראלית' || data[i] == 'טבעוני' || data[i] == 'ללא חומצות שומן טרנס' || data[i] == 'עשיר בדגנים מלאים' || data[i] == 'תו האגודה הישראלית לסוכרת' ||
      data[i] == 'צמחוני' || data[i] == 'אורגני' || data[i] == 'בתוספת ויטמין' || data[i] == 'מכיל סידן' || data[i] == 'דל קלוריות' || data[i] == 'ויטמין' ||
      data[i] == 'טבעי' || data[i] == 'חומרי טעם וריח טבעיים' || data[i] == 'ללא חומרי טעם' || data[i] == "ללא צבע וללא משמר" || data[i] == 'אפוי' ||
      data[i] == 'לא מטוגן' || data[i] == 'כחול לבן' || data[i] == 'אפוי ולא מטוגן' || data[i] == 'עשיר בסיבים תזונתיים' || data[i] == 'טבעי') {
      data.splice(i, 1);
    }
  }
  return data;
}

formatRow = (data, numColumns) => {
  data = deleteData(data);
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push(null);
    numberOfElementsLastRow++;
  }
  return data;
}

function MaterialCard(props) {
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
            }
          }}>
            <Icon name={favorite ? "star" : "star-outline"} style={styles.iconStyle}></Icon>
          </TouchableOpacity>
          <Text style={styles.titleStyle}>{props.name}</Text>
        </View>
        <Text style={styles.subtitleStyle}>{props.code}</Text>
      </View>

      <View style={styles.body}>
        <Text style={{
          fontSize: 18,
          color: "#000",
          fontWeight: 'bold',
        }}>{"אלרגנים:"}</Text>
        <FlatList
          style={styles.list}
          numColumns={4}
          data={formatRow(props.allergens, 4)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <ItemView prod={item} key={index.toString()} />}
        />
        <Text>{'הנתונים המדויקים מופיעים על גבי המוצר. אין להסתמך על הפירוט המופיע באפליקציה. יתכנו טעויות או אי התאמות. יש לקרוא את המופיע על גבי אריזת המוצר לפני השימוש'}</Text>
      </View>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#CCC',
    flexWrap: 'nowrap',
    backgroundColor: '#FFF',
    shadowColor: '#000',
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
    flex: 10,
  },
  bodyContent: {
    flex: 2,
    padding: 16,
    paddingTop: 24,
    justifyContent: 'center',
  },
  titleStyle: {
    flex: 3,
    fontSize: 20,
    color: '#000',
  },
  subtitleStyle: {
    alignSelf: 'flex-end',
    fontSize: 14,
    color: '#000',
    lineHeight: 16,
    opacity: 0.5,
  },
  actionButton1: {
    padding: 5,
    height: 36,
  },
  actionText1: {
    fontSize: 14,
    color: '#000',
    opacity: 0.9,
  },
  iconStyle: {
    fontSize: 24,
    color: '#000',
    opacity: 0.7,
  },
  body: {
    flex: 18,
    padding: 16,
  },
  bodyText: {
    lineHeight: 20,
    fontSize: 14,
    color: '#424242',
  },
  allergenImage: {

  },
  allergensContainer: {

  },
  list: {
    flex: 1,
    marginVertical: 20,
  }
});

export default MaterialCard;
