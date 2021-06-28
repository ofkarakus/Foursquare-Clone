import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/search/Search';
import ListsScreen from '../screens/lists/Lists';
import HistoryScreen from '../screens/history/History';
import MeScreen from '../screens/me/Me';
import {History, Me, Loupe, Lists} from '../components/icons';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#3a61e0',
        inactiveTintColor: '#959b9e',
      }}>
      <Tab.Screen
        options={{
          title: 'Search',
          tabBarIcon: ({color}) => <Loupe fill={color} />,
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Lists',
          tabBarIcon: ({color}) => <Lists fill={color} />,
        }}
        name="Lists"
        component={ListsScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color}) => <History fill={color} />,
        }}
        name="History"
        component={HistoryScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({color}) => <Me fill={color} />,
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
