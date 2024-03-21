import React, { useState } from 'react';
import { Button, ButtonText, Text, XStack, YStack } from 'tamagui';
import { Container, MyInput } from '~/tamagui.config';
import { Title } from '~/tamagui.config';
import { useRouter } from 'expo-router';

const Login = () => {
  // Declare router and get email and password input value
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Declare submit logic : first get data, if ok go to profil page, if not stay on this page
  //TODO : Add validation value
  const handleSubmit = async () => {
    let data = {
      email: email,
      password: password,
    };

    // ---
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(
        'https://b34e-91-169-227-245.ngrok-free.app/users/login',
        requestOptions
      );
      const result = await response.json();

      if (result.message == 'Valid password') {
        router.push({
          pathname: '/profil',
          params: { id: result.userId, username: result.username },
        });
      } else {
        console.log('Authentification failed, try again or ask for a new password');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  // ---

  // -- If no account, go to register with the link at the end of the page
  const goToRegister = () => {
    console.log('go to register');
    router.push('/register');
  };

  //-- Display
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
