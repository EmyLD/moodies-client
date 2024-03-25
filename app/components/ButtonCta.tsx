import { Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';

interface Props {
  btnRedirect: () => void;
  text: string;
}

const ButtonCta = ({ btnRedirect, text }: Props) => {
  return (
    <Pressable style={styles.button} onPress={btnRedirect}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3CB17E',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginRight: 35,
    padding: 15,
    color: '#fff',
    borderRadius: 10,
    width: '45%',
    position: 'relative',
    top: 120,
  },
  buttonText: {
    fontFamily: 'Nunito',
    fontSize: 18,
    color: '#fff',
  },
});
export default ButtonCta;
