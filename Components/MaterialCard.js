import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemView from './ItemView';

deleteData = (data) => {

  for (let i = data.length - 1; i >= 0; --i) {
    if (
      data[i] == 'טבעוני' ||
      data[i] == 'ללא חומרים משמרים' ||
      data[i] == 'מקמח מצות' ||
      data[i] == 'מכיל דגנים מלאים' ||
      data[i] == 'דו תחמוצת גופרית' ||
      data[i] == 'ממקור צמחי' ||
      data[i] == 'אומגה ' ||
      data[i] == 'ללא צבעי מאכל' ||
      data[i] == 'ללא כולסטרול' ||
      data[i] == 'עשיר בויטמין' ||
      data[i] == 'עשיר בסידן' ||
      data[i] == 'אורגני' ||
      data[i] == 'אורגני אגריאור פיקוח ואי' ||
      data[i] == 'טוב השדה ארגון לחקלאות ב' ||
      data[i] == 'ללא תוספת סוכר' ||
      data[i] == 'משרד החקלאות ופיתוח הכפר' ||
      data[i] == 'ללא מרכיבים מהחי' ||
      data[i] == 'היפו קלורי' ||
      data[i] == 'חקלאות ישראלית' ||
      data[i] == 'צמחוני' ||
      data[i] == 'ללא צבע וללא משמר' ||
      data[i] == 'עשיר בסיבים תזונתיים' ||
      data[i] == 'ללא קפאין' ||
      data[i] == 'ללא נתרן' ||
      data[i] == 'דל קלוריות' ||
      data[i] == 'תו האגודה הישראלית לסוכרת' ||
      data[i] == 'אחוז שומן' ||
      data[i] == 'אין' ||
      data[i] == 'אינו מהונדס גנטית' ||
      data[i] == 'גידול אורגני' ||
      data[i] == 'נקי מחומרי הדברה' ||
      data[i] == 'אינו מכיל ביספינול' ||
      data[i] == 'ללא חומרי טעם' ||
      data[i] == 'ללא תוספת שמרים' ||
      data[i] == 'צבע מלאכות' ||
      data[i] == 'אפוי ולא מטוגן' ||
      data[i] == 'ללא ניפוח' ||
      data[i] == 'פחות מלח' ||
      data[i] == 'בתוספת ויטמין' ||
      data[i] == 'ללא שומן' ||
      data[i] == 'גופרית דו חמצנית' ||
      data[i] == 'דל כולסטרול' ||
      data[i] == 'מועשר בויטמינים' ||
      data[i] == 'עשיר בחלבונים' ||
      data[i] == 'לייט' ||
      data[i] == 'מוצר דייאט' ||
      data[i] == 'דל שומן' ||
      data[i] == 'ללא מונוסודיום גלוטמט' ||
      data[i] == 'ויטמין' ||
      data[i] == 'הידרופוני' ||
      data[i] == 'חומרי טעם וריח טבעיים' ||
      data[i] == 'חומרים טבעיים בלבד' ||
      data[i] == 'עשיר בדגנים מלאים' ||
      data[i] == 'ללא ממתיקים מלאכותיים' ||
      data[i] == 'לא למאכל' ||
      data[i] == 'ללא מלח' ||
      data[i] == 'ללא תוספת קמח' ||
      data[i] == 'מכיל סיבים תזונתיים' ||
      data[i] == 'ללא ממתיקים' ||
      data[i] == 'ללא תוספת שמן' ||
      data[i] == 'ללא צבעי מאכל מלאכותי' ||
      data[i] == 'מופחת סוכר' ||
      data[i] == 'מכיל סידן' ||
      data[i] == 'טבעי' ||
      data[i] == 'טבעי וצמחי' ||
      data[i] == 'ללא הורמונים' ||
      data[i] == 'ללא תוספים' ||
      data[i] == 'לא נוסה על בעלי חיים' ||
      data[i] == 'ללא קרמל' ||
      data[i] == 'כחול לבן' ||
      data[i] == 'ללא שומן טראנס' ||
      data[i] == 'כינין' ||
      data[i] == 'ללא אלכוהול' ||
      data[i] == 'ללא אלומיניום' ||
      data[i] == 'ללא בישום' ||
      data[i] == 'מכיל ויטמין' ||
      data[i] == 'נבדק דרמטולוגית' ||
      data[i] == 'ניתן למיחזור' ||
      data[i] == 'ללא כל התערבות כימית' ||
      data[i] == 'שומר על איכות הסביבה' ||
      data[i] == 'ללא גופרית' ||
      data[i] == 'ללא הידרוליזט' ||
      data[i] == 'ריח מלאכות' ||
      data[i] == 'ללא חומרי צבע וריח' ||
      data[i] == 'ללא חומרי תפיחה ומשפרי אפיה' ||
      data[i] == 'ללא חומצות שומן טרנס' ||
      data[i] == 'עשיר בברזל ואבץ' ||
      data[i] == 'ללא קזאין' ||
      data[i] == 'ללא שומן מוקשה' ||
      data[i] == 'עשיר באומגה' ||
      data[i] == 'מקור לאנרגיה' ||
      data[i] == 'ללא תוספת מלח' ||
      data[i] == 'מועשר בויטמינים מקבוצה' ||
      data[i] == 'צבעי מאכל טבעיים' ||
      data[i] == 'ללא ' ||
      data[i] == 'ללא' ||
      data[i] == 'ללא תוספת פוספט' ||
      data[i] == 'מועשר בברזל' ||
      data[i] == 'מופחת שומן' ||
      data[i] == 'ללא סודיום ביכרומט' ||
      data[i] == 'ללא עמילן' ||
      data[i] == 'בתוספת סידן' ||
      data[i] == 'עוף שגדל ללא אנטיביוטיקה' ||
      data[i] == 'ללא מים' ||
      data[i] == 'ללא שומן או מרגרינה' ||
      data[i] == 'מפוסטר' ||
      data[i] == 'נקי מתוספות מלאכותיות' ||
      data[i] == 'רכיבים ביתיים' ||
      data[i] == 'מועשר במינרליים' ||
      data[i] == 'ללא טיגון' ||
      data[i] == 'סאקל ישראל פיתוח והתעדה' ||
      data[i] == 'ללא חומרי צבע' ||
      data[i] == 'מגידול אורגני' ||
      data[i] == 'מועשר בחומצה פולית' ||
      data[i] == 'מקור טוב לסידן' ||
      data[i] == 'מקור לחומצה פולית' ||
      data[i] == 'ללא דשנים כימיים' ||
      data[i] == 'לוז שקדים מלך קשיו פקאן ברזיל פיסטוק מקדמיה' ||
      data[i] == 'לפתית' ||
      data[i] == 'צבעי מאכל' ||
      data[i] == 'על בסיס סכרין' ||
      data[i] == 'עשיר בחלבון צמחי' ||
      data[i] == 'עשיר בפחמימות מורכבות' ||
      data[i] == 'רכיבי פרי בלבד'
    ) {
      data.splice(i, 1);
    }
  }

  if (data.length == 0) {
    data.push("לא ידוע על אלרגנים למוצר זה. יש לבדוק על גבי האריזה");
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
      <Image source={{ uri: props.image }} style={styles.cardItemImagePlace} />
      <View style={styles.bodyContent}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <Text style={styles.titleStyle}>{props.name}</Text>
          <TouchableOpacity style={styles.actionButton} onPress={async () => {
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
        </View>
        <Text style={styles.subtitleStyle}>{props.code}</Text>
      </View>
      <View style={styles.allergensContainer}>
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
      </View>
      <ScrollView style={styles.warning}>
        <Text>{'הנתונים המדויקים מופיעים על גבי המוצר. אין להסתמך על הפירוט המופיע באפליקציה. יתכנו טעויות או אי התאמות. יש לקרוא את המופיע על גבי אריזת המוצר לפני השימוש'}</Text>
      </ScrollView>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 2,
  },
  bodyContent: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 16,
    maxHeight: 70,
    paddingTop: -16,
    paddingBottom: -16,

  },
  titleStyle: {
    flex: 10,
    fontSize: 20,
    alignSelf: 'flex-start',

  },
  subtitleStyle: {
    alignSelf: 'flex-start',
    fontSize: 14,
    opacity: 0.5,
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
    flex: 4,
    padding: 16,
    paddingTop: -16,
    alignSelf: 'stretch'
  },
  list: {
    flex: 1
  },
  warning: {
    flex: 1,
    padding: 3
  }
});

export default MaterialCard;