import React, { useState } from 'react';
import { Button, ButtonText, Text, XStack, YStack } from 'tamagui';
import { Container, MyInput } from '~/tamagui.config';
import { Title } from '~/tamagui.config';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    let data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('https://86a7-91-169-227-245.ngrok-free.app/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log(result.username);

      if (result) {
        router.push({
          pathname: '/profil',
          params: { id: result.userId, username: result.username },
        });
      }
    } catch (error) {
      console.error('Erreeur :', error);
    }
  };

  const goToRegister = () => {
    console.log('go to register');
    router.push('/register');
  };

  return (
    <Container justifyContent={'space-between'} alignItems={'center'} maxHeight={850}>
      <YStack flex={1} justifyContent={'center'} gap={'$4'}>
        <Title textAlign="left" color={'black'}>
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
          <Button backgroundColor={'#3CB17E'} onPress={handleSubmit}>
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
