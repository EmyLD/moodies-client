import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface Props {
  username: string;
}

const Title = ({ username }: Props) => {
  return (
    <View>
      <Text style={styles.h1}>Heya {username} 😎</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Nunito',
    fontSize: 24,
    padding: 20,
  },
});
export default Title;
