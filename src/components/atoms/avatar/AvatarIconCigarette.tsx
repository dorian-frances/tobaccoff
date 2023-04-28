import { ColorsEnum } from '../../../assets/colors/colors.enum';
import { Avatar } from 'react-native-paper';
import React from 'react';
import { heightPixel } from '../../../utils/font-scale.utils';

const AvatarIconCigarette = (props: any) => {
  return (
    <Avatar.Icon
      {...props}
      icon={'smoking'}
      color={ColorsEnum.WHITE}
      style={{ backgroundColor: ColorsEnum.PRIMARY_20 }}
      size={heightPixel(40)}
    />
  );
};

export default AvatarIconCigarette;
