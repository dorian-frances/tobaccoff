import { StyleSheet, View } from 'react-native';
import React from 'react';
import TextSection from '../../atoms/texts/TextSection';
import ButtonsTobaccoType from '../../molecules/ButtonsTobaccoType';
import TextInput from '../../atoms/texts/TextInput';
import {
  fontPixel,
  fontStyles,
  heightPixel,
} from '../../../utils/font-scale.utils';

type ConfigurationCigaretteAmountProps = {
  getCigaretteAmount: (cigaretteAmount: string) => void;
  getCigaretteType: (cigaretteType: string) => void;
};

const ConfigurationCigaretteAmount = ({
  getCigaretteAmount,
  getCigaretteType,
}: ConfigurationCigaretteAmountProps) => {
  return (
    <View>
      <View style={styles.sectionTextStyle}>
        <TextSection text={'Je fumais : '} fontSize={fontStyles.subTitle} />
      </View>
      <View style={styles.segmentedButtonStyle}>
        <ButtonsTobaccoType
          defaultValue={'industrial'}
          getCigaretteType={(cigaretteType: string) =>
            getCigaretteType(cigaretteType)
          }
        />
      </View>
      <View style={styles.inputTextStyle}>
        <TextInput
          label={'Cigarettes / jour'}
          rightText={'/jour'}
          getValue={(cigaretteAmount: string) => {
            getCigaretteAmount(cigaretteAmount);
          }}
          placeholder={'Nombre de cigarettes'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTextStyle: {
    alignItems: 'center',
    marginBottom: heightPixel(20),
  },
  segmentedButtonStyle: {
    marginBottom: heightPixel(20),
  },
  inputTextStyle: {},
});

export default ConfigurationCigaretteAmount;
