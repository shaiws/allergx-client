import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import Search from './Search';
import Scanner from './Scanner';
import Product from './Product';
import Favorites from './Favorites';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton, Colors } from 'react-native-paper';

const Stack = createStackNavigator();
function Home({ navigation }) {
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Search')}>
          <Text style={styles.buttonLabel}>{'חיפוש מרשימה'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Scanner')}>
          <Text style={styles.buttonLabel}>{'סריקת ברקוד'}</Text>
        </TouchableOpacity>
        <IconButton
          icon="star"
          color={Colors.red500}
          size={20}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon="database-search"
          color={Colors.red500}
          size={20}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon="camera"
          color={Colors.red500}
          size={20}
          onPress={() => console.log('Pressed')}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Favorites')}>
          <Text style={styles.buttonLabel}>{'מועדפים'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
            title: 'Search',
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
export default App;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
