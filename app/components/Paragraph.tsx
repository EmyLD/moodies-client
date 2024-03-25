import { View, Text } from 'react-native';
import React from 'react';
import Emotions from './Emotions';

const Paragraph = () => {
  return (
    <View>
      <Text>
        Last time, you pointed out how you felt <Emotions text="lost" /> How do you feel today ?
      </Text>
    </View>
  );
};

export default Paragraph;
