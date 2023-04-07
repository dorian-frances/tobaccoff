import { TouchableRipple } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ColorsEnum } from '../../../assets/colors/colors.enum';

type CircleButtonProps = {
  onPress: () => void;
};

const CircleButton = ({ onPress }: CircleButtonProps) => {
  return (
    <View
      style={{
        borderRadius: 100,
        elevation: 2,
      }}
    >
      <TouchableRipple
        onPress={onPress}
        style={{
          borderRadius: 100,
        }}
        borderless={true}
      >
        <View style={styles.container} testID={'circleButton'}>
          <Icon
            name={'restart'}
            size={40}
            color={ColorsEnum.INDICATIVE_TEXT_COLOR}
          />
        </View>
      </TouchableRipple>
    </View>
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
