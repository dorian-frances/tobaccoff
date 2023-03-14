import { TouchableRipple } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { View } from 'react-native';
import { ColorsEnum } from '../../../assets/colors/colors.enum';

type CircleButtonProps = {
  testID?: string;
};

const CircleButton = ({ testID }: CircleButtonProps) => {
  return (
    <TouchableRipple>
      <View
        style={{
          height: 70,
          width: 70,
          borderRadius: 100,
          backgroundColor: ColorsEnum.INPUT_BACKGROUND_COLOR,
          elevation: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        testID={testID}
      >
        <Icon
          name={'restart'}
          size={40}
          color={ColorsEnum.INDICATIVE_TEXT_COLOR}
        />
      </View>
    </TouchableRipple>
  );
};

export default CircleButton;
