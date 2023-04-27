import {
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import MetricsHeader from '../organisms/metrics/MetricsHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import MetricsPrimary from '../organisms/metrics/MetricsPrimary';
import { ColorsEnum } from '../../assets/colors/colors.enum';
import MetricsSecondary from '../organisms/metrics/MetricsSecondary';
import MetricsFailButtons from '../organisms/metrics/MetricsFailButtons';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { MetricService } from '../../services/metric.service';
import { TimeUtils } from '../../utils/time.utils';
import { CigaretteUtils } from '../../utils/cigarette.utils';
import MetricsDialogResetCounter from '../organisms/metrics/MetricsDialogResetCounter';
import MetricsDialogAddCigarette from '../organisms/metrics/MetricsDialogAddCigarette';
import { SmokedCigarettes } from '../../model/smoked-cigarettes.model';
import { SmokedCigarette } from '../../model/smoked-cigarette.model';
import { SmokedCigaretteService } from '../../services/smoked-cigarette.service';
import MetricsDialogAddVapeExpense from '../organisms/metrics/MetricsDialogAddVapeExpense';
import { VapeExpenses } from '../../model/vape-expenses.model';
import { VapeExpenseService } from '../../services/vape-expense.service';
import { VapeExpense } from '../../model/vape-expense.model';
import { Configuration } from '../../model/configuration.model';
import { MetricsScreenNavigationProp } from '../../stack/NativeStack';
import { useConfiguration } from '../../hooks/UseConfiguration';
import Divider from '../atoms/dividers/Divider';
import {
  fontStyles,
  heightPixel,
  widthPixel,
} from '../../utils/font-scale.utils';
import MetricsLastUpdate from '../organisms/metrics/MetricsLastUpdate';

type Props = {
  navigation: MetricsScreenNavigationProp;
};

const MetricsPage = ({ navigation }: Props) => {
  const configurationContextData = useConfiguration();
  const configuration: Configuration | null =
    configurationContextData.configurationData;
  const smokedCigarettesService = useMemo(
    () => new SmokedCigaretteService(),
    []
  );
  const vapeExpenseService = useMemo(() => new VapeExpenseService(), []);
  const metricService = useMemo(
    () => new MetricService(new TimeUtils(), new CigaretteUtils()),
    []
  );
  const [refreshing, setRefreshing] = useState(false);
  const [sinceValue, setSinceValue] = useState('');
  const [totalSavings, setTotalSavings] = useState(0);
  const [monthSavings, setMonthSavings] = useState(0);
  const [lifeDays, setLifeDays] = useState(0);
  const [nonSmokedCigarettes, setNonSmokedCigarettes] = useState(0);
  const [smokedCigarettes, setSmokedCigarettes] = useState(0);
  const [lastUpdateDate, setLastUpdateDate] = useState(new Date());
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [showAddCigaretteDialog, setShowAddCigaretteDialog] = useState(false);
  const [showAddVapeExpenseDialog, setShowAddVapeExpenseDialog] =
    useState(false);

  const toggleResetDialog = () => setShowResetDialog(() => !showResetDialog);

  const toggleAddCigaretteDialog = useCallback(() => {
    setShowAddCigaretteDialog(() => !showAddCigaretteDialog);
  }, [showAddCigaretteDialog]);

  const toggleAddVapeExpenseDialog = useCallback(() => {
    setShowAddVapeExpenseDialog(() => !showAddVapeExpenseDialog);
  }, [showAddVapeExpenseDialog]);

  const resetCounter = useCallback(async () => {
    await configurationContextData.removeConfiguration();
  }, [configurationContextData]);

  const computeAndDisplayMetrics = useCallback(
    async (configuration: Configuration | null) => {
      const today: Date = new Date();
      const beginningOfTheMonth: Date = new Date(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        1
      );
      const persistedSmokedCigarettes: SmokedCigarettes =
        await smokedCigarettesService.fetchSmokedCigarettesData();
      const persistedVapeExpenses: VapeExpenses =
        await vapeExpenseService.fetchVapeExpensesData();
      if (configuration !== null) {
        setSinceValue(configuration.stopDate);
        setTotalSavings(
          metricService.computeTotalSavings(
            configuration.stopDate,
            configuration.cigaretteType,
            configuration.cigaretteAmount,
            persistedSmokedCigarettes.smokedCigarettes,
            persistedVapeExpenses.vapeExpenses
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
            ),
            persistedVapeExpenses.vapeExpenses.filter(
              (vapeExpense) =>
                vapeExpense.date.getTime() > beginningOfTheMonth.getTime()
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
      setLastUpdateDate(new Date());
    },
    [metricService, smokedCigarettesService, vapeExpenseService]
  );

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
      await computeAndDisplayMetrics(configuration);
    },
    [
      configuration,
      smokedCigarettesService,
      toggleAddCigaretteDialog,
      computeAndDisplayMetrics,
    ]
  );

  const saveVapeExpense = useCallback(
    async (vapeExpense: string) => {
      const persistedVapeExpenses: VapeExpenses =
        await vapeExpenseService.fetchVapeExpensesData();
      persistedVapeExpenses.vapeExpenses.push(
        new VapeExpense(parseFloat(vapeExpense), new Date())
      );
      const updatedVapeExpenses: VapeExpenses = new VapeExpenses(
        persistedVapeExpenses.vapeExpenses
      );
      await vapeExpenseService.saveVapeExpenses(updatedVapeExpenses);
      toggleAddVapeExpenseDialog();
      await computeAndDisplayMetrics(configuration);
    },
    [
      configuration,
      vapeExpenseService,
      toggleAddVapeExpenseDialog,
      computeAndDisplayMetrics,
    ]
  );

  useEffect(() => {
    computeAndDisplayMetrics(configuration);
  }, [configuration, computeAndDisplayMetrics]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(async () => {
      computeAndDisplayMetrics(configuration);
      setRefreshing(false);
    }, 1000);
  }, [configuration, computeAndDisplayMetrics]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={ColorsEnum.WHITE} barStyle={'dark-content'} />
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
              onPress={toggleResetDialog}
            />
          </View>
          <View style={styles.savingsStyle}>
            <MetricsPrimary
              totalSavingsProps={{
                sectionTextProps: {
                  text: 'Economies totales',
                  fontSize: fontStyles.title,
                },
                metricTextProps: {
                  metric: totalSavings,
                  formatOptions: { style: 'currency', currency: 'EUR' },
                  fontSize: fontStyles.xxTitle,
                },
              }}
              monthlySavingsProps={{
                sectionTextProps: {
                  text: 'Ce mois-ci',
                  fontSize: fontStyles.body,
                },
                metricTextProps: {
                  metric: monthSavings,
                  formatOptions: { style: 'currency', currency: 'EUR' },
                  fontSize: fontStyles.xTitle,
                },
              }}
            />
          </View>
          <View style={styles.dividerStyle}>
            <Divider color={ColorsEnum.NEUTRAL_75} />
          </View>
          <View style={styles.secondaryMetricsStyle}>
            <MetricsSecondary
              nonSmokedMetricProps={{
                metricTextProps: {
                  metric: nonSmokedCigarettes,
                  formatOptions: { style: 'decimal', maximumFractionDigits: 0 },
                  fontSize: fontStyles.xTitle,
                },
                sectionTextProps: {
                  text: 'Cigarettes non-fumées',
                  fontSize: fontStyles.small,
                },
              }}
              smokedMetricProps={{
                metricTextProps: {
                  metric: smokedCigarettes,
                  formatOptions: { style: 'decimal', maximumFractionDigits: 2 },
                  fontSize: fontStyles.xTitle,
                },
                sectionTextProps: {
                  text: 'Cigarettes fumées',
                  fontSize: fontStyles.small,
                },
              }}
              lifePointsMetricProps={{
                metricTextProps: {
                  metric: lifeDays,
                  formatOptions: { style: 'decimal', maximumFractionDigits: 2 },
                  fontSize: fontStyles.xTitle,
                },
                sectionTextProps: {
                  text: 'Jours de vie gagnés',
                  fontSize: fontStyles.small,
                },
              }}
            />
          </View>
          <View style={styles.failButtonsStyle}>
            <MetricsFailButtons
              addCigaretteOnPress={toggleAddCigaretteDialog}
              addVapeExpenseOnPress={toggleAddVapeExpenseDialog}
            />
          </View>
          <View style={styles.lastUpdateStyle}>
            <MetricsLastUpdate lastUpdateDate={lastUpdateDate} />
          </View>
        </ScrollView>
        <MetricsDialogResetCounter
          showDialog={showResetDialog}
          toggleDialog={toggleResetDialog}
          dialogTitle={'Attention'}
          dialogDescription={
            'Redémarrer le compteur effacera toutes les données de consommation. Es-tu sûr de vouloir continuer ?'
          }
          resetCounter={() => {
            toggleResetDialog();
            resetCounter();
          }}
        />
        <MetricsDialogAddCigarette
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
        <MetricsDialogAddVapeExpense
          description={'Indique tes dépenses de vapotage'}
          toggleDialog={toggleAddVapeExpenseDialog}
          onValidate={saveVapeExpense}
          showDialog={showAddVapeExpenseDialog}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: widthPixel(10),
    alignItems: 'center',
    backgroundColor: ColorsEnum.WHITE,
  },
  scrollViewStyle: {},
  contentScrollViewStyle: {
    flex: 1,
    alignItems: 'center',
  },
  headerStyle: {
    width: widthPixel(340),
    marginLeft: heightPixel(20),
    paddingTop: heightPixel(10),
    flex: 1,
    justifyContent: 'center',
    zIndex: 1,
  },
  savingsStyle: {
    width: widthPixel(340),
    flex: 4,
    justifyContent: 'center',
  },
  dividerStyle: {
    width: widthPixel(340),
    flex: 2,
    justifyContent: 'center',
  },
  secondaryMetricsStyle: {
    width: widthPixel(340),
    flex: 3,
    justifyContent: 'center',
  },
  failButtonsStyle: {
    width: widthPixel(340),
    flex: 5,
    justifyContent: 'center',
  },
  lastUpdateStyle: {
    width: widthPixel(340),
    flex: 1,
    justifyContent: 'center',
    paddingBottom: heightPixel(20),
  },
});

export default MetricsPage;
