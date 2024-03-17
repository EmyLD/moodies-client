import { useRouter } from 'expo-router';
import { Text } from 'tamagui';

const Register = () => {
  const router = useRouter();
  return (
    <Text>
      <Text onPress={() => router.back()}>Oopsie, i have an account</Text>
    </Text>
  );
};

export default Register;
