import { StyleSheet, View } from 'react-native';
import SecondaryMetric from '../molecules/SmokedCigarettes';

const SecondaryMetrics = ({}) => {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.nonSmokedMetricStyle}>
          <SecondaryMetric
            metricTextProp={{
              metric: 20,
              unit: '',
              minimumFractionDigits: 0,
              fontSize: 30,
            }}
            sectionTextProp={{ text: 'Cigarettes non-fumées', fontSize: 13 }}
          />
        </View>
        <View style={styles.nonSmokedMetricStyle}>
          <SecondaryMetric
            metricTextProp={{
              metric: 10,
              unit: '',
              minimumFractionDigits: 0,
              fontSize: 30,
            }}
            sectionTextProp={{ text: 'Cigarettes fumées', fontSize: 13 }}
          />
        </View>
      </View>
      <View style={styles.lifePointsMetricStyle}>
        <SecondaryMetric
          metricTextProp={{
            metric: 10,
            unit: '',
            minimumFractionDigits: 0,
            fontSize: 30,
          }}
          sectionTextProp={{ text: 'Points de vie gagnés', fontSize: 13 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nonSmokedMetricStyle: {
    flex: 1,
  },
  smokedMetricStyle: {
    flex: 1,
  },
  lifePointsMetricStyle: {
    marginTop: 20,
  },
});

export default SecondaryMetrics;
