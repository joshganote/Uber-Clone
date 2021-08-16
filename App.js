import React from 'react';
import {StatusBar} from 'react-native';

import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </>
  );
};

export default App;
