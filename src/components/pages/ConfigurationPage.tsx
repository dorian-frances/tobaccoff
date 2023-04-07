import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import CigaretteAmountConfiguration from '../organisms/CigaretteAmountConfiguration';
import { SafeAreaView } from 'react-native-safe-area-context';
import ClassicButton from '../atoms/buttons/ClassicButton';
import HeaderText from '../atoms/texts/HeaderText';
import StopDateConfiguration from '../organisms/StopDateConfiguration';
import { ColorsEnum } from '../../assets/colors/colors.enum';
import { FontsEnum } from '../../assets/fonts/fonts.enum';
import { CigaretteType } from '../../model/configuration.model';
import { ConfigurationScreenNavigationProp } from '../../stack/NativeStack';
import { useConfiguration } from '../../hooks/UseConfiguration';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.headerStyle}>
        <HeaderText text={'Paramétrage'} />
      </View>
      <View style={styles.stopDateConfigurationStyle}>
        <StopDateConfiguration
          getStopDate={(date: Date) => getDateToSave(date)}
        />
      </View>
      <View style={styles.cigaretteAmountConfigurationStyle}>
        <CigaretteAmountConfiguration
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
        <ClassicButton
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
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: ColorsEnum.VIEW_BACKGROUND_COLOR,
  },
  headerStyle: {
    flex: 2,
    justifyContent: 'center',
  },
  stopDateConfigurationStyle: {
    width: '80%',
    flex: 2,
    justifyContent: 'center',
  },
  cigaretteAmountConfigurationStyle: {
    width: '80%',
    flex: 3,
    justifyContent: 'center',
  },
  validateButtonContainerStyle: {
    width: '80%',
    flex: 4,
    justifyContent: 'center',
  },
  validateButtonLabelStyle: {
    fontFamily: FontsEnum.BOLD,
    color: 'black',
    fontSize: 20,
  },
});

export default ConfigurationPage;
