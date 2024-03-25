import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import { capitalizeFirstLetter } from '../../utils/workOnString';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
const profil = () => {
  // TODO : get emotion list with id param
  const { username, id } = useLocalSearchParams();
  const newUsername = capitalizeFirstLetter(username);
  return (
    <SafeAreaView style={style.container}>
      <Title text={`Heya ${newUsername}`} />
      <View>
        <Paragraph />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default profil;
