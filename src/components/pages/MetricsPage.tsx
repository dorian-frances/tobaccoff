import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import MetricsHeader from '../organisms/MetricsHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryMetrics from '../organisms/PrimaryMetrics';
import { ColorsEnum } from '../../assets/colors/colors.enum';
import SecondaryMetrics from '../organisms/SecondaryMetrics';
import FailButtons from '../organisms/FailButtons';
import Restart from '../organisms/Restart';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { MetricsScreenNavigationProp } from '../../routes/RootStackParamList';
import { MetricService } from '../../services/metric.service';
import { TimeUtils } from '../../utils/time.utils';
import { CigaretteUtils } from '../../utils/cigarette.utils';
import DialogResetCounter from '../organisms/DialogResetCounter';
import { ConfigurationService } from '../../services/configuration.service';
import DialogAddCigarette from '../organisms/DialogAddCigarette';
import { SmokedCigarettes } from '../../utils/model/smoked-cigarettes.model';
import { SmokedCigarette } from '../../utils/model/smoked-cigarette.model';
import { SmokedCigarettesService } from '../../services/smoked-cigarettes.service';
import { GlobalStorageService } from '../../services/global-storage.service';

const MetricsPage = ({}) => {
  const configurationService = useMemo(() => new ConfigurationService(), []);
  const smokedCigarettesService = useMemo(
    () => new SmokedCigarettesService(),
    []
  );
  const globalStorageService = useMemo(() => new GlobalStorageService(), []);
  const metricService = useMemo(
    () => new MetricService(new TimeUtils(), new CigaretteUtils()),
    []
  );

  const navigation = useNavigation<MetricsScreenNavigationProp>();
  const [refreshing, setRefreshing] = useState(false);
  const [sinceValue, setSinceValue] = useState('');
  const [totalSavings, setTotalSavings] = useState(0);
  const [monthSavings, setMonthSavings] = useState(0);
  const [lifeDays, setLifeDays] = useState(0);
  const [nonSmokedCigarettes, setNonSmokedCigarettes] = useState(0);
  const [smokedCigarettes, setSmokedCigarettes] = useState(0);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [showAddCigaretteDialog, setShowAddCigaretteDialog] = useState(false);

  const toggleResetDialog = () => setShowResetDialog(() => !showResetDialog);

  const resetCounter = useCallback(async () => {
    await globalStorageService.clearAllData();
    navigation.navigate('ConfigurationScreen');
  }, [globalStorageService, navigation]);

  const toggleAddCigaretteDialog = useCallback(() => {
    setShowAddCigaretteDialog(() => !showAddCigaretteDialog);
  }, [showAddCigaretteDialog]);

  const fetchConfigurationAndDisplayMetrics = useCallback(async () => {
    const today: Date = new Date();
    const beginningOfTheMonth: Date = new Date(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      1
    );
    const configuration = await configurationService.fetchConfigurationData();
    const persistedSmokedCigarettes: SmokedCigarettes =
      await smokedCigarettesService.fetchSmokedCigarettesData();
    if (configuration !== null) {
      setSinceValue(configuration.stopDate);
      setTotalSavings(
        metricService.computeTotalSavings(
          configuration.stopDate,
          configuration.cigaretteType,
          configuration.cigaretteAmount,
          persistedSmokedCigarettes.smokedCigarettes
        )
      );
      setMonthSavings(
        metricService.computeMonthSavings(
          configuration.stopDate,
          configuration.cigaretteType,
          configuration.cigaretteAmount,
          persistedSmokedCigarettes.smokedCigarettes.filter(
            (smokedCigarette) =>
              smokedCigarette.date.getTime() > beginningOfTheMonth.getTime()
          )
        )
      );
      setLifeDays(
        metricService.computeDaysSaved(
          configuration.stopDate,
          configuration.cigaretteAmount,
          persistedSmokedCigarettes.smokedCigarettes
        )
      );
      setNonSmokedCigarettes(
        metricService.computeNonSmokedCigarettes(
          configuration.stopDate,
          configuration.cigaretteAmount
        )
      );
      setSmokedCigarettes(
        persistedSmokedCigarettes.smokedCigarettes
          .map((smokedCigarette) => smokedCigarette.value)
          .reduce((sum, nexValue) => sum + nexValue, 0)
      );
    }
  }, [configurationService, metricService, smokedCigarettesService]);

  const saveSmokedCigarettes = useCallback(
    async (sliderValue: number) => {
      const persistedSmokedCigarettes: SmokedCigarettes =
        await smokedCigarettesService.fetchSmokedCigarettesData();
      persistedSmokedCigarettes.smokedCigarettes.push(
        new SmokedCigarette(sliderValue, new Date())
      );
      const updatedSmokedCigarettes: SmokedCigarettes = new SmokedCigarettes(
        persistedSmokedCigarettes.smokedCigarettes
      );
      await smokedCigarettesService.saveSmokedCigarettes(
        updatedSmokedCigarettes
      );
      toggleAddCigaretteDialog();
      await fetchConfigurationAndDisplayMetrics();
    },
    [
      smokedCigarettesService,
      toggleAddCigaretteDialog,
      fetchConfigurationAndDisplayMetrics,
    ]
  );

  useEffect(() => {
    fetchConfigurationAndDisplayMetrics();
  }, [fetchConfigurationAndDisplayMetrics]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(async () => {
      fetchConfigurationAndDisplayMetrics();
      setRefreshing(false);
    }, 1000);
  }, [fetchConfigurationAndDisplayMetrics]);

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
                metric: nonSmokedCigarettes,
                formatOptions: { style: 'decimal', maximumFractionDigits: 0 },
                fontSize: 30,
              },
              sectionTextProps: { text: 'Cigarettes non-fumées', fontSize: 13 },
            }}
            smokedMetricProps={{
              metricTextProps: {
                metric: smokedCigarettes,
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
          <FailButtons addCigaretteOnPress={toggleAddCigaretteDialog} />
        </View>
        <View style={styles.restartStyle}>
          <Restart onPress={toggleResetDialog} />
        </View>
      </ScrollView>
      <DialogResetCounter
        showDialog={showResetDialog}
        toggleDialog={toggleResetDialog}
        dialogTitle={'Attention'}
        dialogDescription={
          'Redémarrer le compteur effacera toutes les données de consommation. Es-tu sûr de vouloir continuer ?'
        }
        resetCounter={resetCounter}
      />
      <DialogAddCigarette
        dialogTitle={"T'as craqué ?"}
        sliderText={'Indique le nombre de cigarettes que tu as fumé\n'}
        showDialog={showAddCigaretteDialog}
        toggleDialog={toggleAddCigaretteDialog}
        onValidate={saveSmokedCigarettes}
        minimumSlider={1}
        maximumSlider={30}
        stepSlider={1}
        defaultValue={5}
      />
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
