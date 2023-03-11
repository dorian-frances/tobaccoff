import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import SectionText from '../atoms/texts/SectionText';
import SegmentedButtonsTobaccoType from '../molecules/SegmentedButtonsTobaccoType';
import InputText from '../atoms/texts/InputText';

type ConfigurationCigaretteAmountProps = {
  containerStyle?: StyleProp<ViewStyle>;
};

const CigaretteAmountConfiguration = ({
  containerStyle = styles.container,
}: ConfigurationCigaretteAmountProps) => {
  return (
    <View style={containerStyle}>
      <View style={styles.sectionTextStyle}>
        <SectionText text={'Je fumais : '} />
      </View>
      <View style={styles.segmentedButtonStyle}>
        <SegmentedButtonsTobaccoType />
      </View>
      <View style={styles.inputTextStyle}>
        <InputText label={'Cigarettes / jours'} rightText={'/jours'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
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
