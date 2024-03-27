import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import Input from '../components/Input';
import { uri } from '~/utils/uri';
import { Pressable, SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-reanimated/lib/typescript/Animated';

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
      const response = await fetch(`${uri}/users/login`, requestOptions);
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
    <SafeAreaView>
      <Text>Hey! Welcome!</Text>

      <View>
        <Input
          inputPlaceholder={`Email`}
          inputValue={email}
          secureTextEntry={false}
          textContent="emailAddress"
          onChange={(text) => setEmail(text)}
        />
      </View>

      <View>
        <Input
          inputPlaceholder={`Password`}
          inputValue={password}
          secureTextEntry={true}
          textContent="password"
          onChange={(text) => setPassword(text)}
        />
      </View>

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <View>
        <Pressable onPress={handleSubmit}>
          <Text style={{ fontFamily: 'Nunito' }}>Log in</Text>
        </Pressable>
      </View>

      <View>
        <Pressable onPress={goToRegister}>
          <Text style={{ fontFamily: 'Nunito' }}>
            Not an account yet ? <Text>Sign Up Here</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
