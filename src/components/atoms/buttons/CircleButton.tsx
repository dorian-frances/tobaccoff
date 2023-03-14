import { TouchableRipple } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../../assets/colors/colors.enum';

const CircleButton = ({}) => {
  return (
    <TouchableRipple>
      <View
        style={{
          height: 70,
          width: 70,
          borderRadius: 100,
          backgroundColor: Colors.INPUT_BACKGROUND_COLOR,
          elevation: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        testID={'circleButtonTestId'}
      >
        <Icon name={'restart'} size={40} color={Colors.INDICATIVE_TEXT_COLOR} />
      </View>
    </TouchableRipple>
  );
};

export default CircleButton;
