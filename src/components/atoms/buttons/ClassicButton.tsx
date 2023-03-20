import React from 'react';
import { Button } from 'react-native-paper';
import { ColorsEnum } from '../../../assets/colors/colors.enum';
import { StyleProp, TextStyle } from 'react-native';

type ButtonComponentProps = {
  text: string;
  labelStyle: StyleProp<TextStyle>;
  mode: 'elevated' | 'outlined';
  onPress: () => void;
  buttonColor?: string;
};

const ClassicButton = ({
  text = 'Lorem Ipsum',
  labelStyle,
  mode = 'elevated',
  buttonColor = ColorsEnum.PRIMARY_COLOR_BUTTON,
  onPress = () => console.log('Button pressed !'),
}: ButtonComponentProps) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      labelStyle={labelStyle}
      loading={false}
      buttonColor={buttonColor}
      contentStyle={{ paddingTop: 5, height: 45 }}
    >
      {text}
    </Button>
  );
};

export default ClassicButton;
