import { TextInput, StyleSheet } from 'react-native';
import React from 'react';

interface Props {
  inputValue: string;
  secureTextEntry: boolean;
  textContent: 'username' | 'password' | 'emailAddress';
}

const Input = ({ inputValue, secureTextEntry, textContent }: Props) => {
  return (
    <TextInput
      placeholder={inputValue}
      secureTextEntry={secureTextEntry}
      textContentType={textContent}
    />
  );
};

const styles = StyleSheet.create({});

export default Input;
