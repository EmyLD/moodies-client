import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const index = () => {
  const router = useRouter();

  const onpressredirect = () => {
    router.replace('/(drawer)');
  };

  return (
    <View>
      <Pressable onPress={onpressredirect}>
        <Text style={styles.container}>I'm pressable!</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 100,
    height: 50,
    color: 'red',
  },
});

export default index;
