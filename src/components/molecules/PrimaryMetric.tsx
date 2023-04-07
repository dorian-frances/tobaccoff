import { StyleSheet, View } from 'react-native';
import SectionText, { SectionTextProps } from '../atoms/texts/SectionText';
import MetricText, { MetricTextProps } from '../atoms/texts/MetricText';
import React from 'react';

export type PrimaryMetricProps = {
  sectionTextProps: SectionTextProps;
  metricTextProps: MetricTextProps;
};

const PrimaryMetric = ({
  sectionTextProps,
  metricTextProps,
}: PrimaryMetricProps) => {
  return (
    <View style={styles.container}>
      <SectionText {...sectionTextProps} />
      <MetricText {...metricTextProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
export default PrimaryMetric;
