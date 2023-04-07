import React from 'react';
import { StyleSheet, View } from 'react-native';
import SecondaryMetric, {
  SecondaryMetricProps,
} from '../molecules/SecondaryMetric';

export type SecondaryMetricsProps = {
  nonSmokedMetricProps: SecondaryMetricProps;
  smokedMetricProps: SecondaryMetricProps;
  lifePointsMetricProps: SecondaryMetricProps;
};

const SecondaryMetrics = ({
  nonSmokedMetricProps,
  smokedMetricProps,
  lifePointsMetricProps,
}: SecondaryMetricsProps) => {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.nonSmokedMetricStyle}>
          <SecondaryMetric {...nonSmokedMetricProps} />
        </View>
        <View style={styles.smokedMetricStyle}>
          <SecondaryMetric {...smokedMetricProps} />
        </View>
      </View>
      <View style={styles.lifePointsMetricStyle}>
        <SecondaryMetric {...lifePointsMetricProps} />
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
