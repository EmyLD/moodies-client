import { Button, YStack } from 'tamagui';
import { useRouter } from 'expo-router';

const index = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.replace('/login');
  };

  return (
    <YStack flex={1} justifyContent={'center'} alignItems={'center'}>
      <Button size="$4" width={'$12'} onPress={goToLogin}>
        Log in
      </Button>
    </YStack>
    );
};

export default index;
