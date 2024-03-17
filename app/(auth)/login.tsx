import React, { useState } from "react";
import { H1, Input, XStack, YStack, Text } from "tamagui";
import { useNavigation } from "expo-router";

const Login = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToRegister = () => {
    // Obligé d'enlever le typage avec ce commentaire sinon y a une erreur, c'est normal tqt

    // @ts-ignore
    navigation.navigate('register');
  }
  return (
    <YStack flex={1}
            justifyContent={"center"}
            gap={"$4"}
    >
      <H1 textAlign="left" color={'black'}>Welcome back.</H1>

      <XStack>
        <Input flex={1} size={`$4`} marginHorizontal={"$4"}
               placeholder={`Email`}
               value={email}
               onChangeText={e => setEmail(e)} />
      </XStack>

      <XStack>
        <Input
          flex={1} size={`$4`}
          marginHorizontal={"$4"}
          placeholder={`Password`}
          secureTextEntry={true}
          value={password}
          onChangeText={e => setPassword(e)}
        />
      </XStack>

      <XStack paddingHorizontal={"$4"} paddingVertical={"$4"}>
        <Text>
          Not an account yet ?{" "}
          <Text textDecorationLine={"underline"} onPress={goToRegister}>Sign Up Here</Text>
        </Text>
      </XStack>
    </YStack>
  );
};

export default Login;
