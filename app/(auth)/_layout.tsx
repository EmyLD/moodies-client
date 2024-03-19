import { useFonts } from 'expo-font';
import { Stack, SplashScreen } from 'expo-router';
import { useEffect } from 'react';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{
          headerShown: true,
          headerTitle: 'Login',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#DD6677' },
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: true,
          headerTitle: 'Register',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#DD6677' },
        }}
      />
    </Stack>
  );
};

export default _layout;
