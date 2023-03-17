import { StyleSheet, View } from 'react-native';
import MetricsHeader from '../organisms/MetricsHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import SavingsMetrics from '../organisms/SavingsMetrics';
import { ColorsEnum } from '../../assets/colors/colors.enum';
import SecondaryMetrics from '../organisms/SecondaryMetrics';
import FailButtons from '../organisms/FailButtons';
import Restart from '../organisms/Restart';
import { Configuration } from '../../utils/storage/configuration.model';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { MetricsScreenNavigationProp } from '../../routes/RootStackParamList';

const MetricsPage = ({}) => {
  const navigation = useNavigation<MetricsScreenNavigationProp>();
  const [sinceValue, setSinceValue] = useState('');

  const readData = async () => {
    try {
      const data = await AsyncStorage.getItem('@configuration');
      if (data === null) {
        return navigation.navigate('ConfigurationScreen');
      }
      const configuration = JSON.parse(data) as Configuration;
      setSinceValue(configuration.stopDate);
    } catch (e) {
      console.log('Error while fetching data from @configuration');
    }
  };

  useEffect(() => {
    readData();
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerStyle}>
        <MetricsHeader
          text={`Depuis le ${new Date(sinceValue).toLocaleDateString()}`}
        />
      </View>
      <View style={styles.savingsStyle}>
        <SavingsMetrics />
      </View>
      <View style={styles.secondaryMetricsStyle}>
        <SecondaryMetrics />
      </View>
      <View style={styles.failButtonsStyle}>
        <FailButtons />
      </View>
      <View style={styles.restartStyle}>
        <Restart />
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
    width: '80%',
    marginTop: 60,
  },
  savingsStyle: {
    width: '80%',
    marginTop: 30,
  },
  secondaryMetricsStyle: {
    width: '80%',
    marginTop: 30,
  },
  failButtonsStyle: {
    width: '80%',
    marginTop: 40,
  },
  restartStyle: {
    width: '80%',
    marginTop: 40,
  },
});

export default MetricsPage;
