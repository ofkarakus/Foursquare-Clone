import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListsScreen from '../screens/lists/Lists';
import HistoryScreen from '../screens/history/History';
import ProfileScreen from '../screens/profile/Profile';
import {History, Profile, Search, Lists} from '../components/icons';
import SearchStack from './SearchRouter';
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
          tabBarIcon: ({color}) => <Search fill={color} />,
        }}
        name="Search"
        component={SearchStack}
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
          tabBarIcon: ({color}) => <Profile fill={color} />,
        }}
        name="Profile"
        component={ProfileScreen}
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
