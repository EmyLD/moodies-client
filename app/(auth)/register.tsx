import { MyInput, Container, Title } from '~/tamagui.config';
import { YStack, XStack, Button, ButtonText, Text } from 'tamagui';
import { SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

const Register = () => {
  const [email, setEmail] = useState(' ');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(' ');
  const [errors, setErrors] = useState({});
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const router = useRouter();

  // interface Input {
  //   email: String;
  //   username: String;
  //   password: String;
  // }

  // const validateInput = (email: Input, username: Input, password: Input) => {
  //   console.log(email, username, password);
  // };

  const toSignIn = () => {
    console.log('go to register');
    router.replace('/login');
  };

  const onchangeUsername = (e: SetStateAction<string>) => {
    const REG_USERNAME = /^[a-z]+$/i;
    setUsername(e);
    if (e !== '' && e !== ' ' && e.length > 4) {
      REG_USERNAME.test(username) ? setIsUsernameValid(true) : setIsUsernameValid(false);
    }
  };

  const onchangeEmail = (e: SetStateAction<string>) => {
    const REG_EMAIL = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    setEmail(e);
    if (e !== '' && e !== ' ' && e.length > 4) {
      REG_EMAIL.test(email) ? setIsEmailValid(true) : setIsEmailValid(false);
    }
  };

  function onChangePassword(e: SetStateAction<string>) {
    const REG_PASSWORD = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    setPassword(e);
    if (e !== '' && e !== ' ' && e.length > 4) {
      REG_PASSWORD.test(password) ? setIsPasswordValid(true) : setIsPasswordValid(false);
    }
  }

  const handleSubmit = () => {
    if (isEmailValid && isPasswordValid && isUsernameValid) {
      console.log(
        `Email : ${isEmailValid} // Pwd : ${isPasswordValid} // Username : ${isUsernameValid}`
      );

      console.log('tutti ok');
    } else {
      console.log(
        `Email : ${isEmailValid} // Pwd : ${isPasswordValid} // Username : ${isUsernameValid}`
      );

      console.log('not ok');
    }
  };

  return (
    <Container justifyContent={'space-between'} alignItems={'center'} maxHeight={850}>
      <YStack flex={1} justifyContent={'center'} gap={'$4'}>
        <Title textAlign="center" color={'black'}>
          Get an account now ! 🙌
        </Title>
        <XStack>
          <MyInput
            flex={1}
            size={`$4`}
            marginHorizontal={'$4'}
            placeholder={`Username`}
            value={username}
            onChangeText={onchangeUsername}
          />
        </XStack>
        <XStack>
          <MyInput
            flex={1}
            size={`$4`}
            marginHorizontal={'$4'}
            placeholder={`Email`}
            value={email}
            onChangeText={onchangeEmail}
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
            onChangeText={onChangePassword}
          />
        </XStack>
        <XStack>
          <Button backgroundColor={'#3CB17E'} onPress={handleSubmit}>
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
