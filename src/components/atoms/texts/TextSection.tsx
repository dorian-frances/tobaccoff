import { Text } from 'react-native';
import React from 'react';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';
import { ColorsEnum } from '../../../assets/colors/colors.enum';

export type TextSectionProps = {
  text: string;
  fontSize: number;
  color?: ColorsEnum;
};

const TextSection = ({
  text = 'Section text example',
  fontSize,
  color = ColorsEnum.BLACK,
}: TextSectionProps) => {
  return (
    <Text
      style={{
        fontFamily: FontsEnum.MEDIUM,
        fontSize: fontSize,
        color: color,
        textAlign: 'center',
      }}
    >
      {text}
    </Text>
  );
};

export default TextSection;
