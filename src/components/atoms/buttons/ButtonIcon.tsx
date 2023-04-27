import { IconButton } from 'react-native-paper';
import React from 'react';

type ButtonIconProps = {
  icon: string;
  onPress: () => void;
};

const ButtonIcon = ({ icon, onPress }: ButtonIconProps) => {
  return <IconButton icon={icon} onPress={onPress} />;
};

export default ButtonIcon;
