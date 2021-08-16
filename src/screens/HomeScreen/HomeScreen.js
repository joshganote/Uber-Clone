import React from 'react';
import {View, Text} from 'react-native';

import {HomeMap} from '../../components/HomeMap/HomeMap';
import {CovidMessage} from '../../components/CovidMessage/CovidMessage';

export const HomeScreen = props => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
    </View>
  );
};
