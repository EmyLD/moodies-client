import { useRouter } from 'expo-router';
import { Text, YStack } from 'tamagui';

const Register = () => {
  const router = useRouter();
  return (
    <YStack flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text onPress={() => router.back()}>Oopsie, i have an account</Text>
    </YStack>
  );
};

export default Register;
