import { StyleSheet, View } from 'react-native';
import MetricsHeader from '../organisms/MetricsHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryMetrics from '../organisms/PrimaryMetrics';
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
          infoTextProps={{
            text: `Depuis le ${new Date(sinceValue).toLocaleDateString()}`,
          }}
        />
      </View>
      <View style={styles.savingsStyle}>
        <PrimaryMetrics
          totalSavingsProps={{
            sectionTextProps: {
              text: 'Economies totales',
              fontSize: 22,
            },
            metricTextProps: {
              metric: 20,
              unit: '€',
              minimumFractionDigits: 2,
              fontSize: 50,
            },
          }}
          monthlySavingsProps={{
            sectionTextProps: { text: 'Ce mois-ci', fontSize: 18 },
            metricTextProps: {
              metric: 20,
              unit: '€',
              minimumFractionDigits: 2,
              fontSize: 30,
            },
          }}
        />
      </View>
      <View style={styles.secondaryMetricsStyle}>
        <SecondaryMetrics
          nonSmokedMetricProps={{
            metricTextProps: {
              metric: 20,
              unit: '',
              minimumFractionDigits: 0,
              fontSize: 30,
            },
            sectionTextProps: { text: 'Cigarettes non-fumées', fontSize: 13 },
          }}
          smokedMetricProps={{
            metricTextProps: {
              metric: 20,
              unit: '',
              minimumFractionDigits: 0,
              fontSize: 30,
            },
            sectionTextProps: { text: 'Cigarettes fumées', fontSize: 13 },
          }}
          lifePointsMetricProps={{
            metricTextProps: {
              metric: 20,
              unit: '',
              minimumFractionDigits: 0,
              fontSize: 30,
            },
            sectionTextProps: { text: 'Jours de vie gagnés', fontSize: 13 },
          }}
        />
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
