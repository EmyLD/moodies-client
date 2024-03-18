import { useFonts } from 'expo-font';
import { Stack, SplashScreen } from 'expo-router';
import { useEffect } from 'react';

const _layout = () => {
  const [loaded] = useFonts({
    Nunito: require('@tamagui/font-inter/otf/Nunito-Light.otf'),
    Handlee: require('@tamagui/font-inter/otf/Handlee-Regular.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;
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
      <Stack.Screen name="register" options={{ headerShown: true, headerTitle: 'Register' }} />
    </Stack>
  );
};

export default _layout;
