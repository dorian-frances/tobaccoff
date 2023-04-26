import React from 'react';
import { Text } from 'react-native-paper';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';
import { fontStyles } from '../../../utils/font-scale.utils';
import { ColorsEnum } from '../../../assets/colors/colors.enum';

export type TextInfoProps = {
  text: string;
  textAlign?: 'center';
};

const TextInfo = ({ text = 'Lorem Ipsum', textAlign }: TextInfoProps) => {
  return (
    <Text
      style={{
        fontFamily: FontsEnum.MEDIUM,
        fontSize: fontStyles.mini,
        color: ColorsEnum.NEUTRAL_45,
        textAlign: textAlign,
      }}
    >
      {text}
    </Text>
  );
};

export default TextInfo;
