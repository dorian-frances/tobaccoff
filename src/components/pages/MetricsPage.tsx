import { StyleSheet, View } from 'react-native';
import MetricsHeader from '../organisms/MetricsHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import SavingsMetrics from '../organisms/SavingsMetrics';
import { Colors } from '../../assets/colors/colors.enum';
import SecondaryMetrics from '../organisms/SecondaryMetrics';
import FailButtons from '../organisms/FailButtons';
import Restart from '../organisms/Restart';

const MetricsPage = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerStyle}>
        <MetricsHeader />
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
    backgroundColor: Colors.VIEW_BACKGROUND_COLOR,
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
