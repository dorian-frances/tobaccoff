import { Button } from 'react-native-paper';
import React from 'react';
import { heightPixel, widthPixel } from '../../../utils/font-scale.utils';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ColorsEnum } from '../../../assets/colors/colors.enum';

type ButtonDialogProps = {
  onPress: () => void;
  text: string;
  borderColor?: string;
  backgroundColor: string | undefined;
  textColor: string;
  isWarning?: boolean;
};

const ButtonDialog = ({
  onPress,
  text,
  borderColor = undefined,
  backgroundColor,
  textColor,
  isWarning = false,
}: ButtonDialogProps) => {
  return (
    <Button
      onPress={onPress}
      style={{
        borderWidth: 1,
        borderColor: isWarning ? ColorsEnum.WARNING : borderColor,
        backgroundColor: isWarning ? ColorsEnum.WARNING : backgroundColor,
        borderRadius: 10,
        height: heightPixel(48),
        width: widthPixel(70),
        justifyContent: 'center',
      }}
      labelStyle={{ color: textColor, justifyContent: 'center' }}
    >
      {text}
    </Button>
  );
};

export default ButtonDialog;
