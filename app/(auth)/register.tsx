import { View, Text } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const register = () => {
  const router = useRouter();
  return (
    <View>
      <Text onPress={() => router.back()}>Oopsie, i have an account</Text>
    </View>
  );
};

export default register;
