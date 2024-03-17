import React from 'react';
import { Button, Text } from 'tamagui';
import { Container } from '~/tamagui.config';
import { Link } from 'expo-router';

const index = () => {
  return (
    <Link replace href="./login" style={{ paddingTop: 70 }}>
      Log
    </Link>
  );
};

export default index;
