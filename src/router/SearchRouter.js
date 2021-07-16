import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import VenueList from '../screens/search/venue-list/VenueList';
import SearchScreen from '../screens/search/Search';

const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="SearchScreen">
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="VenueList" component={VenueList} />
    </Stack.Navigator>
  );
}

export default SearchStack;
