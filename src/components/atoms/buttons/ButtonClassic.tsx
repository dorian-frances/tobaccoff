import React from 'react';
import { Button } from 'react-native-paper';
import { StyleProp, TextStyle } from 'react-native';
import { heightPixel } from '../../../utils/font-scale.utils';
import { ColorsEnum } from '../../../assets/colors/colors.enum';

type ButtonClassicProps = {
  text: string;
  labelStyle: StyleProp<TextStyle>;
  mode: 'elevated' | 'outlined';
  onPress: () => void;
  buttonColor?: string;
};

const ButtonClassic = ({
  text = 'Lorem Ipsum',
  labelStyle,
  mode = 'elevated',
  buttonColor = ColorsEnum.WHITE,
  onPress = () => console.log('Button pressed !'),
}: ButtonClassicProps) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      labelStyle={labelStyle}
      loading={false}
      buttonColor={buttonColor}
      contentStyle={{
        paddingTop: heightPixel(5),
        height: heightPixel(50),
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonClassic;
