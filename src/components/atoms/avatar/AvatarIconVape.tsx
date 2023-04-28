import { ColorsEnum } from '../../../assets/colors/colors.enum';
import { Avatar } from 'react-native-paper';
import React from 'react';
import { heightPixel } from '../../../utils/font-scale.utils';

const AvatarIconVape = (props: any) => {
  return (
    <Avatar.Icon
      {...props}
      icon={'smoke'}
      color={ColorsEnum.WHITE}
      style={{ backgroundColor: ColorsEnum.PRIMARY_20 }}
      size={heightPixel(40)}
    />
  );
};

export default AvatarIconVape;
