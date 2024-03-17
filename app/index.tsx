import { View } from 'react-native';
import { Text, YStack } from 'tamagui';
import { Container, Main, Title, Subtitle } from '../tamagui.config';
import ButtonStart from './components/ButtonStart';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Nunito_300Light } from '@expo-google-fonts/nunito';

export default function Page() {
  const [fontsLoaded] = useFonts({
    Handlee_400Regular,
    Nunito_300Light,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container>
      <Main>
        <YStack>
          <Title style={{ fontFamily: 'Handlee_400Regular' }}>MOODIES</Title>
          <Subtitle style={{ fontFamily: 'Nunito_300Light' }}>
            Improve communication, express how you feel.
          </Subtitle>
          <Subtitle style={{ fontFamily: 'Handlee_400Regular' }}>Do it right</Subtitle>
          <View>
            <ButtonStart />
          </View>
        </YStack>
      </Main>
    </Container>
  );
}
