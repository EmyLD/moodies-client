import React, { useState } from 'react';
import { H1, Input, XStack, YStack, Text } from 'tamagui';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToRegister = () => {
    router.push('/register');
  };

  return (
    <YStack flex={1} justifyContent={'center'} gap={'$4'}>
      <H1 textAlign="left" color={'black'}>
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
        <Text>
          Not an account yet ?{' '}
          <Text textDecorationLine={'underline'} onPress={goToRegister}>
            Sign Up Here
          </Text>
        </Text>
      </XStack>
    </YStack>
  );
};

export default Login;
