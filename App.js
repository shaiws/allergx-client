import * as React from 'react';
import { StyleSheet, Alert, BackHandler, View } from 'react-native';
import Search from './Screens/Search';
import Scanner from './Screens/Scanner';
import Product from './Screens/Product';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNavigation } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';


const Stack = createStackNavigator();

const storeData = async (didAgree) => {
  try {
    await AsyncStorage.setItem('@read_consent', JSON.stringify(didAgree));
  } catch (e) {
  }
}

const getData = async () => {
  try {
    return await AsyncStorage.getItem('@read_consent')
  } catch (e) {
  }
}

function AppStackScreen(props) {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}
        initialRouteName={props.initialRouteName}>
        <Stack.Screen
          name="Search"
          options={{
            title: 'חיפוש', icon: "search-database",
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }}
          component={Search}
        />
        <Stack.Screen
          name="Scanner"
          options={{
            title: 'Scanner',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }}
          component={Scanner}
        />
        <Stack.Screen
          name="Product"
          options={{
            title: 'Product',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }}
          component={Product}
        />
        { }
      </Stack.Navigator>
    </NavigationContainer>

  );
}
function App() {
  const [index, setIndex] = React.useState(0);
  const [agreed, setAgreed] = React.useState(false)
  const [loaded, setLoaded] = React.useState(false)
  React.useEffect(() => {
    const asyncFunctionData = async () => {
      try {
        const didAgree = await getData();
        setAgreed(JSON.parse(didAgree));
        setLoaded(true)
      } catch (e) { }
    }
    asyncFunctionData();
  }, [setAgreed]);


  const routes = [
    { key: 'Search', title: 'חיפוש', icon: 'database-search', color: '#3F51B5' },
  ];

  if (!loaded) {
    return null;
  }
  else
    console.log(agreed);

  if (!agreed && loaded) {
    Alert.alert(
      "תנאי השימוש באפליקציה",
      `המידע באפליקציה מבוסס על המידע המתפרסם על ידי חברות המזון.\nבעל האפליקציה או מי מטעמו אינם אחראים לטעויות.\nבכל מקרה של ספק יש ליצור קשר עם חברות המזון ו / או עם הרופא המטפל.\nהנתונים המדויקים מופיעים על גבי המוצר.\nאין להסתמך על הפירוט המופיע באפליקציה.\nיתכנו טעויות או אי התאמות.\nיש לקרוא את המופיע על גבי אריזת המוצר לפני השימוש.\n\nבלחיצה על "מאשר/ת" אני מאשר/ת שקראתי את תנאי השימוש.`,
      [
        {
          text: "לא מאשר/ת",
          onPress: () => {
            storeData(false);
            Alert.alert(
              "האפליקציה תסגר",
              "השימוש באפליקציה מותנה בקריאה ואישור התנאים",
              [
                {
                  text: "סגירה",
                  onPress: () => {
                    BackHandler.exitApp()
                  },
                  style: "cancel"

                },

              ]
            );
          },
          style: "cancel"
        },
        {
          text: "מאשר/ת", onPress: () => {
            storeData(true);
            RNRestart.Restart();
          }
        }
      ]
    );
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      </View>
    );
  }
  else
    return (
      < BottomNavigation
        navigationState={{ index, routes }
        }
        onIndexChange={setIndex}
        renderScene={({ route, jumpTo }) => {
          switch (route.key) {
            case 'Search':
              return <AppStackScreen initialRouteName="Search" jumpTo={jumpTo} />;
          }
        }}
      />
    );
}



export default App;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '5%',
    marginBottom: 6,
    minWidth: '50%',
    textAlign: 'center',
  },
  buttonLabel: {
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  container: {
    flex: 1,
    paddingTop: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
