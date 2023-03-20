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
} from '../../utils/storage/configuration.model';
import { ConfigurationScreenNavigationProp } from '../../routes/RootStackParamList';

const ConfigurationPage = () => {
  const navigation = useNavigation<ConfigurationScreenNavigationProp>();
  const [stopDate, getStopDate] = useState(new Date());
  const [cigaretteType, setCigaretteType] = useState(CigaretteType.INDUSTRIAL);
  const [cigaretteAmount, setCigaretteAmount] = useState('');

  const saveConfiguration = async (
    stopDate: Date,
    cigaretteType: CigaretteType,
    cigaretteAmount: string
  ) => {
    try {
      const newConfiguration: Configuration = new Configuration(
        stopDate.toISOString(),
        cigaretteType,
        cigaretteAmount
      );

      await AsyncStorage.setItem(
        '@configuration',
        JSON.stringify(newConfiguration)
      );
      console.log(
        `Configuration ${JSON.stringify(newConfiguration)} successfully saved !`
      );
    } catch (error) {
      console.log(
        `Error while saving configuration with stopDate ${stopDate}, cigaretteType ${cigaretteType} and cigaretteAmount ${cigaretteAmount}`
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerStyle}>
        <HeaderText text={'Paramétrage'} />
      </View>
      <View style={styles.stopDateConfigurationStyle}>
        <StopDateConfiguration
          getStopDate={(date: Date) => getStopDate(date)}
        />
      </View>
      <View style={styles.cigaretteAmountConfigurationStyle}>
        <CigaretteAmountConfiguration
          getCigaretteAmount={(cigaretteAmount) =>
            setCigaretteAmount(cigaretteAmount)
          }
          getCigaretteType={(cigaretteType: string) => {
            cigaretteType === 'industrielles'
              ? setCigaretteType(CigaretteType.INDUSTRIAL)
              : setCigaretteType(CigaretteType.ROLLED);
          }}
        />
      </View>
      <View style={styles.validateButtonContainerStyle}>
        <ClassicButton
          mode={'elevated'}
          text={'Valider'}
          labelStyle={styles.validateButtonLabelStyle}
          onPress={async () => {
            await saveConfiguration(stopDate, cigaretteType, cigaretteAmount);
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
