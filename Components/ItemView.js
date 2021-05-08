import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

function ItemView(props) {
    if (props.prod == null) {
        return <View style={[styles.item, styles.itemInvisible]} />;
    }
    switch (props.prod) {
        case 'ללא גלוטן':
        case 'נטול גלוטן':
        case 'ללא שיבולת שועל':
        case 'ללא חיטה':
        case 'אינו מכיל חיטה':
        case 'ללא שיפון':
        case 'ללא שעורה':
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
        case 'עקבות מזעריים של גלוטן':
        case 'עקבות של גלוטן חיטה':
        case 'קמח חיטה':
        case 'עקבות של גלוטן':
        case 'חלבון חיטה':
        case 'גוסמין':
        case 'דגנים מכילי גלוטן':
        case 'רכיבי חיטה':
        case 'רכיבי גלוטן חיטה':
        case 'גלוטן כוסמין':
        case 'חיטה מלאה':
        case 'גלוטן חיטה':
        case 'גלוטן כוסמת':
        case 'גלוטן שעורה':
        case 'גלוטן שיבולת שועל':
        case 'שיבולת שועל':
        case 'שיבולת שועל וזני כלאיים':
        case 'עקבות מזעריים של שיבולת שועל':
        case 'שעורה':
        case 'גלוטן שיפון':
        case 'שיפון':
        case 'עקבות מזעריים של שיפון':
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

        case 'קקאו':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/cacao.png')}
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

        case 'לקטוז':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/lactose-free.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'בוטנים':
        case 'חמאת בוטנים':
        case 'שומשום ובוטנים':
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
        case 'רכיבי ביצים':
        case 'שאריות של ביצים':
        case 'עקבות מזעריים של ביצים':
        case 'וביצים':
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
                        {props.prod == 'וביצים' ? 'ביצים' : props.prod}
                    </Text>
                </View>);

        case 'ללא ביצים':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='green'
                        source={require('../assets/eggs.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'חרדל':
        case 'עקבות של חרדל':
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


        case 'דבש':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/honey.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);
        case 'סלרי':
        case 'עקבות של סלרי':
        case 'שורש סלרי':
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
        case 'ללא שיבולת שועל וסויה':
        case 'ללא סויה':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='green'
                        source={require('../assets/soy.png')}
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
        case 'רכיבי חלב וסויה':
        case 'חלב סויה':
        case 'חלבון סויה':
        case 'רכיבי מחלב וסויה':
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
        case 'חלבון חלב':
        case 'רכיבי חלב':
        case 'חמאה':
        case 'עקבות של חלב':
        case 'חלב כבשים':
        case 'אבקת חלב':
        case 'אבקת מי גבינה':
        case 'חלב וסויה':
        case 'חלב עיזים':
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
        case 'אגוזים ':
        case 'צנוברים':
        case 'עקבות מזעריים של צנוברים':
        case 'שאריות של אגוזים':
        case 'עקבות של צנוברים':
        case 'צנובר':
        case 'קליפות אגוזים':
        case 'עקבות מזעריים של אגוזים':
        case 'עקבות של אגוזים':
        case 'אגוזים למיניהם':
        case 'עקבות של אגוזים ושקדים':
        case 'עקבות אגוזים שונים':
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
        case 'עקבות של אגוזי פקאן':
        case 'פקאן':
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
        case 'עקבות של אגוזי קשיו':
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
        case 'שברי אגוזי לוז':
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
        case 'אגוז היקורי':
        case 'אגוזי ברזיל':
        case 'עקבות של אגוזי היקורי':
        case 'עקבות של אגוזי ברזיל':
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
        case 'מלך':
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
        case 'עקבות של פיסטוק':
        case 'פיסטוק חאלבי':
        case 'פיסטוק חלאבי':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/pistachio.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'ללא שיבולת שועל וסויה':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='green'
                        source={require('../assets/oatmeal.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>);

        case 'מקדמיה':
        case 'אגוזי מקדמיה':
        case 'עקבות של אגוזי מקדמיה':
        case 'מאקדמיה':
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
        case 'חלב וקוקוס':
        case 'חלב קוקוס':
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
        case 'שומשום ובוטנים':
        case 'שאריות של שומשום':
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
        case 'ביסולפיט':
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
        case 'מכיל אומגה':
        case 'עקבות מזעריים של גלטין דגים':

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
        case 'פול':

            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/bean.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>
            );

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
                </View>
            );

        case 'עדשים':

            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/lentils.png')}
                    />
                    <Text
                        style={styles.bodyText}
                    >
                        {props.prod}
                    </Text>
                </View>
            )

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
        case 'שיירי גרעיני אגס':
        case 'שיירי גרעיני תפוח':
            return (
                <View style={styles.allergensContainer}>
                    <Image
                        style={styles.allergenImage}
                        tintColor='red'
                        source={require('../assets/seeds.png')}
                    />
                    <Text style={styles.bodyText} >{props.prod} </Text>
                </View>);

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
        fontSize: 16,
        color: '#424242',
        flex: 1,
        textAlign: 'center',
    },
    allergenImage: {

    },
    allergensContainer: {
        height: Dimensions.get('window').width / 3,
        alignItems: 'center',
        flex: 1,
        margin: 1,
    }
});
export default ItemView;
