import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: true, headerTitle: 'Login' }} />
      <Stack.Screen name="register" options={{ headerShown: true, headerTitle: 'Register' }} />
    </Stack>
  );
};

export default _layout;
