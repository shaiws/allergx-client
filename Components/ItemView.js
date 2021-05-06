import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

function ItemView(props) {
    if (props.prod == null) {
        return <View style={[styles.item, styles.itemInvisible]} />;
    }
    switch (props.prod) {
        case 'ללא גלוטן':
        case 'נטול גלוטן':
        case 'ללא חיטה':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='green'
                        source={require('../assets/gluten-free.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'גלוטן':
        case 'גלוטן ממקורות אחרים':
        case 'רכיבי גלוטן חיטה':
        case 'חיטה':
        case 'חיטה מלאה':
        case 'גלוטן חיטה':
        case 'גלוטן שעורה':
        case 'גלוטן שיבולת שועל':
        case 'שעורה':
        case 'שיבולת שועל':
        case 'גלוטן שיפון':
        case 'מכיל דגנים מלאים':
        case 'שיפון':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/gluten.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'ללא לקטוז':
        case 'דל לקטוז':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='green'
                        source={require('../assets/lactose-free.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'בוטנים':
        case 'עקבות מזעריים של בוטנים':
        case 'עקבות של בוטנים':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/peanut.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);
        case 'ביצים':
        case 'חלבון ביצה':
        case 'עקבות של ביצים':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/eggs.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);
        case 'חרדל':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/mustard.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);
        case 'סלרי':
        case 'עקבות של סלרי':
        case 'עקבות מזעריים של סלרי':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/celery.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'סויה':
        case 'עקבות מזעריים של סויה':
        case 'עקבות של סויה':
        case 'שמן מסויה':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/soy.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'חלב':
        case 'מוצקי חלב':
        case 'רכיבי חלב':
        case 'עקבות של חלב':
        case 'עקבות מזעריים של חלב':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/milk.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'ללא חלב':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='green'
                        source={require('../assets/milk.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'אגוזים':
        case 'צנוברים':
        case 'שאריות של אגוזים':
        case 'עקבות מזעריים של אגוזים':
        case 'אגוזים אחרים':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/nuts.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);
        case 'אגוזי פקאן':
        case 'עקבות מזעריים של אגוזי פקאן':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/pecan.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'אגוזי קשיו':
        case 'קשיו':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/cashew.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);
        case 'שקדים':
        case 'עקבות מזעריים של שקדים':
        case 'עקבות של שקדים':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/almond.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);
        case 'לוז':
        case 'אגוזי לוז':
        case 'עקבות מזעריים של אגוזי לוז':
        case 'עקבות של אגוזי לוז':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/hazelnuts.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'אגוז ברזיל':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/brazil-nuts.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'אגוזי מלך':
        case 'עקבות מזעריים של אגוזי מלך':
        case 'עקבות של אגוזי מלך':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/walnuts.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);
        case 'פיסטוק':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/gluten-free.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'מקדמיה':
        case 'אגוזי מקדמיה':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/macadamia.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);
        case 'אגוזי קוקוס':
        case 'קוקוס':
        case 'אגוז קוקוס':
        case 'עקבות של אגוזי קוקוס':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/coconut.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'שומשום':
        case 'עקבות של שומשום':
        case 'עקבות מזעריים של שומשום':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/sesame.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'פנילאלינין':
        case 'סולפיט':
        case 'לציטין סויה':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/sulphate.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);
        case 'ללא תוספת סוכר':
        case 'ללא סוכר':
        case 'ללא ממתיקים מלאכותיים':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='green'
                        source={require('../assets/sugar-free.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'דגים':
        case 'גלטין דגים':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/fish.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'ערמונים':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/chestnut.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'עדשים': return (
            <View style={styles.allergensContainer}>
                <Image
                    style={styles.allergenImage}
                    tintColor='red'
                    source={require('../assets/lentils.png')}
                />
                <Text
                    style={styles.bodyText}
                >
                    {' ' + item + ' '}
                </Text>
          )
            </View>
        );
        case 'תורמוס':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/lupine.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'ללא שומן טראנס':
        case 'דל שומן':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='green'
                        source={require('../assets/trans.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'ללא כולסטרול':
        case 'דל כולסטרול':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='green'
                        source={require('../assets/cholesterol.png')}
                    />
                    <Text style={styles.bodyText} >{props.prod} </Text>
                </View>);
        case 'גרעינים':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/seeds.png')}
                    />
                    <Text style={styles.bodyText} >{props.prod} </Text>
                </View>);
        case 'ללא צבעי מאכל':
        case 'ללא צבעי מאכל מלאכותי':
        case 'צבעי מאכל טבעיים':
        case 'מוצר דייאט':
        case 'עשיר בחלבונים':
        case 'ללא חומרים משמרים':
        case 'ללא תוספת קמח':
        case 'ללא קזאין':
        case 'ללא מונוסודיום גלוטמט':
        case 'ללא קרמל':
        case 'ללא מרכיבים מהחי':
        case 'לייט':
        case 'מכיל סיבים תזונתיים':
        case 'חומרים טבעיים בלבד':
        case 'חקלאות ישראלית':
        case 'טבעוני':
        case 'ללא חומצות שומן טרנס':
        case 'עשיר בדגנים מלאים':
        case 'תו האגודה הישראלית לסוכרת':
        case 'צמחוני':
        case 'אורגני':
        case 'בתוספת ויטמין':
        case 'מכיל סידן':
        case 'דל קלוריות':
        case 'ויטמין':
        case 'טבעי':
        case 'חומרי טעם וריח טבעיים':
        case 'ללא חומרי טעם':
        case "ללא צבע וללא משמר":
        case 'אפוי':
        case 'לא מטוגן':
        case 'כחול לבן':
        case 'אפוי ולא מטוגן':
            // return <View style={[styles.item, styles.itemInvisible]} />;
            return null;
        default:
            return (
                <Text style={styles.bodyText}>
                    {props.prod}
                </Text>
            );
    }
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#6495ED',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    bodyText: {
        lineHeight: 20,
        fontSize: 14,
        color: '#424242',
        flex: 1,
        textAlign: 'center',

    },
    allergenImage: {

    },
    allergensContainer: {
        height: Dimensions.get('window').width / 3,
        //backgroundColor: '#6495ED',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
    }
});
export default ItemView;
