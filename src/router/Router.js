import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/search/Search';
import ListsScreen from '../screens/lists/Lists';
import HistoryScreen from '../screens/history/History';
import MeScreen from '../screens/me/Me';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Lists" component={ListsScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Me" component={MeScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
