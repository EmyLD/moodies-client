import React, { useState } from 'react';
import { Button, ButtonText, Text, XStack, YStack, Input } from 'tamagui';
import { Container, MyInput } from '~/tamagui.config';
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
          <MyInput
            flex={1}
            size={`$4`}
            marginHorizontal={'$4'}
            placeholder={`Email`}
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
        </XStack>

        <XStack>
          <MyInput
            flex={1}
            size={`$4`}
            marginHorizontal={'$4'}
            placeholder={`Password`}
            secureTextEntry={true}
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
        </XStack>

        <XStack>
          <Button backgroundColor={'#3CB17E'}>
            <ButtonText style={{ fontFamily: 'Nunito' }}>Log in</ButtonText>
          </Button>
        </XStack>

        <XStack paddingHorizontal={'$4'} paddingVertical={'$4'}>
          <Button unstyled onPress={goToRegister}>
            <Text style={{ fontFamily: 'Nunito' }}>
              Not an account yet ?{' '}
              <Text
                style={{ fontFamily: 'Nunito' }}
                textDecorationLine={'underline'}
                width={'100%'}
                height={'$3'}>
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
