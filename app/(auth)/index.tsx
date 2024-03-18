import { XStack, YStack, Text } from 'tamagui';
import { useRouter } from 'expo-router';
import { PencilLine } from '@tamagui/lucide-icons';
import { Subtitle, Logo, Button, ButtonText, Container } from '~/tamagui.config';

const index = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.replace('/login');
  };

  return (
    <Container justifyContent={'space-between'} alignItems={'center'} maxHeight={850}>
      <XStack>
        <Logo marginTop={50}>Moodies</Logo>
      </XStack>
      <XStack>
        <Subtitle>Improve your understanding of emotions. Write and share your mood</Subtitle>
      </XStack>
      <YStack>
        <Text>Others decided to take this trip, how is it gonna be for you ? 🧙‍♂️</Text>
        <Button onPress={goToLogin}>
          <ButtonText>Start your own journey...</ButtonText>
        </Button>
      </YStack>
      <XStack></XStack>
    </Container>
  );
};

export default index;
