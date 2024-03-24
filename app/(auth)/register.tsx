import { Container, Title } from '~/tamagui.config';
import { YStack, XStack, Button, ButtonText, Text } from 'tamagui';
import { useState } from 'react';

import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import Input from '../components/Input';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const REG_EMAIL = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
  const REG_USERNAME = /^[a-z]+$/i;

  const router = useRouter();

  const toSignIn = () => {
    console.log('go to register');
    router.replace('/login');
  };

  const checkPwd = () => {
    while (password !== confirmPassword) {
      return false;
    }
    return true;
  };

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Attention', 'Veuillez remplir tous les champs.');
      if (!checkPwd) {
        Alert.alert('Attention', 'Les mots de passe ne correspondent pas.');
        return;
      }
    } else {
      if (!REG_EMAIL.test(email)) {
      }
    }
  };

  return (
    <Container justifyContent={'space-between'} alignItems={'center'} maxHeight={850}>
      <YStack flex={1} justifyContent={'center'} gap={'$4'}>
        <Title textAlign="center" color={'black'}>
          Get an account now ! 🙌
        </Title>
        <XStack>
          <Input
            inputPlaceholder={`Username`}
            inputValue={username}
            secureTextEntry={false}
            textContent="username"
            onChange={(text) => setUsername(text)}
          />
        </XStack>
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
        <XStack>
          <Input
            inputPlaceholder={`Confirm password`}
            secureTextEntry={true}
            inputValue={confirmPassword}
            textContent="password"
            onChange={(text) => setConfirmPassword(text)}
          />
        </XStack>
        <XStack>
          <Button backgroundColor={'#3CB17E'} onPress={handleRegister}>
            <ButtonText style={{ fontFamily: 'Nunito' }}>Register</ButtonText>
          </Button>
        </XStack>
        <XStack paddingHorizontal={'$4'} paddingVertical={'$4'}>
          <Button unstyled onPress={toSignIn}>
            <Text style={{ fontFamily: 'Nunito' }}>
              Already have an account ?{' '}
              <Text
                style={{ fontFamily: 'Nunito' }}
                textDecorationLine={'underline'}
                width={'100%'}
                height={'$3'}>
                Sign in here
              </Text>
            </Text>
          </Button>
        </XStack>
      </YStack>
    </Container>
  );
};

export default Register;
