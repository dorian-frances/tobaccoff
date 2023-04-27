import { StyleSheet, View } from 'react-native';
import ButtonClassic from '../../atoms/buttons/ButtonClassic';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';
import { ColorsEnum } from '../../../assets/colors/colors.enum';
import React from 'react';
import {
  fontPixel,
  fontStyles,
  heightPixel,
} from '../../../utils/font-scale.utils';

type MetricsFailButtonsProps = {
  addCigaretteOnPress: () => void;
  addVapeExpenseOnPress: () => void;
};

const MetricsFailButtons = ({
  addCigaretteOnPress,
  addVapeExpenseOnPress,
}: MetricsFailButtonsProps) => {
  return (
    <View>
      <View style={styles.vapotButtonStyle}>
        <ButtonClassic
          text={'Je vapote'}
          labelStyle={{
            fontFamily: FontsEnum.MEDIUM,
            color: ColorsEnum.WHITE,
            fontSize: fontStyles.subTitle,
          }}
          mode={'elevated'}
          onPress={addVapeExpenseOnPress}
          buttonColor={ColorsEnum.PRIMARY_20}
        />
      </View>
      <View style={styles.crackButtonStyle}>
        <ButtonClassic
          text={"J'ai craqué"}
          labelStyle={{
            fontFamily: FontsEnum.MEDIUM,
            color: 'black',
            fontSize: fontStyles.subTitle,
          }}
          mode={'elevated'}
          onPress={addCigaretteOnPress}
          buttonColor={ColorsEnum.PRIMARY_95}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vapotButtonStyle: {},
  crackButtonStyle: {
    marginTop: heightPixel(30),
  },
});

export default MetricsFailButtons;
