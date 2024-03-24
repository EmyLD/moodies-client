import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { capitalizeFirstLetter } from '../../utils/workOnString';
const profil = () => {
  const { username, id } = useLocalSearchParams();
  const newUsername = capitalizeFirstLetter(username);
  return (
    <SafeAreaView>
      <View>
        <Text>Heya {newUsername}</Text>
      </View>
    </SafeAreaView>
  );
};

export default profil;
