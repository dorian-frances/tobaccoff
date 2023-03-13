import { Text } from 'react-native';
import React from 'react';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';

export type SectionTextProps = {
  text: string;
  fontSize: number;
};

const SectionText = ({
  text = 'Section text example',
  fontSize = 22,
}: SectionTextProps) => {
  return (
    <Text style={{ fontFamily: FontsEnum.MEDIUM, fontSize: fontSize }}>
      {text}
    </Text>
  );
};

export default SectionText;
