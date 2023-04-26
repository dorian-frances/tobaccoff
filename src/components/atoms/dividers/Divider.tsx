import React from 'react';
import { View } from 'react-native';

type DividerProps = {
  color: string;
};

const Divider = ({ color }: DividerProps) => {
  return <View style={{ borderWidth: 0.2, borderColor: color }} />;
};

export default Divider;
