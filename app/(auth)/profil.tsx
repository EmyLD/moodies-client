import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const profil = () => {
  const { username, id } = useLocalSearchParams();
  console.log(id, username);
  return (
    <View>
      <Text>Coucou {username}</Text>
    </View>
  );
};

export default profil;
