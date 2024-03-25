import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
  return (
    <View>
      <Text style={styles.h1}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Nunito',
    fontSize: 24,
  },
});
export default Title;
