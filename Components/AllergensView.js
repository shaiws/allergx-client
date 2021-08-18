import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";


function AllergensView(props) {
    if (props.prod == null) {
        return <View style={[styles.item, styles.itemInvisible]} />;
    }
    let image, color;
    switch (props.prod) {
        case 'ללא חיטה':
        case 'אינו מכיל חיטה':
        case 'נטול גלוטן':
        case 'ללא שיפון':
        case 'ללא שעורה':
        case 'ללא גלוטן':
            color = "green"
            image = require("../assets/gluten-free.png");
            break;

        case 'גלוטן':
        case 'גלוטן ':
        case 'גלוטן וביצים':
        case 'גלוטן חיטה':
        case 'גלוטן חיטה (מקמח מצות)':
        case 'גלוטן כוסמין':
        case 'גלוטן כוסמת':
        case 'גלוטן ממקורות אחרים':
        case 'גלוטן שיבולת שועל':
        case 'גלוטן שיפון':
        case 'גלוטן שעורה':
        case 'דגנים':
        case 'דגנים מכילי גלוטן':
        case 'חיטה':
        case 'חיטה ':
        case 'כוסמין':
        case 'מכיל גלוטן ':
        case 'ממקור שעורה ולשיפון':
        case 'ממקור שעורה ולתת':
        case 'עלול להכיל שאריות גלוטן וסויה':
        case 'עקבות מזעריים של גלוטן':
        case 'עקבות של גלוטן':
        case 'עקבות של גלוטן חיטה':
        case 'עקבות של גלוטן חיטה (מקמח מצות)':
        case 'עקבות של גלוטן שיבולת שועל':
        case 'עקבות של גלוטן שעורה':
        case 'עקבות מזעריים של שיפון':
        case 'קמח חיטה':
        case 'רכיבי גלוטן חיטה':
        case 'רכיבי חיטה':
        case 'שאריות גלוטן':
        case 'שיפון':
        case 'שעורה':
        case 'חיטה מלאה':
        case 'חלבון חיטה':
        case 'מקמח מצות':
            color = "red"
            image = require("../assets/gluten.png");
            break;

        case 'קקאו':
            color = "red"
            image = require("../assets/cacao.png");
            break;

        case 'ללא לקטוז':
            color = "green"
            image = require("../assets/lactose-free.png");
            break;

        case 'אבקת מי גבינה':
        case 'חלבון מי גבינה וחלבון סויה ':
        case 'חמאה':
        case 'לקטוז':
        case 'מכיל חלבון מי גבינה ולציטין חמניות':
            color = "red"
            image = require("../assets/lactose-free.png");
            break;

        case 'בוטנים':
        case 'בוטנים ':
        case 'בוטנים ואגוזים אחרים':
        case 'בוטנים וביצים':
        case 'בוטנים וחלב':
        case 'חמאת בוטנים':
        case 'מיוצר בסביבת עבודה המכילה בוטנים':
        case 'עקבות מזעריים של בוטנים':
        case 'עקבות של בוטנים':
        case 'שאריות בוטנים':
            color = "red"
            image = require("../assets/peanut.png");
            break;

        case 'ביצים':
        case 'ביצים ושומשום':
        case 'וביצים':
        case 'חלבון ביצה':
        case 'חלמון ביצה':
        case 'עקבות מזעריים של ביצים':
        case 'עקבות של ביצים':
        case 'רכיבי ביצים':
            color = "red"
            image = require("../assets/eggs.png");
            break;

        case 'ללא ביצים':
            color = "green"
            image = require("../assets/eggs.png");
            break;

        case 'חרדל':
        case 'עקבות מזעריים של חרדל':
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
            color = "red"
            image = require("../assets/celery.png");
            break;

        case 'ללא סויה':
            color = "green"
            image = require("../assets/soy.png");
            break;

        case 'וסויה':
        case 'חלב סויה':
        case 'חלבון סויה':
        case 'מכיל סויה':
        case 'סויה ואגוזים':
        case 'סויה וחלב':
        case 'סויה ושומשום':
        case 'עקבות מזעריים של סויה':
        case 'עקבות של סויה':
        case 'סויה':
        case 'קמח סויה':
        case 'רוטב סויה':
        case 'רכיבי מחלב וסויה':
        case 'שמן מסויה':
            color = "red"
            image = require("../assets/soy.png");
            break;

        case 'אבקת חלב':
        case 'חלב':
        case 'חלב בקר':
        case 'חלב וגלוטן ':
        case 'חלב וקוקוס':
        case 'חלב ושקדים':
        case 'חלב כבשים':
        case 'חלב עיזים':
        case 'חלבון חלב':
        case 'מוצקי חלב':
        case 'מוצרי חלב':
        case 'עקבות מזעריים של חלב':
        case 'עקבות של חלב':
        case 'עקבות של מוצרי חלב':
        case 'פרוטאין חלב':
        case 'רכיבי חלב':
        case 'רכיבי חלב וסויה':
        case 'שאריות חלב':
            color = "red"
            image = require("../assets/milk.png");
            break;

        case 'ללא חלב':
            color = "green"
            image = require("../assets/milk.png");
            break;

        case 'אגוז ':
        case 'אגוזי עץ':
        case 'אגוזים':
        case 'אגוזים ':
        case 'אגוזים אחרים':
        case 'אגוזים למינהם':
        case 'אגוזים למיניהם':
        case 'אגוזים שומשום וסויה':
        case 'גרעינים':
        case 'עקבות אגוזים שונים':
        case 'עקבות מזעריים של אגוזים':
        case 'עקבות של אגוזים':
        case 'עקבות מזעריים של צנוברים':
        case 'עקבות של צנוברים':
        case 'צימוקים':
        case 'צנובר':
        case 'צנוברים':
        case 'קליפות אגוזים':
        case 'שאריות של אגוזים':
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

        case 'עקבות מזעריים של שקדים':
        case 'עקבות של אגוזים ושקדים':
        case 'עקבות של שקדים':
        case 'שקד':
        case 'שקדים':
            color = "red"
            image = require("../assets/almond.png");
            break;

        case 'אגוזי לוז':
        case 'לוז':
        case 'עקבות מזעריים של אגוזי לוז':
        case 'עקבות של אגוזי לוז':
        case 'שברי אגוזי לוז':
            color = "red"
            image = require("../assets/hazelnuts.png");
            break;

        case 'אגוז ברזיל':
        case 'ברזיל':
        case 'עקבות של אגוזי ברזיל':
            color = "red"
            image = require("../assets/brazil-nuts.png");
            break;

        case 'אגוזי מלך':
        case 'מלך':
        case 'עקבות מזעריים של אגוזי מלך':
        case 'עקבות של אגוזי מלך':
        case 'שאריות אגוזי מלך':
            color = "red"
            image = require("../assets/walnuts.png");
            break;

        case 'עקבות של פיסטוק':
        case 'פיסטוק':
        case 'פיסטוק חאלבי':
            color = "red"
            image = require("../assets/pistachio.png");
            break;

        case 'ממקור שיבולת שועל':
        case 'עקבות מזעריים של שיבולת שועל':
        case 'עקבות של שיבולת':
        case 'שיבולת שועל':
            color = "red"
            image = require("../assets/oatmeal.png");
            break;

        case 'ללא שיבולת שועל':
            color = "green"
            image = require("../assets/oatmeal.png");
            break;

        case 'אגוזי מקדמיה':
        case 'מאקדמיה':
        case 'מקדמיה':
        case 'עקבות של אגוזי מקדמיה':
            color = "red"
            image = require("../assets/macadamia.png");
            break;

        case 'אגוזי קוקוס':
        case 'חלב קוקוס':
        case 'עקבות מזעריים של קוקוס':
        case 'עקבות של אגוזי קוקוס':
        case 'קוקוס':
        case 'רכיבי אגוז קוקוס':
        case 'שמן קוקוס':
            color = "red"
            image = require("../assets/coconut.png");
            break;

        case 'זרעי שומשום':
        case 'עלול להכיל עקבות של סומסום וביצים':
        case 'עקבות מזעריים של שומשום':
        case 'עקבות של שומשום':
        case 'שאריות של שומשום':
        case 'שומשום':
        case 'שומשום ובוטנים':
        case 'שומשום וביצים':
        case 'שומשום ושקדים':
        case 'שיירי שומשום':
            color = "red"
            image = require("../assets/sesame.png");
            break;

        case 'so2':
        case 'ביסולפיט':
        case 'לציטין':
        case 'לציטין סויה':
        case 'סולפיט':
        case 'סולפיט שמקורו בשום':
        case 'עקבות ליצטין חמניות ':
        case 'עקבות סולפיט':
        case 'פנילאלינין':
        case 'אלכוהול':
            color = "red"
            image = require("../assets/sulphate.png");
            break;

        case 'ללא סוכר':
            color = "green"
            image = require("../assets/sugar-free.png");
            break;

        case 'ביצי דגים':
        case 'ג\'לטין':
        case 'גלטין דגים':
        case 'דגים':
        case 'עצמות דגים':
        case 'עקבות מוצרי דגים':
        case 'עקבות מזעריים של גלוטן דגים':
        case 'עקבות מזעריים של גלטין דגים':
        case 'עקבות מזעריים של דגים':
        case 'רכיבי דגים':
        case 'אומגה ':
            color = "red"
            image = require("../assets/fish.png");
            break;

        case 'שעועית':
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

        case 'פול':
        case 'תורמוס':
            color = "red"
            image = require("../assets/lupine.png");
            break;

        case 'דל שומן':
        case 'דל שומן טרנס':
        case 'דל שומן טראנס':
        case 'ללא חומצות שומן טרנס':
        case 'ללא שומן טראנס':
        case 'ללא שומן':
            color = "green"
            image = require("../assets/trans.png");
            break;

        case 'דל קולסטרול':
        case 'ללא קולסטרול':
        case 'דל כולסטרול':
        case 'ללא כולסטרול':
            color = "green"
            image = require("../assets/cholesterol.png");
            break;

        case 'שיירי גרעיני אגס':
        case 'שיירי גרעיני תפוח':
        case 'גרעיני אניס':
        case 'גרעיני דלעת':
        case 'גרעיני חמניה':
        case 'זעתר':
        case 'חמניות':
        case 'קליפות וחרצנים':
            color = "red"
            image = require("../assets/seeds.png");
            break;

        case 'עקבות מזעריים של תירס':
        case 'תירס':
            color = "red"
            image = require("../assets/corn.png");
            break;

        case 'קינמון':
            color = "red"
            image = require("../assets/cinnamon.png");
            break;

        case 'תות שדה':
            color = "red"
            image = require("../assets/strawberry.png");
            break;

        case 'עגבניות':
            color = "red"
            image = require("../assets/tomato.png");
            break;
        case 'קפאין':
            color = "red"
            image = require("../assets/caffeine.png");
            break;
        case 'ללא קפאין':
            color = "green"
            image = require("../assets/caffeine.png");
            break;

        case 'רכיבים מן הים':
        case 'רכיכות':
            color = "red"
            image = require("../assets/seafood.png");
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
