import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import SectionText from '../atoms/texts/SectionText';
import SegmentedButtonsTobaccoType from '../molecules/SegmentedButtonsTobaccoType';
import InputText from '../atoms/texts/InputText';

type ConfigurationCigaretteAmountProps = {
  getCigaretteAmount: (cigaretteAmount: string) => void;
  getCigaretteType: (cigaretteType: string) => void;
};

const CigaretteAmountConfiguration = ({
  getCigaretteAmount,
  getCigaretteType,
}: ConfigurationCigaretteAmountProps) => {
  return (
    <View>
      <View style={styles.sectionTextStyle}>
        <SectionText text={'Je fumais : '} fontSize={22} />
      </View>
      <View style={styles.segmentedButtonStyle}>
        <SegmentedButtonsTobaccoType
          getCigaretteType={(cigaretteType: string) =>
            getCigaretteType(cigaretteType)
          }
        />
      </View>
      <View style={styles.inputTextStyle}>
        <InputText
          label={'Cigarettes / jour'}
          rightText={'/jour'}
          getCigaretteAmount={(cigaretteAmount: string) => {
            getCigaretteAmount(cigaretteAmount);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTextStyle: {
    alignItems: 'center',
    marginBottom: 20,
  },
  segmentedButtonStyle: {
    marginBottom: 20,
  },
  inputTextStyle: {},
});

export default CigaretteAmountConfiguration;
