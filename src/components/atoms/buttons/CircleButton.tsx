import { TouchableRipple } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ColorsEnum } from '../../../assets/colors/colors.enum';

const CircleButton = ({}) => {
  return (
    <TouchableRipple>
      <View style={styles.container} testID={'circleButton'}>
        <Icon
          name={'restart'}
          size={40}
          color={ColorsEnum.INDICATIVE_TEXT_COLOR}
        />
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: ColorsEnum.INPUT_BACKGROUND_COLOR,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CircleButton;
