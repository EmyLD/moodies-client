import { Button } from 'tamagui';
import { useRouter } from 'expo-router';

const index = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.replace('/login');
  };

  return (
    <Button size="$4" width={'$12'} onPress={goToLogin}>
      Log in
    </Button>
  );
};

export default index;
