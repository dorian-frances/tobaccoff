import React from 'react';
import { View } from 'react-native';

interface SeparatorProps {}

export const Separator: React.FunctionComponent<SeparatorProps> = ({}) => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: 'red',
      }}
    />
  );
};
