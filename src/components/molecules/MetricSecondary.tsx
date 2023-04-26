import React from 'react';
import { View } from 'react-native';
import TextMetric, { TextMetricProps } from '../atoms/texts/TextMetric';
import TextSection, { TextSectionProps } from '../atoms/texts/TextSection';

export type MetricSecondaryProps = {
  metricTextProps: TextMetricProps;
  sectionTextProps: TextSectionProps;
};

const MetricSecondary = ({
  metricTextProps,
  sectionTextProps,
}: MetricSecondaryProps) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <TextMetric {...metricTextProps} />
      <TextSection {...sectionTextProps} />
    </View>
  );
};

export default MetricSecondary;
