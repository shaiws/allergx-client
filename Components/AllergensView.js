import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";


function AllergensView(props) {
    if (props.prod == null) {
        return <View style={[styles.item, styles.itemInvisible]} />;
    }
    let image, color;
    switch (props.prod) {
        case 'ללא גלוטן':
        case 'נטול גלוטן':
        case 'ללא שיבולת שועל':
        case 'ללא חיטה':
        case 'אינו מכיל חיטה':
        case 'ללא שיפון':
        case 'ללא שעורה':
            color = "green"
            image = require("../assets/gluten-free.png");
            break;

        case 'גלוטן':
        case 'גלוטן ממקורות אחרים':
        case 'רכיבי גלוטן חיטה':
        case 'חיטה':
        case 'שאריות גלוטן':
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
            color = "red"
            image = require("../assets/gluten.png");
            break;

        case 'קקאו':
            color = "red"
            image = require("../assets/cacao.png");
            break;
        case 'ללא לקטוז':
        case 'דל לקטוז':
            color = "green"
            image = require("../assets/lactose-free.png");
            break;

        case 'לקטוז':
            color = "red"
            image = require("../assets/lactose-free.png");

            break;

        case 'בוטנים':
        case 'בוןטנים':
        case 'חמאת בוטנים':
        case 'שומשום ובוטנים':
        case 'עקבות מזעריים של בוטנים':
        case 'עקבות של בוטנים':
            color = "red"
            image = require("../assets/peanut.png");
            break;

        case 'ביצים':
        case 'חלבון ביצה':
        case 'רכיבי ביצים':
        case 'שאריות של ביצים':
        case 'עקבות מזעריים של ביצים':
        case 'וביצים':
        case 'עקבות של ביצים':
            color = "red"
            image = require("../assets/eggs.png");
            break;

        case 'ללא ביצים':
            color = "green"
            image = require("../assets/eggs.png");
            break;

        case 'חרדל':
        case 'עקבות של חרדל':
            color = "red"
            image = require("../assets/mustard.png");
            break;

        case 'דבש':
            color = "red"
            image = require("../assets/honey.png");
            break;

        case 'סלרי':
        case 'עקבות של סלרי':
        case 'שורש סלרי':
        case 'עקבות מזעריים של סלרי':
            color = "red"
            image = require("../assets/celery.png");
            break;

        case 'ללא שיבולת שועל וסויה':
        case 'ללא סויה':
            color = "green"
            image = require("../assets/soy.png");
            break;

        case 'סויה':
        case 'עקבות מזעריים של סויה':
        case 'עקבות של סויה':
        case 'רכיבי חלב וסויה':
        case 'חלב סויה':
        case 'חלבון סויה':
        case 'רכיבי מחלב וסויה':
        case 'שמן מסויה':
            color = "red"
            image = require("../assets/soy.png");
            break;

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
            color = "red"
            image = require("../assets/milk.png");
            break;

        case 'ללא חלב':
            color = "green"
            image = require("../assets/milk.png");
            break;

        case 'אגוזים':
        case 'אגוזים ':
        case 'סויה ואגוזים':
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
            color = "red"
            image = require("../assets/nuts.png");
            break;

        case 'אגוזי פקאן':
        case 'עקבות מזעריים של אגוזי פקאן':
        case 'עקבות של אגוזי פקאן':
        case 'פקאן':
            color = "red"
            image = require("../assets/pecan.png");
            break;

        case 'אגוזי קשיו':
        case 'עקבות של אגוזי קשיו':
        case 'קשיו':
            color = "red"
            image = require("../assets/cashew.png");
            break;

        case 'שקדים':
        case 'שקד':
        case 'עקבות מזעריים של שקדים':
        case 'עקבות של שקדים':
            color = "red"
            image = require("../assets/almond.png");
            break;

        case 'לוז':
        case 'אגוזי לוז':
        case 'עקבות מזעריים של אגוזי לוז':
        case 'עקבות של אגוזי לוז':
        case 'שברי אגוזי לוז':
            color = "red"
            image = require("../assets/hazelnuts.png");
            break;

        case 'אגוז ברזיל':
        case 'ברזיל':
        case 'אגוז היקורי':
        case 'אגוזי ברזיל':
        case 'עקבות של אגוזי היקורי':
        case 'עקבות של אגוזי ברזיל':
            color = "red"
            image = require("../assets/brazil-nuts.png");
            break;

        case 'אגוזי מלך':
        case 'מלך':
        case 'עקבות מזעריים של אגוזי מלך':
        case 'עקבות של אגוזי מלך':
            color = "red"
            image = require("../assets/walnuts.png");
            break;

        case 'פיסטוק':
        case 'עקבות של פיסטוק':
        case 'פיסטוק חאלבי':
        case 'פיסטוק חלאבי':
            color = "red"
            image = require("../assets/pistachio.png");
            break;

        case 'ללא שיבולת שועל וסויה':
            color = "green"
            image = require("../assets/oatmeal.png");
            break;

        case 'מקדמיה':
        case 'אגוזי מקדמיה':
        case 'עקבות של אגוזי מקדמיה':
        case 'מאקדמיה':
            color = "red"
            image = require("../assets/macadamia.png");
            break;

        case 'אגוזי קוקוס':
        case 'קוקוס':
        case 'אגוז קוקוס':
        case 'חלב וקוקוס':
        case 'חלב קוקוס':
        case 'עקבות של אגוזי קוקוס':
            color = "red"
            image = require("../assets/coconut.png");
            break;

        case 'שומשום':
        case 'סויה ושומשום':
        case 'עקבות של שומשום':
        case 'שומשום ובוטנים':
        case 'שאריות של שומשום':
        case 'עקבות מזעריים של שומשום':
            color = "red"
            image = require("../assets/sesame.png");
            break;

        case 'פנילאלינין':
        case 'סולפיט':
        case 'לציטין סויה':
        case 'ביסולפיט':
            color = "red"
            image = require("../assets/sulphate.png");
            break;
        case 'ללא תוספת סוכר':
        case 'ללא סוכר':
        case 'ללא ממתיקים מלאכותיים':
            color = "green"
            image = require("../assets/sugar-free.png");
            break;

        case 'דגים':
        case 'גלטין דגים':
        case 'מכיל אומגה':
        case 'עקבות מזעריים של גלטין דגים':
            color = "red"
            image = require("../assets/fish.png");
            break;
        case 'פול':
            color = "red"
            image = require("../assets/bean.png");
            break;

        case 'ערמונים':
            color = "red"
            image = require("../assets/chestnut.png");
            break;

        case 'עדשים':
            color = "red"
            image = require("../assets/lentils.png");
            break;

        case 'תורמוס':
            color = "red"
            image = require("../assets/lupine.png");
            break;

        case 'ללא שומן טראנס':
        case 'דל שומן':
            color = "green"
            image = require("../assets/trans.png");
            break;

        case 'ללא כולסטרול':
        case 'דל כולסטרול':
            color = "green"
            image = require("../assets/cholesterol.png");
            break;
        case 'גרעינים':
        case 'שיירי גרעיני אגס':
        case 'שיירי גרעיני תפוח':
            color = "red"
            image = require("../assets/seeds.png");
            break;

        case 'תירס':
            color = "red"
            image = require("../assets/corn.png");
            break;
        default:
            return (
                <Text style={styles.bodyText}>
                    {props.prod}
                </Text>
            );
    }
    return (
        <View style={styles.allergensContainer}>
            <Image
                style={{ tintColor: color }}
                source={image}
            />
            <Text
                style={styles.bodyText}
            >
                {props.prod}
            </Text>
        </View>);

}
const styles = StyleSheet.create({
    item: {
        backgroundColor: 'lightblue',
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

    allergensContainer: {
        height: Dimensions.get('window').width / 3,
        alignItems: 'center',
        flex: 1,
        margin: 1,
    }
});
export default AllergensView;
