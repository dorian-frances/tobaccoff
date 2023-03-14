import { Text } from 'react-native';
import React from 'react';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';
import { Colors } from '../../../assets/colors/colors.enum';

export type SectionTextProps = {
  text: string;
  fontSize: number;
  color?: Colors;
};

const SectionText = ({
  text = 'Section text example',
  fontSize = 22,
  color = Colors.BUSINESS_TEXT_COLOR,
}: SectionTextProps) => {
  return (
    <Text
      style={{
        fontFamily: FontsEnum.MEDIUM,
        fontSize: fontSize,
        color: color,
      }}
    >
      {text}
    </Text>
  );
};

export default SectionText;
