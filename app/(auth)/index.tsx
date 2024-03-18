import { XStack, YStack, Text } from 'tamagui';
import { useRouter } from 'expo-router';
import { Subtitle, Logo, Button, ButtonText, Container } from '~/tamagui.config';

const index = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.replace('/login');
  };

  return (
    <Container justifyContent={'space-between'} alignItems={'center'} maxHeight={850}>
      <XStack>
        <Logo marginTop={'$20'}>Moodies</Logo>
      </XStack>
      <XStack>
        <Subtitle>Write about how you feel, share....</Subtitle>
      </XStack>
      <YStack>
        <Text marginBottom={50}>
          Others decided to take this trip, how is it gonna be{' '}
          <Text textDecorationLine={'underline'}>for you</Text> ? 🧙‍♂️
        </Text>
        <Button onPress={goToLogin}>
          <ButtonText>Start your own journey...</ButtonText>
        </Button>
      </YStack>
      <XStack></XStack>
    </Container>
  );
};

export default index;
