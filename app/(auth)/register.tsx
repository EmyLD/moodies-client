import { useState } from 'react';

import { useRouter } from 'expo-router';
import { Alert, Pressable, SafeAreaView, Text } from 'react-native';
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
    <SafeAreaView>
      <Text>Get an account now ! 🙌</Text>

      <Input
        inputPlaceholder={`Username`}
        inputValue={username}
        secureTextEntry={false}
        textContent="username"
        onChange={(text) => setUsername(text)}
      />

      <Input
        inputPlaceholder={`Email`}
        inputValue={email}
        secureTextEntry={false}
        textContent="emailAddress"
        onChange={(text) => setEmail(text)}
      />

      <Input
        inputPlaceholder={`Password`}
        inputValue={password}
        secureTextEntry={true}
        textContent="password"
        onChange={(text) => setPassword(text)}
      />

      <Input
        inputPlaceholder={`Confirm password`}
        secureTextEntry={true}
        inputValue={confirmPassword}
        textContent="password"
        onChange={(text) => setConfirmPassword(text)}
      />

      <Pressable onPress={handleRegister}>
        <Text style={{ fontFamily: 'Nunito' }}>Register</Text>
      </Pressable>

      <Pressable onPress={toSignIn}>
        <Text style={{ fontFamily: 'Nunito' }}>
          Already have an account ? <Text style={{ fontFamily: 'Nunito' }}>Sign in here</Text>
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Register;
