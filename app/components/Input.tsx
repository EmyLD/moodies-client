import { TextInput, StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';

type Props = {
  inputValue: string;
  inputPlaceholder: string;
  secureTextEntry: boolean | undefined;
  textContent: 'username' | 'password' | 'emailAddress' | undefined;
  onChange: (param: string) => void;
};

const Input = ({
  inputValue,
  secureTextEntry,
  textContent,
  inputPlaceholder,
  onChange,
}: Props): ReactNode => {
  return (
    <TextInput
      placeholderTextColor="white"
      style={styles.input}
      placeholder={inputPlaceholder}
      secureTextEntry={secureTextEntry}
      textContentType={textContent}
      value={inputValue}
      onChangeText={onChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Nunito',
    backgroundColor: '#3CB17E',
    borderColor: '#3CB17E',
    color: '#fff',
    opacity: 0.4,
    flex: 1,
    padding: 14,
    borderRadius: 10,
  },
});

export default Input;
