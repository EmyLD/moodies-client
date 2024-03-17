import React, { useState } from 'react';
import { Button, H1, Input, Text, XStack, YStack } from 'tamagui';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToRegister = () => {
    console.log('go to register');
    router.push('/register')
  };

  return (
    <YStack flex={1} justifyContent={'center'} gap={'$4'}>
      <H1 textAlign="left" color={'black'} onPress={goToRegister}>
        Welcome back.
      </H1>

      <XStack>
        <Input
          flex={1}
          size={`$4`}
          marginHorizontal={'$4'}
          placeholder={`Email`}
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
      </XStack>

      <XStack>
        <Input
          flex={1}
          size={`$4`}
          marginHorizontal={'$4'}
          placeholder={`Password`}
          secureTextEntry={true}
          value={password}
          onChangeText={(e) => setPassword(e)}
        />
      </XStack>

      <XStack paddingHorizontal={'$4'} paddingVertical={'$4'}>
        <Button unstyled
                onPress={goToRegister}
        >
          <Text>
            Not an account yet ?{' '}
            <Text textDecorationLine={'underline'}
                  width={'100%'}
                  height={'$3'}
            >
              Sign Up Here
            </Text>
          </Text>
        </Button>
      </XStack>
    </YStack>
  );
};

export default Login;
