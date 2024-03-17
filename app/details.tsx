import { Feather } from '@expo/vector-icons';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Button, Text, YStack } from 'tamagui';

import { Container, Main, Subtitle, Title } from '../tamagui.config';

export default function Details() {
  const { name } = useLocalSearchParams();
  const router = useRouter();

  return (
    <Container>
      <Stack.Screen options={{ title: 'Details' }} />
      <Main>
        <YStack>
          <Title>Details</Title>
          <Subtitle>Showing details for user {name}.</Subtitle>
        </YStack>
      </Main>
    </Container>
  );
}
