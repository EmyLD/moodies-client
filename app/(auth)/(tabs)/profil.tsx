import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, Text } from 'react-native';
import { capitalizeFirstLetter } from 'utils/formats';
import Title from '~/app/components/Title';
import EmphEmotion from '~/app/components/EmphEmotion';

const Profil = () => {
  // TODO : get emotion list with id param
  const { username } = useLocalSearchParams();
  const newUsername = capitalizeFirstLetter(username);
  return (
    <SafeAreaView style={style.container}>
      <Title username={newUsername} />
      <View style={style.paraphSize}>
        <Text style={{ lineHeight: 25 }}>
          Last time, you pointed out how you felt <EmphEmotion text="lost" />. You didn't share
          since the "date".
          {'\n'}
          Writing is one of the best way to reflect on how we feel. {'\n'}I advise you to do it
          every time you think it's necessary.
        </Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  paraphSize: {
    flex: 1,
    margin: 10,
    fontFamily: 'Nunito',
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
});

export default Profil;
