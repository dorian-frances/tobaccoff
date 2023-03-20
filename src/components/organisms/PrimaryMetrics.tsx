import { StyleSheet, View } from 'react-native';
import PrimaryMetric, { PrimaryMetricProps } from '../molecules/PrimaryMetric';
import Divider from '../atoms/dividers/Divider';
import React from 'react';

export type PrimaryMetricsProps = {
  totalSavingsProps: PrimaryMetricProps;
  monthlySavingsProps: PrimaryMetricProps;
};

const PrimaryMetrics = ({
  totalSavingsProps,
  monthlySavingsProps,
}: PrimaryMetricsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.totalSavingsStyle}>
        <PrimaryMetric {...totalSavingsProps} />
      </View>
      <View style={styles.monthlySavingsStyle}>
        <PrimaryMetric {...monthlySavingsProps} />
      </View>
      <View style={styles.dividerStyle}>
        <Divider />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  totalSavingsStyle: {},
  monthlySavingsStyle: {
    marginTop: 10,
  },
  dividerStyle: {
    marginTop: 30,
  },
});

export default PrimaryMetrics;
