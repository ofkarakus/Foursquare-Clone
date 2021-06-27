import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/search/Search';
import ListsScreen from '../screens/lists/Lists';
import HistoryScreen from '../screens/history/History';
import MeScreen from '../screens/me/Me';
import {History, Me, Search, Lists} from '../components/icons';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: props => <Search fill="#959b9e" />,
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Lists',
          tabBarIcon: props => <Lists fill="#959b9e" />,
        }}
        name="Lists"
        component={ListsScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'History',
          tabBarIcon: props => <History fill="#959b9e" />,
        }}
        name="History"
        component={HistoryScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: props => <Me fill="#959b9e" />,
        }}
        name="Me"
        component={MeScreen}
      />
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
