import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import MetricsHeader from '../organisms/MetricsHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryMetrics from '../organisms/PrimaryMetrics';
import { ColorsEnum } from '../../assets/colors/colors.enum';
import SecondaryMetrics from '../organisms/SecondaryMetrics';
import FailButtons from '../organisms/FailButtons';
import Restart from '../organisms/Restart';
import { Configuration } from '../../utils/model/configuration.model';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { MetricsScreenNavigationProp } from '../../routes/RootStackParamList';
import { MetricService } from '../../services/metric.service';
import { TimeUtils } from '../../utils/time.utils';
import { CigaretteUtils } from '../../utils/cigarette.utils';

const MetricsPage = ({}) => {
  const navigation = useNavigation<MetricsScreenNavigationProp>();
  const [refreshing, setRefreshing] = useState(false);
  const [sinceValue, setSinceValue] = useState('');
  const [totalSavings, setTotalSavings] = useState(0);
  const [monthSavings, setMonthSavings] = useState(0);
  const [lifeDays, setLifeDays] = useState(0);

  const fetchConfigurationData = useCallback(async () => {
    const metricService = new MetricService(
      new TimeUtils(),
      new CigaretteUtils()
    );
    const data = await AsyncStorage.getItem('@configuration');
    if (data !== null) {
      const configuration = JSON.parse(data) as Configuration;
      setSinceValue(configuration.stopDate);
      setTotalSavings(
        metricService.computeTotalSavings(
          configuration.stopDate,
          configuration.cigaretteType,
          configuration.cigaretteAmount
        )
      );
      setMonthSavings(
        metricService.computeMonthSavings(
          configuration.stopDate,
          configuration.cigaretteType,
          configuration.cigaretteAmount
        )
      );
      setLifeDays(
        metricService.computeDaysSaved(
          configuration.stopDate,
          configuration.cigaretteAmount
        )
      );
      console.log(
        `Configuration successfully fetched!\n${JSON.stringify(configuration)}`
      );
    }
  }, []);

  useEffect(() => {
    fetchConfigurationData();
  }, [fetchConfigurationData]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(async () => {
      fetchConfigurationData();
      setRefreshing(false);
    }, 1000);
  }, [fetchConfigurationData]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.contentScrollViewStyle}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
                metric: totalSavings,
                formatOptions: { style: 'currency', currency: 'EUR' },
                fontSize: 50,
              },
            }}
            monthlySavingsProps={{
              sectionTextProps: { text: 'Ce mois-ci', fontSize: 18 },
              metricTextProps: {
                metric: monthSavings,
                formatOptions: { style: 'currency', currency: 'EUR' },
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
                formatOptions: { style: 'decimal', maximumFractionDigits: 2 },
                fontSize: 30,
              },
              sectionTextProps: { text: 'Cigarettes non-fumées', fontSize: 13 },
            }}
            smokedMetricProps={{
              metricTextProps: {
                metric: 20,
                formatOptions: { style: 'decimal', maximumFractionDigits: 2 },
                fontSize: 30,
              },
              sectionTextProps: { text: 'Cigarettes fumées', fontSize: 13 },
            }}
            lifePointsMetricProps={{
              metricTextProps: {
                metric: lifeDays,
                formatOptions: { style: 'decimal', maximumFractionDigits: 2 },
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: ColorsEnum.VIEW_BACKGROUND_COLOR,
  },
  restartStyle: {
    width: '80%',
    marginTop: 40,
  },
  scrollViewStyle: {
    flex: 1,
    width: '100%',
  },
  contentScrollViewStyle: {
    alignItems: 'center',
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
});

export default MetricsPage;
