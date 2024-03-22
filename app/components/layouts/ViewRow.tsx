import { View, StyleSheet } from 'react-native';
import React, { Children } from 'react';

const ViewRow = (props: any) => {
  return <View> {props.Children}</View>;
};

export const styles = StyleSheet.create({
  viewRow: {
    flexDirection: 'row',
  },
});

export default ViewRow;
