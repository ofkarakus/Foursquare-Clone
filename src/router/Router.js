import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRouter from './MainRouter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../context/reducer';
import initialState from '../context/store';

const store = createStore(reducer, initialState);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainRouter />
      </NavigationContainer>
    </Provider>
  );
}
