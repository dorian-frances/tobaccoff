import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import CigaretteAmountConfiguration from '../organisms/CigaretteAmountConfiguration';
import { SafeAreaView } from 'react-native-safe-area-context';
import ClassicButton from '../atoms/buttons/ClassicButton';
import HeaderText from '../atoms/texts/HeaderText';
import StopDateConfiguration from '../organisms/StopDateConfiguration';
import { useNavigation } from '@react-navigation/native';
import { ColorsEnum } from '../../assets/colors/colors.enum';
import { FontsEnum } from '../../assets/fonts/fonts.enum';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CigaretteType,
  Configuration,
} from '../../utils/model/configuration.model';
import { ConfigurationScreenNavigationProp } from '../../routes/RootStackParamList';
import { ConfigurationService } from '../../services/configuration.service';

const ConfigurationPage = () => {
  const storageService = new ConfigurationService();
  const navigation = useNavigation<ConfigurationScreenNavigationProp>();
  const [dateToSave, getDateToSave] = useState(new Date(Date.now()));
  const [cigaretteTypeToSave, setCigaretteTypeToSave] = useState(
    CigaretteType.INDUSTRIAL
  );
  const [cigaretteAmountToSave, setCigaretteAmountToSave] = useState('');

  const saveConfiguration = async (
    stopDate: Date,
    cigaretteType: CigaretteType,
    cigaretteAmount: string
  ) => {
    await storageService.saveConfigurationData(
      stopDate,
      cigaretteType,
      cigaretteAmount
    );
  };

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
          onPress={async () => {
            await saveConfiguration(
              dateToSave,
              cigaretteTypeToSave,
              cigaretteAmountToSave
            );
            navigation.navigate('MetricsScreen');
          }}
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
    marginTop: 40,
  },
  stopDateConfigurationStyle: {
    width: '80%',
    marginTop: 50,
    marginBottom: 50,
  },
  cigaretteAmountConfigurationStyle: {
    width: '80%',
  },
  validateButtonContainerStyle: {
    width: '80%',
    marginTop: 110,
  },
  validateButtonLabelStyle: {
    fontFamily: FontsEnum.BOLD,
    color: 'black',
    fontSize: 20,
  },
});

export default ConfigurationPage;
