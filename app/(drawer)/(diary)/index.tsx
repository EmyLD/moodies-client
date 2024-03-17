import { View, Text } from 'react-native';
import React from 'react';
import { Container, Subtitle, Main } from '~/tamagui.config';
import { YStack } from 'tamagui';

const index = () => {
  return (
    <Container>
      <Main>
        <YStack>
          <Text>index</Text>
        </YStack>
      </Main>
    </Container>
  );
};

export default index;
