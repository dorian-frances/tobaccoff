import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import ConfigurationCigaretteAmount from '../organisms/configuration/ConfigurationCigaretteAmount';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonClassic from '../atoms/buttons/ButtonClassic';
import TextHeader from '../atoms/texts/TextHeader';
import ConfigurationStopDate from '../organisms/configuration/ConfigurationStopDate';
import { ColorsEnum } from '../../assets/colors/colors.enum';
import { FontsEnum } from '../../assets/fonts/fonts.enum';
import { CigaretteType } from '../../model/configuration.model';
import { ConfigurationScreenNavigationProp } from '../../stack/NativeStack';
import { useConfiguration } from '../../hooks/UseConfiguration';
import {
  fontPixel,
  fontStyles,
  widthPixel,
} from '../../utils/font-scale.utils';

type Props = {
  navigation: ConfigurationScreenNavigationProp;
};

const ConfigurationPage = ({ navigation }: Props) => {
  const configurationContextData = useConfiguration();
  const [dateToSave, getDateToSave] = useState(new Date(Date.now()));
  const [cigaretteTypeToSave, setCigaretteTypeToSave] = useState(
    CigaretteType.INDUSTRIAL
  );
  const [cigaretteAmountToSave, setCigaretteAmountToSave] = useState('');

  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.headerStyle}>
        <TextHeader text={'Paramétrage'} />
      </View>
      <View style={styles.stopDateConfigurationStyle}>
        <ConfigurationStopDate
          getStopDate={(date: Date) => getDateToSave(date)}
        />
      </View>
      <View style={styles.cigaretteAmountConfigurationStyle}>
        <ConfigurationCigaretteAmount
          getCigaretteAmount={(cigaretteAmount) =>
            setCigaretteAmountToSave(cigaretteAmount)
          }
          getCigaretteType={(cigaretteType: string) => {
            cigaretteType === 'industrielles'
              ? setCigaretteTypeToSave(CigaretteType.INDUSTRIAL)
              : setCigaretteTypeToSave(CigaretteType.ROLLED);
          }}
        />
      </View>
      <View style={styles.validateButtonContainerStyle}>
        <ButtonClassic
          mode={'elevated'}
          text={'Valider'}
          labelStyle={styles.validateButtonLabelStyle}
          onPress={() =>
            configurationContextData.saveConfiguration(
              dateToSave,
              cigaretteTypeToSave,
              cigaretteAmountToSave
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: ColorsEnum.WHITE,
  },
  headerStyle: {
    flex: 2,
    justifyContent: 'center',
  },
  stopDateConfigurationStyle: {
    width: widthPixel(314),
    flex: 2,
    justifyContent: 'center',
  },
  cigaretteAmountConfigurationStyle: {
    width: widthPixel(314),
    flex: 3,
    justifyContent: 'center',
  },
  validateButtonContainerStyle: {
    width: widthPixel(314),
    flex: 4,
    justifyContent: 'center',
  },
  validateButtonLabelStyle: {
    fontFamily: FontsEnum.BOLD,
    color: 'black',
    fontSize: fontStyles.subTitle,
  },
});

export default ConfigurationPage;
