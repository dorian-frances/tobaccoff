import React from 'react';
import { StyleSheet, View } from 'react-native';
import MetricSecondary, {
  MetricSecondaryProps,
} from '../../molecules/MetricSecondary';
import { heightPixel } from '../../../utils/font-scale.utils';

export type MetricsSecondaryProps = {
  nonSmokedMetricProps: MetricSecondaryProps;
  smokedMetricProps: MetricSecondaryProps;
  lifePointsMetricProps: MetricSecondaryProps;
};

const MetricsSecondary = ({
  nonSmokedMetricProps,
  smokedMetricProps,
  lifePointsMetricProps,
}: MetricsSecondaryProps) => {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.nonSmokedMetricStyle}>
          <MetricSecondary {...nonSmokedMetricProps} />
        </View>
        <View style={styles.smokedMetricStyle}>
          <MetricSecondary {...smokedMetricProps} />
        </View>
      </View>
      <View style={styles.lifePointsMetricStyle}>
        <MetricSecondary {...lifePointsMetricProps} />
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
    marginTop: heightPixel(20),
  },
});

export default MetricsSecondary;
