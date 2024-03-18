import { XStack, YStack, Text, Image } from 'tamagui';
import { useRouter } from 'expo-router';
import { Subtitle, Logo, Button, ButtonText, Main } from '~/tamagui.config';
import { ImageBackground } from 'react-native';

const index = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.replace('/login');
  };

  const image = require('../../assets/img.png');

  return (
    <Main>
      <ImageBackground source={image} resizeMode="cover">
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
      </ImageBackground>
    </Main>
  );
};

export default index;
