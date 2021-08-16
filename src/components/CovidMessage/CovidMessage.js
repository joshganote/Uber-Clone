import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const CovidMessage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
        odio a odio maximus tempor nec dictum magna. Duis eu enim id mauris
        malesuada tempus. Maecenas vitae porttitor turpis. Sed ultricies elit
        nec lorem pulvinar interdum.
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};
