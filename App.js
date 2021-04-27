/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  View,
} from 'react-native';
import Nav from './src/Nav';

const App: () => Node = () => {
  return (
    <View style={{flex: 1}}>
      <Nav></Nav>
    </View>
  );
};


export default App;
