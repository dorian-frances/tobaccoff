import { StyleSheet, View } from 'react-native';
import ClassicButton from '../atoms/buttons/ClassicButton';
import { FontsEnum } from '../../assets/fonts/fonts.enum';
import { ColorsEnum } from '../../assets/colors/colors.enum';
import React from 'react';

type FailButtonsProps = {
  addCigaretteOnPress: () => void;
};

const FailButtons = ({ addCigaretteOnPress }: FailButtonsProps) => {
  return (
    <View>
      <View style={styles.vapotButtonStyle}>
        <ClassicButton
          text={'Je vapote'}
          labelStyle={styles.buttonLabelStyle}
          mode={'elevated'}
          onPress={() => console.log('button clicked')}
        />
      </View>
      <View style={styles.crackButtonStyle}>
        <ClassicButton
          text={"J'ai craqué"}
          labelStyle={styles.buttonLabelStyle}
          mode={'elevated'}
          onPress={addCigaretteOnPress}
          buttonColor={ColorsEnum.SECONDARY_COLOR_BUTTON}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vapotButtonStyle: {},
  crackButtonStyle: {
    marginTop: 30,
  },
  buttonLabelStyle: {
    fontFamily: FontsEnum.MEDIUM,
    color: 'black',
    fontSize: 20,
  },
});

export default FailButtons;
