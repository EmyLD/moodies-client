import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Nunito_300Light } from '@expo-google-fonts/nunito';
import { View } from 'react-native';
import { Text, YStack } from 'tamagui';

import ButtonStart from './components/ButtonStart';
import { Container, Main, Title, Subtitle } from '../tamagui.config';

export default function Page() {
  const [fontsLoaded, fontError] = useFonts({
    Handlee_400Regular,
    Nunito_300Light,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Container>
      <Main>
        <YStack>
          <Title style={{ fontFamily: 'Handlee_400Regular' }}>MOODIES</Title>
          <Subtitle style={{ fontFamily: 'Handlee_400Regular' }}>
            Improve communication, express how you feel.
          </Subtitle>
          <Text style={{ fontFamily: 'Nunito_300Light' }}>Do it right</Text>
          <View>
            <ButtonStart />
          </View>
        </YStack>
      </Main>
    </Container>
  );
}
