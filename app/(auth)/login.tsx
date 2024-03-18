import React, { useState } from 'react';
import { Button, ButtonText, Text, XStack, YStack, Input } from 'tamagui';
import { Container } from '~/tamagui.config';
import { Title } from '~/tamagui.config';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToRegister = () => {
    console.log('go to register');
    router.push('/register');
  };

  return (
    <Container justifyContent={'space-between'} alignItems={'center'} maxHeight={850}>
      <YStack flex={1} justifyContent={'center'} gap={'$4'}>
        <Title textAlign="left" color={'black'} onPress={goToRegister}>
          Hey! Welcome!
        </Title>

        <XStack>
          <Input
            flex={1}
            size={`$4`}
            marginHorizontal={'$4'}
            placeholder={`Email`}
            placeholderTextColor={'#fff'}
            value={email}
            backgroundColor={'#3CB17E'}
            opacity={0.5}
            color={'#fff'}
            borderColor={'#3CB17E'}
            onChangeText={(e) => setEmail(e)}
          />
        </XStack>

        <XStack>
          <Input
            flex={1}
            size={`$4`}
            marginHorizontal={'$4'}
            placeholder={`Password`}
            placeholderTextColor={'#fff'}
            secureTextEntry={true}
            value={password}
            backgroundColor={'#3CB17E'}
            opacity={0.5}
            borderColor={'#3CB17E'}
            onChangeText={(e) => setPassword(e)}
          />
        </XStack>

        <XStack>
          <Button backgroundColor={'#3CB17E'}>
            <ButtonText>Log in</ButtonText>
          </Button>
        </XStack>

        <XStack paddingHorizontal={'$4'} paddingVertical={'$4'}>
          <Button unstyled onPress={goToRegister}>
            <Text>
              Not an account yet ?{' '}
              <Text textDecorationLine={'underline'} width={'100%'} height={'$3'}>
                Sign Up Here
              </Text>
            </Text>
          </Button>
        </XStack>
      </YStack>
    </Container>
  );
};

export default Login;
