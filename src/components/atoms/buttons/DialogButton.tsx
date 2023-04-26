import { Button } from 'react-native-paper';
import React from 'react';

type ButtonDialogProps = {
  onPress: () => void;
  text: string;
  borderColor?: string;
  backgroundColor: string | undefined;
  textColor: string;
};

const ButtonDialog = ({
  onPress,
  text,
  borderColor = undefined,
  backgroundColor,
  textColor,
}: ButtonDialogProps) => {
  return (
    <Button
      onPress={onPress}
      style={{
        borderWidth: 1,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        borderRadius: 10,
      }}
      labelStyle={{ color: textColor }}
    >
      {text}
    </Button>
  );
};

export default ButtonDialog;
