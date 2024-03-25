import React, { useState } from 'react';
import { Button, ButtonText, Text, XStack, YStack } from 'tamagui';
import { Container, MyInput } from '~/tamagui.config';
import { Title } from '~/tamagui.config';
import { useRouter } from 'expo-router';
import Input from '../components/Input';

const Login = () => {
  // Declare router and get email and password input value
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
        'https://84ec-91-169-227-245.ngrok-free.app/users/login',
        requestOptions
      );
      const result = await response.json();

      if (result.message == 'Valid password') {
        router.replace({
          pathname: '/profil',
          params: { id: result.userId, username: result.username },
        });
      } else {
        setErrorMessage(result.message);
      }
    } catch (err) {
      console.warn(err);
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
          <Input
            inputPlaceholder={`Email`}
            inputValue={email}
            secureTextEntry={false}
            textContent="emailAddress"
            onChange={(text) => setEmail(text)}
          />
        </XStack>

        <XStack>
          <Input
            inputPlaceholder={`Password`}
            inputValue={password}
            secureTextEntry={true}
            textContent="password"
            onChange={(text) => setPassword(text)}
          />
        </XStack>

        {errorMessage ? <Text>{errorMessage}</Text> : null}

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
