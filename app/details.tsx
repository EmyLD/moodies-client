import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { YStack } from 'tamagui';
import { Container, Main, Subtitle, Title } from '../tamagui.config';

export default function Details() {
  const { name } = useLocalSearchParams();

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
