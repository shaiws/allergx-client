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
        {/* <Stack.Screen
          name="Favorites"
          options={{
            title: 'Favorites',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }}
          component={Favorites}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}
function App() {
  const [index, setIndex] = React.useState(0);
  const routes = [
    { key: 'Search', title: 'חיפוש', icon: 'database-search', color: '#3F51B5' },
  ];

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
