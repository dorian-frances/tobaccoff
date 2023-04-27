import { StyleSheet, View } from 'react-native';
import TextSection, { TextSectionProps } from '../atoms/texts/TextSection';
import TextMetric, { TextMetricProps } from '../atoms/texts/TextMetric';
import React from 'react';

export type MetricPrimaryProps = {
  sectionTextProps: TextSectionProps;
  metricTextProps: TextMetricProps;
};

const MetricPrimary = ({
  sectionTextProps,
  metricTextProps,
}: MetricPrimaryProps) => {
  return (
    <View style={styles.headerContainer}>
      <TextSection {...sectionTextProps} />
      <TextMetric {...metricTextProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
  },
});
export default MetricPrimary;
