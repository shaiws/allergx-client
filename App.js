//import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import Search from './Screens/Search';
import Scanner from './Screens/Scanner';
import Product from './Screens/Product';
import Favorites from './Screens/Favorites';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNavigation } from 'react-native-paper';
import { IconButton, Colors } from 'react-native-paper';

const Stack = createStackNavigator();
function Home({ props }) {
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => props.jumpTo('Search')}>
          <Text style={styles.buttonLabel}>{'חיפוש מרשימה'}</Text>
        </TouchableOpacity>
        <IconButton
          icon="database-search"
          color={Colors.red500}
          onPress={() => navigation.navigate('Search')}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Scanner')}>
          <Text style={styles.buttonLabel}>{'סריקת ברקוד'}</Text>
        </TouchableOpacity>
        <IconButton
          icon="barcode"
          color={Colors.red500}

          onPress={() => navigation.navigate('Scanner')}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Favorites')}>
          <Text style={styles.buttonLabel}>{'מועדפים'}</Text>
        </TouchableOpacity>
        <IconButton
          icon="star"
          color={Colors.red500}
          onPress={() => navigation.navigate('Favorites')}
        />
      </View>
    </View>
  );
}

function AppStackScreen(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}
        initialRouteName={props.initialRouteName}>
        <Stack.Screen
          name="Home"
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }}
          component={Home}
        />
        <Stack.Screen
          name="Search"
          options={{
            title: 'Search', icon: "search-database",
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
        <Stack.Screen
          name="Favorites"
          options={{
            title: 'Favorites',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }}
          component={Favorites}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Search', title: 'Search', icon: 'database-search' },
    { key: 'Favorites', title: 'Favorites', icon: 'star' },

  ]);
  // const renderScene = BottomNavigation.SceneMap({
  //   Home: Home,
  //   Search: Search,
  //   Scanner: Scanner,
  //   Favorites: Favorites
  // });
  return (
    < BottomNavigation
      navigationState={{ index, routes }
      }
      onIndexChange={setIndex}
      renderScene={({ route, jumpTo }) => {
        switch (route.key) {
          case 'Home':
            return <AppStackScreen initialRouteName="Home" jumpTo={jumpTo} />;
            break;
          case 'Search':
            return <AppStackScreen initialRouteName="Search" jumpTo={jumpTo} />;
            break;
          case 'Scanner':
            return <AppStackScreen initialRouteName="Scanner" jumpTo={jumpTo} />;
            break;
          case 'Favorites':
            return <AppStackScreen initialRouteName="Favorites" jumpTo={jumpTo} />;
            break;
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
