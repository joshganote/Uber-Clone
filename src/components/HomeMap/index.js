import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const HomeMap = props => {
  return (
    <View style={styles.container}>
      <Text>I am Map</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#a0abff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
