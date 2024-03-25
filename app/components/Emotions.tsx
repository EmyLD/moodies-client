import { StyleSheet, Text } from 'react-native';
import React from 'react';

interface Props {
  text: string;
}

const Emotions = ({ text }: Props) => {
  return <Text style={style.background}>{text}</Text>;
};

const style = StyleSheet.create({
  background: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#DD6677',
  },
});

export default Emotions;
